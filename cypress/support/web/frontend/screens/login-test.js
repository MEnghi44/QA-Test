import { expect } from "chai";

const url = `${Cypress.env("web").frontend.host}/login`;
const inputEmail = 'input[name="email"][type="email"][placeholder="Email Address"]';
const inputPwd = 'input[name="password"][type="password"][placeholder="Password"]';
const btnLogin = 'button.btn-submit:contains("Log in")';
const btnRegister = 'button.btn-outline:contains("Register")';
const imgLogoNaka = 'img.logo-icon';
const textLogoNaka = 'img.logo-text';
const iconBack = 'i.icon-hand';
const btnfacebook = 'button[id="btn-facebook"]';
const btngoogle = 'button[id="btn-google"]';
const btntwitter = 'button[id="btn-twitter"]';
const btnmetaMask = 'button[id="btn-metaMask"]';
const btnForgotPwd = 'button.link--forgotPassword';
const mesgAlert = `div[role="status"]`;
 

export function openLoginPage() {
    cy.visit(url);
    cy.viewport(1920, 1080);
  }
  
  export function inputFieldEmail(input) {
    cy.get(inputEmail).type(input).should("have.value", input);
  }
  
  export function inputFieldPwd(input) {
    cy.get(inputPwd).type(input).should("have.value", input);
  }
  
  export function clickBtnLogin() {
    cy.get(btnLogin).click();
  }

   export function verifyPageUrl() {
    cy.url().should("eq", url);
  }

  export function AlertMessage(message) {
    cy.get(mesgAlert).should(`be.visible`);
    cy.contains(message).should("have.text", message);
  }


  export function loginwithoutPwd() {
    cy.get(inputPwd).then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  }

   export function loginwithoutEmail() {
    cy.get(inputEmail).then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  }

  export function clicklogin() {
    cy.get(inputPwd).then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  }

  export function emailIncorrectFormat(email) {
    cy.get(inputEmail).then(($input) => {
      expect($input[0].validationMessage).to.eq(
        `Please include an '@' in the email address. '${email}' is missing an '@'.`
      );
    });
  }

  export function clickbtnForgotPwd() {
    cy.get(btnForgotPwd).click();
  }

  export function clickBtnRegister() {
    cy.get(btnRegister).click();
  }

  export function clicklogoNaka() {
    cy.get(imgLogoNaka).should('be.visible');
  }

  export function clicktextLogoNaka() {
    cy.get(textLogoNaka).should('be.visible');
  }

  export function clickiconBack() {
    cy.get(iconBack).click();
  }

  export function clickbtnfacebook() {
    cy.get(btnfacebook).click();
  }

  export function clickbtngoogle() {
    cy.get(btngoogle).click();
  }

  export function clickbtntwitter() {
    cy.get(btntwitter).click();
  }

  export function clickbtnmetaMask() {
    cy.get(btnmetaMask).click();
  }





  
 