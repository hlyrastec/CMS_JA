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

				document.getElementById('balance_value').innerHTML = ""+response.incomeValue[0].totalValue+" - "+response.outcomeValue[0].totalValue+" = "+Math.round((response.incomeValue[0].totalValue-response.outcomeValue[0].totalValue) * 100) / 100;

				document.getElementById('balance-report-submit').disabled = false;
			}
		});
	});
});

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

