import { expect } from "chai";

const url = `${Cypress.env("web").frontend.host}/play-to-earn-games`;
const btnLogoNaka = 'img[src="/assets/images/logo-naka.svg"]';
const btntextLogoNaka = 'img[src="/assets/images/logo-naka-text.svg"]';
const btnback = 'img[src="/assets/images/icons/point-left.svg"]';
const textback = 'span.font-dogicapixel-bold:contains("Back")';
const clickAllCategories = '[id="demo-simple-select"]:contains("All Categories")';


export function openplaytoearn() {
    cy.visit(url);
    cy.viewport(1920, 1080);
  }

  export function verifyPageUrl() {
    cy.url().should("eq", url);
  }
  
  export function clicklogoNaka() {
    cy.get(btnLogoNaka).click();
   }

  export function clicktextLogoNaka() {
    cy.get(btntextLogoNaka).click();
  }

  export function clickbtnback() {
    cy.get(btnback).click();
  }

  export function clicktextback() {
    cy.get(textback).click();
  }

  export function clickAllCategorie() {
    cy.get(clickAllCategories).click();
    //cy.get(clickAllCategories).select('⚔️ Action').should('have.value', '⚔️ Action');
  }

 