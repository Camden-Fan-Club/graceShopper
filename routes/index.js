const router = require("express").Router();

router.use("/items", require("./items"));
router.use("/users", require("./users"));
router.use("/categories", require("./categories"));
router.use("/item_reviews", require("./item_reviews"));
router.use("/orders", require("./orders"));
router.use("/order_items", require("./order_items"));
router.use("/reviews", require("./reviews"));

module.exports = router;
