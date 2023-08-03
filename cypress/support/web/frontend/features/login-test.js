import * as loginTestScreen from "../screens/login-test.js";

export function openLoginPage() {
    loginTestScreen.openLoginPage();
    loginTestScreen.verifyPageUrl();
}

export function loginWith(email, password) {
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldEmail(email);
    loginTestScreen.inputFieldPwd(password);
    loginTestScreen.clickBtnLogin();
    loginTestScreen.verifyPageUrl();
    cy.wait(4000);
  }

  export function checkAlertMessage (alertMessage) {
    loginTestScreen.AlertMessage(alertMessage);
  }

   export function emailNotRegistered(email, pwd) {
    let alertMessage = `Email ${email} is not found`;
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldEmail(email);
    loginTestScreen.inputFieldPwd(pwd);
    loginTestScreen.clickBtnLogin();
    loginTestScreen.AlertMessage(alertMessage);
    loginTestScreen.verifyPageUrl();
  }

  export function inputemail(email) {
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldEmail(email);
    loginTestScreen.clickBtnLogin();
    cy.wait(200);
    loginTestScreen.loginwithoutPwd();
  }

  export function inputpwd(password) {
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldPwd(password);
    loginTestScreen.clickBtnLogin();
    cy.wait(200);
    loginTestScreen.loginwithoutEmail();
  }

  export function clickbtnlogin() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickBtnLogin();
    loginTestScreen.clicklogin();
  }

  export function Incorrectpassword(email, alertMessage) {
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldEmail(email);
    loginTestScreen.inputFieldPwd(`tester`);
    loginTestScreen.clickBtnLogin();
    loginTestScreen.AlertMessage(alertMessage);
    loginTestScreen.verifyPageUrl();
  }

   export function emailIncorrect() {
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldEmail(`tester`);
    loginTestScreen.clickBtnLogin();
    cy.wait(200);
    loginTestScreen.emailIncorrectFormat(`tester`);
  }

  export function invalidPassword(email, pwd, alertMessage) {
    loginTestScreen.openLoginPage();
    loginTestScreen.inputFieldEmail(email);
    loginTestScreen.inputFieldPwd(pwd);
    loginTestScreen.clickBtnLogin();
    loginTestScreen.AlertMessage(alertMessage);
    loginTestScreen.verifyPageUrl();
  }

  export function btnForgotPwd() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickbtnForgotPwd();
  }

  export function registerWith() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickBtnRegister();
  }

  export function logoNaka() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clicklogoNaka();
    loginTestScreen.clicktextLogoNaka();
  }
  

  export function iconBack() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickiconBack();
  }

  export function btnfacebook() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickbtnfacebook();
  }

  export function btngoogle() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickbtngoogle();
  }

  export function btntwitter() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickbtntwitter();
  }

  export function btnmetaMask() {
    loginTestScreen.openLoginPage();
    loginTestScreen.clickbtnmetaMask();
  }

  

 