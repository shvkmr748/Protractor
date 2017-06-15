'use strict';
var SignUp = require('./TEST1.js');

describe('Skillhunt app', function() {

   var signup = new SignUp();

   beforeEach(function () {
      signup.navigateToMainApp();//
   });

   it('should have a title', function() {
       expect(browser.getTitle()).toEqual('Google');
   });

   
   it('and type some personal information', function () {
      /*var inputUserName = element(by.model('vm.user.firstName'));*/

      
      signup.fillFormEmail();
      signup.confirmmailid();
      signup.fillPassword();
      signup.confirmSignUpButton();
      
      /*expect(inputUserName).not.toEqual('');*/
   })
});