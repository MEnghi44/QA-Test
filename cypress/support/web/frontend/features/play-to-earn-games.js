import * as loginTestScreen from "../screens/play-to-earn-games.js";

export function openplaytoearn() {
    loginTestScreen.openplaytoearn();
    loginTestScreen.verifyPageUrl();
}

export function logoNaka() {
    loginTestScreen.clicklogoNaka();
}

export function clickBack() {
    loginTestScreen.clickbtnback();
}

export function clicktextback() {
    loginTestScreen.openplaytoearn()
    loginTestScreen.clicktextback();
}

export function clickCategories() {
    loginTestScreen.openplaytoearn();
    loginTestScreen.clickAllCategorie();
}

  

 