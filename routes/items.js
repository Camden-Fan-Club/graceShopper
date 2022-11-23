const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

// GET /api/p
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const items = await prisma.items.findMany({
      include: { categories: true },
    });
    res.send(items);
  })
);

router.get(
  "/:itemId",
  asyncErrorHandler(async (req, res, next) => {
    const singleItem = await prisma.items.findUnique({
      where: {
        id: +req.params.itemId,
      },
      include: { categories: true },
      include: {
        item_reviews: {
          include: {
            reviews: true,
          },
        },
      },
    });
    res.send(singleItem);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const { name, description, price, stockQty, isFeatured, onSale, imageUrl } =
      req.body;
    const createdItem = await prisma.items.create({
      data: req.body,
    });
    res.send(createdItem);
  })
);

router.patch(
  "/:itemId",
  asyncErrorHandler(async (req, res, next) => {
    const { name, description, price, stockQty, isFeatured, onSale, imageUrl } =
      req.body;
    const updatedItem = await prisma.items.update({
      where: {
        id: +req.params.itemId,
      },
      data: req.body,
    });
    res.send(updatedItem);
  })
);

router.delete(
  "/:itemId",
  asyncErrorHandler(async (req, res, next) => {
    const deletedItem = await prisma.items.delete({
      where: {
        id: +req.params.itemId,
      },
    });
    res.send(deletedItem);
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

module.exports = router;
