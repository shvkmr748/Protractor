
var runmanager=[];

var run = function Runmanager() {
	
	//var username = require('username');
	//console.log(username.sync());
	this.getspecs = function() {
    	/*var url = PacManQ1Url;
    	return url;*/
 
	var XLSX = require('xlsx');
	var workbook = XLSX.readFile('./RunManager.xlsx');
	var first_sheet_name = workbook.SheetNames[0];;
    
    
	for(var i =1;i<5;i++){
    	      var address_of_cell = 'B'+i;
              var worksheet = workbook.Sheets[first_sheet_name];
              var desired_cell = worksheet[address_of_cell];
              var desired_value = desired_cell.v;
              
           if(desired_value=="Yes"){
        	   var address_of_cell_1 = 'A'+i;
        	   var desired_cell_1 = worksheet[address_of_cell_1];
        	   var desired_value_1 = desired_cell_1.v;
        	   
        	   var address_of_cell_2 = 'C'+i;
        	   var desired_cell_2 = worksheet[address_of_cell_2];
        	   var desired_value_2 = desired_cell_2.v;
        	   
              runmanager.push("."+desired_value_2+desired_value_1+".js"); 
               }
               
};
console.log("runmanager ::" + runmanager);
return runmanager;
};
	   	   
	   
};

module.exports = run;