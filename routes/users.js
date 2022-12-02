const router = require("express").Router();
const bcrypt = require("bcrypt");
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 10;

const { authRequired } = require("./utils");
const { order_Items } = require("../prisma/prisma");

router.post(
  "/register",
  asyncErrorHandler(async (req, res, next) => {
    const { username, password, email } = req.body;
    console.log("req body reg", req.body);
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const createdUser = await prisma.users.create({
      data: { username: username, password: hashedPassword, email: email },
    });

    delete createdUser.password;

    const userId = createdUser.id;
    await prisma.orders.create({
      data: { userId: userId, status: "pending", is_cart: true },
    });

    const token = jwt.sign(createdUser, process.env.JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send(createdUser);
  })
);

router.post(
  "/login",
  asyncErrorHandler(async (req, res, next) => {
    const { username, password, email } = req.body;
    console.log("req body reg", req.body);
    const user = await prisma.users.findUnique({
      where: { username: username },
    });

    console.log("user", user);
    const validPassword = await bcrypt.compare(password, user.password);

    console.log("valid pass", validPassword);

    if (validPassword) {
      const token = jwt.sign(user, process.env.JWT_SECRET);
      console.log("user", user);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });
      delete user.password;
      const cart = await prisma.orders.findMany({
        where: { userId: user.id, is_cart: true },
        include: {
          order_items: {
            include: {
              items: true,
            },
          },
        },
      });
      res.send({ user, cart });
    } else {
      next("invalid credentials");
    }
  })
);

router.post(
  "/logout",
  asyncErrorHandler(async (req, res, next) => {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  })
);

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const users = await prisma.users.findMany();
    res.send(users);
  })
);

router.get(
  "/me",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    res.send(req.user);
  })
);

router.patch(
  "/me",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const { username, password, email } = req.body;
    const updatedUser = await prisma.users.update({
      where: {
        id: req.user.id,
      },
      data: { username, password, email },
    });
    res.send(updatedUser);
  })
);

router.get(
  "/my_orders",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const myOrders = await prisma.orders.findMany({
      where: { userId: req.user.id },
      include: {
        order_items: {
          include: {
            items: true,
          },
        },
      },
    });
    res.send(myOrders);
  })
);

router.get(
  "/my_reviews",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const myReviews = await prisma.reviews.findMany({
      where: { userId: req.user.id },
      include: {
        item_reviews: {
          include: {
            items: true,
          },
        },
      },
    });
    res.send(myReviews);
  })
);

router.get(
  "/:userId/cart",
  asyncErrorHandler(async (req, res, next) => {
    const { userId } = +req.params;
    console.log("req body reg", req.body);
    const myCart = await prisma.orders.findMany({
      where: { userId: userId, is_cart: true },
      include: {
        order_items: {
          include: {
            items: true,
          },
        },
      },
    });
    res.send(myCart);
  })
);

module.exports = router;
