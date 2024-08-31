const router = require("express").Router();
const { ensureAuthenticated } = require("../config/guards.config");
const { userNew, userCreate, uploadImage } = require("../controllers/users.controller");

router.get("/signup/form", userNew);
router.post("/signup", userCreate);
router.post("/update/image", ensureAuthenticated, uploadImage);

module.exports = router;
