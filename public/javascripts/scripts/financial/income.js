$(function(){
	$("#income-category-create-form").on('submit', (event) => {
		event.preventDefault();
		document.getElementById('income-category-create-submit').disabled = true;

		let category_name = document.getElementById("income-category-create-form").elements.namedItem('category_name').value;

		if(category_name.length < 3 || category_name.length > 20){
			alert("Nome inválido!");
			return document.getElementById('income-category-create-submit').disabled = false;
		};

		$.ajax({
			url: '/financial/incomecategory/save',
			method: 'post',
			data: $("#income-category-create-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};
				
				if(response.msg){
					alert(response.msg);
					document.getElementById('product-create-submit').disabled = false;
					return;
				};

				alert(response.done);

				document.getElementById("income-category-create-form").elements.namedItem('category_name').value = "";
				document.getElementById('income-category-create-submit').disabled = false;

				fillSelect('income-origin-create-select','/financial/incomecategory/list', 'get');
				fillSelect('income-origin-filter-select','/financial/incomecategory/list', 'get')

				$("#income-category-filter-form").submit();
			}
		});
	});
	
	$("#income-category-filter-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);
		let category_name = document.getElementById("income-category-filter-form").elements.namedItem('category_name').value;

		$.ajax({
			url: "/financial/incomecategory/filter?name="+category_name,
			method: 'get',
			success: (incomeCategories) => {
				if(incomeCategories.unauthorized){
					alert(incomeCategories.unauthorized);
					return window.location.href = '/login';
				};

				let pageSize = 10;
				let page = 0;

				function paging(){
					if(incomeCategories.length){
						renderIncomeCategoryTable(incomeCategories, pageSize, page);
					} else {
						clearIncomeCategoryTable();
					};
				};

				btn.attr('disabled', false);

				function buttonsPaging(){
					$('#incomeCategoryNext').prop('disabled', incomeCategories.length <= pageSize || page >= incomeCategories.length / pageSize - 1);
					$('#incomeCategoryPrevious').prop('disabled', incomeCategories.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#incomeCategoryNext').click(function(){
				        if(page < incomeCategories.length / pageSize - 1){
				            page++;
				            paging();
				            buttonsPaging();
				        };
				    });
				    $('#incomeCategoryPrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            buttonsPaging();
				        };
				    });
				    paging();
				    buttonsPaging();
				});
			}
		});
	});

	$("#income-origin-create-form").on('submit', (event) => {
		event.preventDefault();
		document.getElementById('income-origin-create-submit').disabled = true;

		let category_id = document.getElementById("income-origin-create-form").elements.namedItem('category_id').value;
		let origin_name = document.getElementById("income-origin-create-form").elements.namedItem('origin_name').value;

		if(!category_id){
			alert('É necessário selecionar a categoria para cadastrar a origem!');
			return document.getElementById('income-origin-create-submit').disabled = false;
		};

		if(origin_name.length < 2 || origin_name.length > 20){
			alert("Origem inválida!");
			return document.getElementById('income-origin-create-submit').disabled = false;
		};

		$.ajax({
			url: '/financial/incomeorigin/save',
			method: 'post',
			data: $("#income-origin-create-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};
				
				if(response.msg){
					alert(response.msg);
					return document.getElementById('income-origin-create-submit').disabled = false;
				};

				alert(response.done);

				document.getElementById("income-origin-create-form").elements.namedItem('origin_name').value = "";
				document.getElementById('income-origin-create-submit').disabled = false;

				// fillSelect('income-origin-category-select','/financial/incomeorigin/list', 'get');

				// $("#income-origin-filter-form").submit();
			}
		});
	});
	
	$("#income-origin-filter-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);
		let category_id = document.getElementById("income-origin-filter-form").elements.namedItem('category_id').value;
		let origin_id = document.getElementById("income-origin-filter-form").elements.namedItem('origin_id').value;

		if(category_id){
			console.log(category_id);
			console.log(origin_id);
			$.ajax({
				url: "/financial/incomeorigin/filter?id="+origin_id,
				method: 'get',
				success: (incomeOrigins) => {
					if(incomeOrigins.unauthorized){
						alert(incomeOrigins.unauthorized);
						return window.location.href = '/login';
					};

					let pageSize = 10;
					let page = 0;

					function paging(){
						if(incomeOrigins.length){
							renderIncomeOriginTable(incomeOrigins, pageSize, page);
						} else {
							clearIncomeOriginTable();
						};
					};

					btn.attr('disabled', false);

					function buttonsPaging(){
						$('#incomeCategoryNext').prop('disabled', incomeOrigins.length <= pageSize || page >= incomeOrigins.length / pageSize - 1);
						$('#incomeCategoryPrevious').prop('disabled', incomeOrigins.length <= pageSize || page == 0);
					};

					$(function(){
					    $('#incomeCategoryNext').click(function(){
					        if(page < incomeOrigins.length / pageSize - 1){
					            page++;
					            paging();
					            buttonsPaging();
					        };
					    });
					    $('#incomeCategoryPrevious').click(function(){
					        if(page > 0){
					            page--;
					            paging();
					            buttonsPaging();
					        };
					    });
					    paging();
					    buttonsPaging();
					});
				}
			});
		} else {
			alert('É necessário selecionar uma categoria');
			return btn.attr('disabled', false);

		}
	});
});

function removeIncomeCategory(id){
	let r = confirm('Deseja realmente excluir o produto?');
	
	if(r){
		$.ajax({
			url: '/financial/incomecategory/remove?id='+id,
			method: 'delete',
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};
				
				if(response.msg){
					alert(response.msg);
					document.getElementById('product-create-submit').disabled = false;
					return;
				};

				alert(response.done);

				fillSelect('income-origin-create-select','/financial/incomecategory/list', 'get')
				fillSelect('income-origin-filter-select','/financial/incomecategory/list', 'get')
				
				$("#income-category-filter-form").submit();
			}
		});
	};
};

function removeIncomeOrigin(id){
	let r = confirm('Deseja realmente excluir esta origem?');
	
	if(r){
		$.ajax({
			url: '/financial/incomeorigin/remove?id='+id,
			method: 'delete',
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};
				
				if(response.msg){
					alert(response.msg);
					document.getElementById('product-create-submit').disabled = false;
					return;
				};

				alert(response.done);

				fillSelect('income-origin-filter-select', '/financial/incomeorigin/filterbycategory?id=0', 'get');
				
				// $("#income-category-filter-form").submit();
			}
		});
	};
};