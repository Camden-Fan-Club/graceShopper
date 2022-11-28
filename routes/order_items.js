const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const order_items = await prisma.order_Items.findMany();
    res.send(order_items);
  })
);

router.post(
  "/:itemId/:orderId",
  asyncErrorHandler(async (req, res, next) => {
    const iId = +req.params.itemId;
    const oId = +req.params.orderId;
    const { orderId, itemId, quantity } = req.body;
    const createdItem = await prisma.order_Items.create({
      data: { orderId: oId, itemId: iId, quantity: quantity },
    });
    res.send(createdItem);
  })
);
// PATCH quantity
router.patch(
  "/:itemId/:orderId",
  asyncErrorHandler(async (req, res, next) => {
    const iId = +req.params.itemId;
    const oId = +req.params.orderId;
    const { orderId, itemId, quantity } = req.body;
    const updatedOrderItems = await prisma.order_Items.update({
      where: {
        orderId_itemId: { orderId: oId, itemId: iId },
      },

      data: {
        orderId: oId,
        itemId: iId,
        quantity: quantity,
      },
    });

    res.send(updatedOrderItems);
  })
);

router.delete(
  "/:itemId/:orderId",
  asyncErrorHandler(async (req, res, next) => {
    const iId = +req.params.itemId;
    const oId = +req.params.orderId;
    const { orderId, itemId } = req.body;
    const deletedOrderItems = await prisma.order_Items.delete({
      where: {
        orderId_itemId: { orderId: oId, itemId: iId },
      },
    });

    res.send(deletedOrderItems);
  })
);

module.exports = router;
