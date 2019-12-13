const userController = require('./user');

const Financial = require('../model/financial');

const financialController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.redirect('/');
		};

		const incomeCategories = await Financial.incomeCategoriesList();

		res.render('financial/index', { user: req.user, incomeCategories });
	},
	config: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.redirect('/');
		};

		const incomeCategories = await Financial.incomeCategoriesList();

		res.render('financial/config', { user: req.user, incomeCategories });
	},
	incomeCategorySave: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		const income = {
			category_name: req.body.category_name
		};

		console.log(income.category_name);
		Financial.incomeCategorySave(income)
			.then(row => {
				res.send({ done: 'A categoria de receita foi cadastrada com sucesso!' });
			})
			.catch(err => {
				console.log(err);
				res.send({ err: 'Ocorreu um erro ao salvar a categoria de receita!' });
			});
	},
	incomeCategoryFilter: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		const income = {
			category_name: req.body.category_name
		};

		Financial.income_category_save(income)
			.then(row => {
				res.send({ done: 'A categoria de receita foi cadastrada com sucesso!' });
			})
			.catch(err => {
				console.log(err);
				res.send({ err: 'Ocorreu um erro ao salvar a categoria de receita!' });
			});
	},
	incomeCategoryList: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		Financial.income_category_save(income)
			.then(row => {
				res.send({ done: 'A categoria de receita foi cadastrada com sucesso!' });
			})
			.catch(err => {
				console.log(err);
				res.send({ err: 'Ocorreu um erro ao salvar a categoria de receita!' });
			});
	}
};

module.exports = financialController;