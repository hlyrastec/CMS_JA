const db = require('../../config/connection');

const Financial = function(){
	this.id;
	this.name;
};

Financial.incomeCategorySave = async (income) => {
	let query = "INSERT INTO cms_wt_erp.financial_income_category (name) VALUES ('"+income.category_name+"');";
	return db(query);
};

Financial.incomeCategoriesList = async () => {
	let query = "SELECT * FROM cms_wt_erp.financial_income_category ORDER BY name ASC;";
	return db(query);
};

Financial.list = async () => {
	let query = "SELECT * FROM cms_wt_erp.seamstress ORDER BY name ASC;";
	return db(query);
};

Financial.findByName = async (name) => {
	let query = "SELECT * FROM cms_wt_erp.seamstress WHERE name like '%"+name+"%' ORDER BY name ASC;";
	return db(query);
};

Financial.remove = async (id) => {
	let query = "DELETE * FROM cms_wt_erp.seamstress WHERE "+id+";";
	return db(query);
};

module.exports = Financial;