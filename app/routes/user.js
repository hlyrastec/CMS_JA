const router = require("express").Router();

const userController = require("../controller/user");
const homeController = require("../controller/home");

router.get('/', userController.verify, userController.index);
router.get('/list', userController.list);
router.post('/show', userController.show);
router.post('/updateInfo', userController.updateInfo);
router.post('/updatePassword', userController.updatePassword);

module.exports = router;