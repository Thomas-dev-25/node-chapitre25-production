const router = require("express").Router();
const { sessionNew, sessionCreate, sessionDelete } = require("../controllers/auth.controller");

router.get("/signin/form", sessionNew);
router.post("/signin", sessionCreate);
// router.delete("/signout", sessionDelete);
router.get("/signout", sessionDelete);

module.exports = router;
