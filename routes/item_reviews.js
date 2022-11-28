const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const item_reviews = await prisma.item_Reviews.findMany();
    res.send(item_reviews);
  })
);

router.delete(
  "/:itemId/:reviewId",
  asyncErrorHandler(async (req, res, next) => {
    const iId = +req.params.itemId;
    const rId = +req.params.reviewId;
    const { reviewId, itemId } = req.body;
    const deletedReview = await prisma.item_Reviews.delete({
      where: {
        reviewId_itemId: { reviewId: rId, itemId: iId },
      },
    });
    res.send(deletedReview);
  })
);

module.exports = router;
