const db = require('../../config/connection');

const Financial = function(){
	this.id;
	this.name;
};

Financial.incomeCategorySave = async (category) => {
	let query = "INSERT INTO cms_wt_erp.financial_income_category (name) VALUES ('"+category.name+"');";
	return db(query);
};

Financial.incomeCategoryList = async () => {
	let query = "SELECT * FROM cms_wt_erp.financial_income_category ORDER BY name ASC;";
	return db(query);
};

Financial.findIncomeCategoryByName = async (category) => {
	let query = "SELECT * FROM cms_wt_erp.financial_income_category WHERE name like '%"+category.name+"%' ORDER BY name ASC;";
	return db(query);
};

Financial.incomeCategoryRemove = async (id) => {
	let query = "DELETE FROM cms_wt_erp.financial_income_category WHERE id='"+id+"';";
	return db(query);
};

Financial.incomeOriginSave = async (origin) => {
	let query = "INSERT INTO cms_wt_erp.financial_income_origin (category_id, name) VALUES ('"+origin.category_id+"','"+origin.name+"');";
	return db(query);
};

Financial.incomeOriginFindByCategory = async (id) => {
	let query = "SELECT * FROM cms_wt_erp.financial_income_origin WHERE category_id='"+id+"' ORDER BY name ASC;";
	return db(query);
};

Financial.incomeOriginFindById = async (id) => {
	let query = "SELECT * FROM cms_wt_erp.financial_income_origin WHERE id='"+id+"' ORDER BY name ASC;";
	return db(query);
};

Financial.incomeOriginRemove = async (id) => {
	let query = "DELETE FROM cms_wt_erp.financial_income_origin WHERE id='"+id+"';";
	return db(query);
};

module.exports = Financial;