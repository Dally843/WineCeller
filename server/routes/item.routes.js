const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/get", itemController.selectAll);
router.post("/post",itemController.save)
// router.get("/g/searchpost",itemController.searchpost)
// router.get("/d",itemController.deletpost)
module.exports = router;
