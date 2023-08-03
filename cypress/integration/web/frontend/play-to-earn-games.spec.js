import * as loginTestFeature from "../../../support/web/frontend/features/login-test.js";
import * as playtoearnTestFeature from "../../../support/web/frontend/features/play-to-earn-games.js";


describe("play to earn games", () => {
    beforeEach(() => {
        cy.suiteSetup();
        cy.getFixture("play-to-earn-games-data.json").as("data");
      });

      // it('playtoearn - 01: clicklogoNaka', function () {
      //   loginTestFeature.openLoginPage();
      //   loginTestFeature.loginWith(this.data.email, this.data.password);
      //   playtoearnTestFeature.logoNaka();
      // });

      // it('playtoearn - 02: clickiconBack', function () {
      //   loginTestFeature.openLoginPage();
      //   loginTestFeature.loginWith(this.data.email, this.data.password);
      //   playtoearnTestFeature.clicktextback();
      // });

      it('playtoearn - 02: clickiconBack', function () {
        loginTestFeature.openLoginPage();
        loginTestFeature.loginWith(this.data.email, this.data.password);
        playtoearnTestFeature.clickCategories();
      });

});


