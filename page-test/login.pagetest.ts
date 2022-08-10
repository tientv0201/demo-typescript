import { BasePageTest } from "./base.pagetest";
import { LoginPageObject } from "../page-object/login.pageobject";
import { assert } from "chai";

export class LoginPageTest extends BasePageTest {
    loginPageObject: LoginPageObject = new LoginPageObject;
    async verifyLoginPageDisplayed() {
        assert.isTrue(await this.loginPageObject.loginPageIsDisplayed());
    }
    async doLogIn() {
        await this.loginPageObject.inputEmailLogin('fgdf');
        await this.loginPageObject.inputPasswordLogin('sad');
        await this.loginPageObject.clickOnLoginButton();
    }

}