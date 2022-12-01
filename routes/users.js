const router = require("express").Router();
const bcrypt = require("bcrypt");
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 10;

const { authRequired } = require("./utils");

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

    // Create a cart with the createdUser.id => order is_cart = true

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
    try {
      const { username, password, email } = req.body;
      console.log("req body reg", req.body);
      const user = await prisma.users.findUnique({
        where: { username: username },
      });
      //const validPassword = await bcrypt.compare(password, user.password);
      delete user.password;
      const token = jwt.sign(user, process.env.JWT_SECRET);
      console.log(user);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      res.send(user);
      // if (validPassword) {
      //   const token = jwt.sign(user, process.env.JWT_SECRET);
      //   console.log(user);

      //   res.cookie("token", token, {
      //     sameSite: "strict",
      //     httpOnly: true,
      //     signed: true,
      //   });

      //   res.send(user);
      // }
    } catch (error) {
      next(error);
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
      data: req.body,
    });
    res.send(updatedUser);
  })
);

// GET api/users/me/cart -> Get and order with userId and is_cart = true
router.get(
  "/me/cart",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    console.log("cart", req);

    const myCart = await prisma.orders.findUnique({
      where: { userId: req.body.user.id },
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

module.exports = router;
