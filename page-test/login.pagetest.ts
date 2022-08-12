import { BasePageTest } from "./base.pagetest";
import { LoginPageObject } from "../page-object/login.pageobject";
import { assert } from "chai";

export class LoginPageTest extends LoginPageObject {
    // loginPageObject: LoginPageObject = new LoginPageObject();
    async verifyLoginPageDisplayed() {
        assert.isTrue(await this.loginPageIsDisplayed());
    }
    async doLogIn(email: string, password: string) {
        await this.inputEmailLogin(email);
        await this.inputPasswordLogin(password);
        await this.clickOnLoginButton();
    }

}