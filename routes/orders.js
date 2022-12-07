const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const orders = await prisma.orders.findMany();
    res.send(orders);
  })
);

router.get(
  "/:orderId",
  asyncErrorHandler(async (req, res, next) => {
    const singleOrder = await prisma.orders.findUnique({
      where: {
        id: +req.params.orderId,
      },
      include: {
        order_items: {
          include: {
            items: true,
          },
        },
      },
    });
    res.send(singleOrder);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const { userId, status, isCart } = req.body;
    const createdOrder = await prisma.orders.create({
      data: { userId: userId, status: status, isCart: isCart },
    });

    res.send(createdOrder);
  })
);

router.patch(
  "/:orderId",
  asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.body;
    const updatedOrder = await prisma.orders.update({
      where: {
        id: +req.params.orderId,
      },
      data: { userId: userId, status: "confirmed", is_cart: false },
    });
    await prisma.orders.create({
      data: { userId: userId, status: "pending", is_cart: true },
    });
    const cart = await prisma.orders.findMany({
      where: { userId: userId, is_cart: true },
      include: {
        order_items: {
          include: {
            items: true,
          },
        },
      },
    });
    res.send(updatedOrder);
  })
);

module.exports = router;
