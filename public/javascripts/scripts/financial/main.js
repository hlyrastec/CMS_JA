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
			}
		});
	});
	
	$("#income-category-filter-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);
		let category_name = document.getElementById("income-category-filter-form").elements.namedItem('category_name').value;

		console.log(category_name);

		$.ajax({
			url: "/financial/incomecategory/filter?name="+name,
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
						renderIncomeCategory(incomeCategories, pageSize, page);
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
});

function fillOriginCategorySelect(){
	$.ajax({
		url: '/financial/incomecategory/list',
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
		}
	});
};