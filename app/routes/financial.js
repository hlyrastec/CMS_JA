const router = require("express").Router();

const financialController = require('../controller/financial');

//API ROUTES
router.get('/index', financialController.index);
router.get('/config', financialController.config);
router.post('/incomecategory/save', financialController.incomeCategorySave);
router.get('/incomecategory/filter', financialController.incomeCategoryFilter);
router.get('/incomecategory/list', financialController.incomeCategoryList);

module.exports = router;