import { BasePageObject } from "./base.pageobject";
import { LoginPageLocatos } from "./locators/login-page.locators";


export class LoginPageObject extends BasePageObject {
    basePageObject: BasePageObject;
    constructor() {
        super();
        this.basePageObject = new BasePageObject()
    }

    async loginPageIsDisplayed() {
        return await this.pageIsDisplayed(LoginPageLocatos.XPATH_WELCOME_BACK_LABEL);
    }

    async inputEmailLogin(email: string) {
        await this.sendKey(await this.findElementByXpath(LoginPageLocatos.ID_EMAIL_TEXTBOX), email);  
    }

    async inputPasswordLogin(password: string) {
        await this.sendKey(await this.findElementByXpath(LoginPageLocatos.ID_PASSWORD_TEXTBOX), password)
    }

    async clickOnLoginButton() {
        await this.findElementById(LoginPageLocatos.ID_LOGIN_BUTTON);
    }


}