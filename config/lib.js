var lib = {
	convertDate:function(date){
		var str = date.split('-');
		if(str!=""){
			var convertedDate = str[2]+"/"+str[1]+"/"+str[0];
		} else {
			var convertedDate = "";
		};
		return convertedDate;
	},
	genDate: function(){
		var d = new Date();
		var date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = "0"+d.getDate()+"/"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = "0"+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();
		} else {
			date = ""+d.getDate()+"/"+parseInt(d.getMonth()+1)+"/"+d.getFullYear();
		};
		return date;
	},
	genFullDate: function(){
		var d = new Date();
		var date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = "0"+d.getDate()+"/"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = "0"+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		} else {
			date = ""+d.getDate()+"/"+parseInt(d.getMonth()+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		};
		return date;
	},
	colectByMonth: function(month, dates){
		var array = [];
		var str = [];
		for(var i in dates){
			var str = dates[i].date.split('/');
			if(parseInt(str[1])==parseInt(month)){
				array.push(dates[i]);
			};
		};
		return array;
	},
	filterByPeriod:  function(month, dates){
		var array = [];
		var str = [];
		for(var i in dates){
			var str = dates[i].date.split('-');
			if(parseInt(str[1])==parseInt(month)){
				array.push(dates[i]);
			};
		};
		return array;
	},
	filterQuery: function(params, values, db, tbl, orderParam, order){
		if(params.length){
			var query = "SELECT * FROM "+db+"."+tbl+" WHERE ";
		} else {
			var query = "SELECT * FROM "+db+"."+tbl+" ";
		};
		for(i in params){
			if(i == params.length - 1){
				query += params[i]+"='"+values[i]+"' ";
			} else {
				query += params[i]+"='"+values[i]+"' AND ";
			};
		};
		query += "ORDER BY "+orderParam+" "+order+";";

		return query;
	}
};

module.exports = lib;