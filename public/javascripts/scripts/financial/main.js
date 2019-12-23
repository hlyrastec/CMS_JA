$(function(){
	$("#balance-report-form").on('submit', (event) => {
		event.preventDefault();
		document.getElementById('balance-report-submit').disabled = true;

		$.ajax({
			url: '/financial/balance',
			method: 'post',
			data: $("#balance-report-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};
				
				if(response.msg){
					alert(response.msg);
					return document.getElementById('product-create-submit').disabled = false;
				};

				document.getElementById('income-report-submit').disabled = false;
			}
		});
	});
});

function fillSelect(selectLocation, location, route, method){
	$.ajax({
		url: route,
		method: method,
		success: (response) => {
			var select = document.getElementById(location);
			select.innerHTML = "";
			select.innerHTML += "<option value='0'>"+selectLocation+"</option>"
			for(i in response){
				select.innerHTML += "<option value='"+response[i].id+"'>"+response[i].name+"</option>"
			};
		}
	});
};

function displayFinancialForms(form, btn){
	let financialForm = document.getElementById(form);
	if(financialForm.style.display == "none"){
		financialForm.style.display = "block";
		btn.innerHTML = "Esconder &uArr;&uArr;";
	} else if(financialForm.style.display == "block"){
		financialForm.style.display = "none";	
		btn.innerHTML = "Mostrar &dArr;&dArr;";
	};
};

