import { BasePageObject } from "./base.pageobject";
import { LoginPageLocatos } from "./locators/login-page.locators";


export class LoginPageObject extends BasePageObject {
    loginPageLocators: LoginPageLocatos = new LoginPageLocatos;

    async loginPageIsDisplayed() {
        return await this.pageIsDisplayed(this.loginPageLocators.XPATH_WELCOME_BACK_LABEL);
    }

    async inputEmailLogin(email: string) {
        await this.sendKey(await this.driver.findElement(this.loginPageLocators.ID_EMAIL_TEXTBOX), email);  
    }

    async inputPasswordLogin(password: string) {
        await this.sendKey(await this.driver.findElement(this.loginPageLocators.ID_PASSWORD_TEXTBOX), password)
    }

    async clickOnLoginButton() {
        await this.driver.findElement(this.loginPageLocators.ID_LOGIN_BUTTON);
    }


}