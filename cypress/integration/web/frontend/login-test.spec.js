import * as loginTestFeature from "../../../support/web/frontend/features/login-test.js";

describe("Login", () => {
    beforeEach(() => {
        cy.suiteSetup();
        cy.getFixture("login-test-data.json").as("data");
      });

      it('LOGIN-01: Logged in successfully', function () {
        //let alertMessage = `Logged in successfully`;
        loginTestFeature.loginWith(this.data.email, this.data.password);
        loginTestFeature.checkAlertMessage('Logged in successfully');
      });

      it('LOGIN-02: email not registered', function () {
         loginTestFeature.emailNotRegistered(
           `test@gmail.com`,this.data.password
         );
      });

       it('LOGIN-03: not input email', function () {
          loginTestFeature.inputemail(this.data.email);
        });

      it('LOGIN-04: not input passwod', function () {
           loginTestFeature.inputpwd(this.data.password);
          });

      it('LOGIN-05: click button login', function () {
        loginTestFeature.clickbtnlogin();
       });

      it('LOGIN-06: Invalid email format entered', function () {
           loginTestFeature.emailIncorrect();
        });

      it('LOGIN-07: Password less than 6 characters', function () {
            let alertMessage = `Validation error: "password" length must be at least 6 characters long`;
            loginTestFeature.invalidPassword(this.data.email, `test`, alertMessage);
          });

       it('LOGIN-08: Incorrect password', function () {
        let alertMessage = `Incorrect password`;
        loginTestFeature.Incorrectpassword(this.data.email, alertMessage);
      });

      it('LOGIN-09: click btnForgotPwd', function () {
          loginTestFeature.btnForgotPwd();
        });

      it('LOGIN-10: click button Register', function () {
        loginTestFeature.registerWith();
      });
      
      it('LOGIN-11: click logo naka', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.logoNaka();
      });

      it('LOGIN-12: click icon Back ', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.iconBack();
      });

      it('LOGIN-13: login with facebook', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.btnfacebook();
      });

      it('LOGIN-14: login with google', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.btngoogle();
      });

      it('LOGIN-15: login with twitter', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.btntwitter();
      });

      it('LOGIN-16: login with metaMask', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.btnmetaMask();
      });

     

});

