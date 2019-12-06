const router = require("express").Router();

const passport = require('../../config/passport');

const homeController = require("../controller/home");

router.get("/", homeController.index);
router.get("/login", homeController.login);
router.get("/signup", homeController.signup);
router.get("/logout", homeController.logout);

router.post('/login', passport.authenticate('local-login', { 
	failureRedirect: '/login',
	failureFlash: true
}), homeController.successfulLogin);

router.post('/signup', passport.authenticate('local-signup', { 
	failureRedirect: '/signup',
	failureFlash: true
}), homeController.successfulSignup);

router.use("/admin", require("./admin"));
router.use("/user", require("./user"));
router.use("/product", require("./product"));
router.use("/seamstress", require("./seamstress"));
router.use("/customer", require("./customer"));
router.use("/sale", require("./sale"));

module.exports = router;