  
       var XLSX = require('xlsx');
       var workbook = XLSX.readFile('./TestData.xlsx');
       var first_sheet_name = workbook.SheetNames[0];
     /*  var siva_dinesh;
      
       var one = 'name';
       var ans = 'raja';
       
       var ary;
       //{sample:'xmple'};note
       ary.push({one:ans});
       console.log(ary);
       console.log(ary.one);*/
    	   
      
       
it('should add a todo', function() {
  
	var runmanager=[];
	
	var username = require('username');
    //console.log(username.sync());
    
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
//console.log("runmanager ::" + runmanager);
return runmanager;
   });



var arr = new Array();
var object = new Object();
var Testdata_tcname=[];
var Testdata_testdata=[];




var casename = "createReqTest";
var value="mkUpRetl";
var cell = ['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var final_data;
var tdata;
var ddata;
it('should add a todo1', function() {
    
	/*var address_of_cell_3;
	for(var i=1;i<=24;i++){
	
	    for(var j=1;j<=4;j++){
	    	 address_of_cell_3 = cell[i]+j;
	    	 console.log("address_of_cell_3 ::" + address_of_cell_3);
	    
	    var worksheet_3 = workbook.Sheets[first_sheet_name];
	    var desired_cell_3 = worksheet_3[address_of_cell_3];
	    var desired_value_3 = (desired_cell_3 ? desired_cell_3.v : undefined);
	    console.log("desired_value_3 ::"+ desired_value_3);
	    
	    
	    }
	    
	  };*/
	//var k =1;
	for(var i=1;i<=5;i++){
		var address_of_cell_3 = 'A'+i;	
		var worksheet_3 = workbook.Sheets[first_sheet_name];
	    var desired_cell_3 = worksheet_3[address_of_cell_3];
	    var desired_value_3 = (desired_cell_3 ? desired_cell_3.v : undefined);
	   // console.log("desired_value_3 ::"+ desired_value_3);
	
	    for(var j=0;j<=24;j++){
			var address_of_cell_4 = cell[j]+1;
			//console.log(address_of_cell_4);
			var worksheet_4 = workbook.Sheets[first_sheet_name];
		    var desired_cell_4 = worksheet_4[address_of_cell_4];
		    var desired_value_4 = (desired_cell_4 ? desired_cell_4.v : undefined);
		   // console.log("desired_value_4 ::"+ desired_value_4);
		    
		    
		    if(desired_value_3 =="addSkusRLVTest" && desired_value_4 =="mkUpRetl"){
		    	var address_of_cell_5 = cell[j]+i;
		    	var worksheet_5 = workbook.Sheets[first_sheet_name];
			    var desired_cell_5 = worksheet_5[address_of_cell_5];
			    final_data = (desired_cell_5 ? desired_cell_5.v : undefined);
			    console.log("final_data ::"+ final_data);
			    
			 /*   
			    for(var k =0;k<=24;k++){
			    	
			    	var address_of_cell_6 = 'A'+k;
			    	var worksheet_6 = workbook.Sheets[first_sheet_name];
				    var desired_cell_6 = worksheet_6[address_of_cell_6];
				    tdata = (desired_cell_6 ? desired_cell_6.v : undefined);
				    Testdata_tcname.push(tdata);
				    
				    
				    var address_of_cell_7 = cell[i]+k;
			    	var worksheet_7 = workbook.Sheets[first_sheet_name];
				    var desired_cell_7 = worksheet_7[address_of_cell_7];
				    ddata = (desired_cell_7 ? desired_cell_7.v : undefined);
				    Testdata_testdata.push(ddata);	
				    
				    
				    
			    }*/
			 }
	}
	    
	}

	//////////////////////////////
	

    /*var Testdata_tcname=[];
    var Testdata_testdata=[];*/
    
	for(var l=0;l<=24;l++){
    	
    	var address_of_cell_6 = cell[l]+1;
    	var worksheet_6 = workbook.Sheets[first_sheet_name];
	    var desired_cell_6 = worksheet_6[address_of_cell_6];
	    tdata = (desired_cell_6 ? desired_cell_6.v : undefined);
	    Testdata_tcname.push(tdata);
    };
    
    var z;
     for(var m=1;m<=500;m++){
    	z++;
    	var address_of_cell_7 = 'A'+m;
    	var worksheet_7 = workbook.Sheets[first_sheet_name];
	    var desired_cell_7 = worksheet_7[address_of_cell_7];
	    ddata = (desired_cell_7 ? desired_cell_7.v : undefined);
	   
	    if(ddata =="retryLogicBPMWorkflowTest"){
	    	z=m;
	    	for(var n=0;n<=24;n++){
	    		
	    		var address_of_cell_8 = cell[n]+z;
		    	var worksheet_8 = workbook.Sheets[first_sheet_name];
			    var desired_cell_8 = worksheet_8[address_of_cell_8];
			    var edata = (desired_cell_8 ? desired_cell_8.v : undefined);
			    Testdata_testdata.push(edata);
	    	}
	    }
	    
    };
	///////////////////////////////
	
	/*console.log("Testdata_tcname ::"+ Testdata_tcname);
    console.log("Testdata_testdata ::"+ Testdata_testdata);*/
    
    console.log("Testdata_tcname ::"+ Testdata_tcname.length);
    console.log("Testdata_testdata ::"+ Testdata_testdata.length);
    
    for(var o=0;o<=Testdata_tcname.length;o++){
    	
    	arr[Testdata_tcname[o]] = Testdata_testdata[o];
    	//object.Testdata_tcname[0] = Testdata_testdata[o];
    }
   /* console.log("Testdata_testdata ::"+ arr);
    console.log("Testdata_testdata ::"+ object);*/
    console.log(arr.Outlook_url);
    //console.log(arr.console.log(arr););
    
    
  });
           
