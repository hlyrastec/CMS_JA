function clearIncomeCategoryTable(location){
	document.getElementById("income-category-tbl").innerHTML = "NENHUMA CATEGORIA CADASTRADA";
	$('#incomeCategoryPrevious').prop('disabled');
	$('#incomeCategoryNext').prop('disabled');
	$('#incomeCategoryPageNumber').text('0');
};

function renderIncomeCategoryTable(incomeCategories, pageSize, page){
	var html = "<tr>";
	html += "<td>Id</td>";
	html += "<td>Nome</td>";
	html += "</tr>";
	for (let i = page * pageSize; i < incomeCategories.length && i < (page + 1) * pageSize;i++){
		html += "<tr>";
		// html += "<td><a class='tbl-show-link' onclick='showProduct("+incomeCategories[i].id+")'>"+incomeCategories[i].code+"</a></td>";
		html += "<td id='src_product_size'>"+incomeCategories[i].id+"</td>";
		html += "<td id='src_product_name'>"+incomeCategories[i].name+"</td>";
		html += "<td><a onclick='removeIncomeCategory("+incomeCategories[i].id+")'>Rem</a></td>";
		html += "</tr>";
	};
	document.getElementById('income-category-tbl').innerHTML = html;
	document.getElementById('income-category-div').style.display = 'block';
	$('#incomeCategoryPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(incomeCategories.length / pageSize));
};