'use strict';
function SignUp () {
   var navigateToSignUpPagen = element(by.css('[ui-sref="auth.register"]')),
      inputUserName = element(by.model('vm.user.firstName')),
      
      inputUserEmail = element(By.xpath("//*[@id='identifierId']")),
      inputnext = element(by.name('signIn')),
      inputUserPassword = element(by.name('Passwd')),
      
      //browser.driver.get('http://localhost:8000/login.html');

  /*    browser.driver.findElement(by.id('username')).sendKeys('Jane');
      browser.driver.findElement(by.id('password')).sendKeys('1234');
      browser.driver.findElement(by.id('clickme')).click();*/
      
      
      confirmSignUp = element(by.name('signIn'));

   this.navigateToMainApp = function () {
      browser.get('https://accounts.google.com');
   }

   

   this.fillFormEmail = function () {
	   browser.driver.inputUserEmail.sendKeys('jitha.jithatphilip@gmail.com');
   }

   this.confirmmailid = function () {
	   browser.driver.inputnext.click()
	   }
   this.fillPassword = function () {
	   browser.driver.inputUserPassword.sendKeys('omana123#');
      /*inputUserRepassword.sendKeys('somePassword');*/
   }

   this.confirmSignUpButton = function () {
	   browser.driver.confirmSignUp.click()
   }
}

module.exports = SignUp;