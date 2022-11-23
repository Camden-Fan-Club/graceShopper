const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const categories = await prisma.categories.findMany();
    res.send(categories);
  })
);

module.exports = router;
