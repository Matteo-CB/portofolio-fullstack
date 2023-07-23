const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");
const auth = require("../middlewares/auth");
router.post("/", stuffCtrl.createThing);
router.put("/:id", stuffCtrl.putThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.get("/", stuffCtrl.getThing);

module.exports = router;
