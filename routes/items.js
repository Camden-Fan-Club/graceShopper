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
    const {
      name,
      description,
      price,
      stockQty,
      isFeatured,
      onSale,
      imageUrl,
      categoryId,
    } = req.body;
    const createdItem = await prisma.items.create({
      data: {
        name,
        description,
        price: +price,
        stockQty: +stockQty,
        isFeatured,
        onSale,
        imageUrl,
        categoryId,
      },
    });
    res.send(createdItem);
  })
);

router.patch(
  "/:itemId",
  asyncErrorHandler(async (req, res, next) => {
    const { name, description, price, isFeatured, onSale } = req.body;
    const updatedItem = await prisma.items.update({
      where: {
        id: +req.params.itemId,
      },
      data: {
        name,
        description,
        price: +price,
        isFeatured,
        onSale,
      },
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

module.exports = router;
