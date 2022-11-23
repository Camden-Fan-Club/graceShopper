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

module.exports = router;
