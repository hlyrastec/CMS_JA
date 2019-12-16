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

		const category = {
			name: req.body.category_name
		};

		Financial.incomeCategorySave(category)
			.then(row => {
				res.send({ done: 'A categoria de receita foi cadastrada com sucesso!' });
			})
			.catch(err => {
				res.send({ err: 'Ocorreu um erro ao salvar a categoria de receita!' });
			});
	},
	incomeCategoryFilter: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		const category = {
			name: req.query.name
		};

		if(req.query.name){
			Financial.findIncomeCategoryByName(category)
				.then(categories => {
					res.send( categories );
				})
				.catch(err => {
					res.send({ err: 'Ocorreu um erro ao filtrar as categorias de receita!' });
				});
		} else {
			Financial.incomeCategoryList()
				.then(categories => {
					res.send( categories );
				})
				.catch(err => {
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
	},
	incomeOriginSave: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		const origin = {
			category_id: req.body.category_id,
			name: req.body.origin_name
		};

		console.log(origin);

		Financial.incomeOriginSave(origin)
			.then(result => {
				res.send({ done: "Categoria cadastrada com sucesso!" });
			})
			.catch(err => {
				res.send({ msg: "Ocorreu um erro ao cadastrar a origem da receita!" });
			});
	},
	incomeOriginFilterByCategory: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		console.log(req.query.id);

		Financial.incomeOriginFindByCategory(req.query.id)
			.then(incomeOrigins => {
				res.send(incomeOrigins);
			})
			.catch(err => {
				res.send({ msg: "Ocorreu um erro ao cadastrar a origem da receita!" });
			});
	},
	incomeOriginFilter: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		console.log(req.query.id);

		Financial.incomeOriginFindById(req.query.id)
			.then(origin => {
				res.send(origin);
			})
			.catch(err => {
				res.send({ msg: "Ocorreu um erro ao cadastrar a origem da receita!" });
			});
	},
	incomeOriginRemove: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['adm', 'fin'])){
			return res.send({ unauthorized: "Você não tem permissão para realizar esta ação!" });
		};

		Financial.incomeOriginRemove(req.query.id)
			.then(result => {
				res.send({ done: "Origem removida com sucesso!" });
			})
			.catch(err => {
				res.send({ done: "Ocorreu um erro ao remover a categoria, favor contatar o suporte." });
			});
	}
};

module.exports = financialController;