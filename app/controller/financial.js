const userController = require('./user');

const Financial = require('../model/financial');

const financialController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.redirect('/');
		};

		const incomeCategories = await Financial.incomeCategoryList();

		res.render('financial/index', { user: req.user, incomeCategories });
	},
	config: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.redirect('/');
		};

		const incomeCategories = await Financial.incomeCategoryList();

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
			category_name: req.query.name
		};

		if(req.query.name){
			Financial.findIncomeCategoryByName(income)
				.then(categories => {
					res.send( categories );
				})
				.catch(err => {
					console.log(err);
					res.send({ err: 'Ocorreu um erro ao filtrar as categorias de receita!' });
				});
		} else {
			Financial.incomeCategoryList()
				.then(categories => {
					res.send( categories );
				})
				.catch(err => {
					console.log(err);
					res.send({ err: 'Ocorreu um erro ao filtrar as categorias de receita!' });
				});
		};
	},
	incomeCategoryList: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		Financial.incomeCategoryList()
			.then(incomeCategories => {
				console.log(incomeCategories);
				res.send(incomeCategories);
			})
			.catch(err => {
				res.send({ err: 'Ocorreu um erro ao salvar a categoria de receita!' });
			});
	},
	incomeCategoryRemove: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		Financial.incomeCategoryRemove(req.query.id)
			.then(result => {
				res.send({ done: "Categoria removida com sucesso!" });
			})
			.catch(err => {
				res.send({ done: "Ocorreu um erro ao remover a categoria, favor contatar o suporte." });
			});
	}
};

module.exports = financialController;