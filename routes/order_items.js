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

module.exports = router;
