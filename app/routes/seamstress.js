const router = require("express").Router();

const seamstressController = require('../controller/seamstress');

//API ROUTES
router.get('/index', seamstressController.index);

router.post('/save', seamstressController.save);
router.get('/list', seamstressController.list);
router.get('/filter', seamstressController.filter);
router.get('/id/:id', seamstressController.findById);
// router.get('/', seamstressController.list);
// router.get('/code/:code', seamstressController.findByCode);
// router.get('/name/:name', seamstressController.findByName);
// router.get('/filter', seamstressController.filter);
// router.options('/filter', seamstressController.options);
// router.delete('/remove', seamstressController.remove);
// router.delete('/removeimage', seamstressController.removeImage);

// // APPLICATION ROUTES
// router.post('/save', seamstressController.save);
// router.post('/addimage', seamstressController.addImage);
// router.post('/categorySave', seamstressController.categorySave);
// router.get('/categoryList', seamstressController.categoryList);
// router.post('/colorSave', seamstressController.colorSave);
// router.get('/colorList', seamstressController.colorList);

module.exports = router;