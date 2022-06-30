const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/get", itemController.selectAll);
router.post("/post",itemController.save)
// router.get("/get/searchpost",itemController.searchpost)
// router.get("/delet",itemController.deletpost)
module.exports = router;
