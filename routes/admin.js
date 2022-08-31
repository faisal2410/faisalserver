const router = require("express").Router();
const {adminLogin}=require("../controllers/admin")

// admin login
router.post("/admin-login",adminLogin );

module.exports = router;