const router = require("express").Router();

const financialController = require('../controller/financial');

//API ROUTES
router.get('/index', financialController.index);
router.get('/config', financialController.config);
router.post('/incomecategory/save', financialController.incomeCategorySave);
router.get('/incomecategory/filter', financialController.incomeCategoryFilter);
router.get('/incomecategory/list', financialController.incomeCategoryList);
router.post('/incomeorigin/save', financialController.incomeOriginSave);
router.get('/incomeorigin/filterbycategory', financialController.incomeOriginFilterByCategory);
router.get('/incomeorigin/filter', financialController.incomeOriginFilter);
// router.get('/incomecategory/list', financialController.incomeCategoryList);
router.delete('/incomecategory/remove', financialController.incomeCategoryRemove);
router.delete('/incomeorigin/remove', financialController.incomeOriginRemove);

module.exports = router;