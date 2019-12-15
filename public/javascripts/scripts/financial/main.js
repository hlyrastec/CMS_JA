function fillSelect(location, route, method){
	$.ajax({
		url: route,
		method: method,
		success: (response) => {
			var select = document.getElementById(location);
			select.innerHTML = "";
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