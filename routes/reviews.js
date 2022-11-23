const router = require("express").Router();
const { asyncErrorHandler, authRequired } = require("./utils");
const prisma = require("../prisma/prisma");
const { reviews } = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const reviews = await prisma.reviews.findMany();
    res.send(reviews);
  })
);

router.post(
  "/:itemId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const itemId = +req.params.itemId;
    const { title, stars, content } = req.body;
    const createdReview = await prisma.reviews.create({
      data: {
        title: title,
        stars: stars,
        content: content,
        userId: req.user.id,
      },
    });
    const createdItemReview = await prisma.item_Reviews.create({
      data: { reviewId: createdReview.id, itemId: itemId },
    });

    res.send(createdReview);
  })
);

module.exports = router;
