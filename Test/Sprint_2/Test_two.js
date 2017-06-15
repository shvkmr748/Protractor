var until = protractor.ExpectedConditions;

var Username= element(by.xpath("//*[@id='userName']/label/input"));
var Password= element(by.xpath("//*[@id='userPassword']/label/input"));
var Log_btn= element(by.xpath("//*[@id='login-form']/form/div/div/div[6]/div/btn/button"));

describe('angularjs homepage todo list', function() {
  it('should open the application', function() {

	  browser.get('https://pacman-stocksku-retailui-qp.apps-np.homedepot.com');
	    browser.driver.manage().window().maximize(); 
	   
	    
  });
  
  
  it('should type user name', function() {

	  browser.wait(until.visibilityOf(Username), 180000);
		Username.sendKeys("MC62YE");
		 
  });
  
  it('should type password', function() {

	  browser.sleep(1000);
		Password.sendKeys("TestMe123!");
		 
  });
  
  
  it('should click on loginbutton', function() {
	  browser.sleep(1000);
		Log_btn.click();
		browser.sleep(2000);
	    
  });
  
/*	  
	  var Excel = require('exceljs');
	  var workbook = new Excel.Workbook('./RunManager.xlsx');
	  var worksheet = workbook.getWorksheet('Sheet1');
	  var row = worksheet.rowCount();
	  //getRow(1);
	  var values = row.getCell(2).value;
	  console.log(row);
	  */
  
  }); 
  
    
			
			
    
    

  
