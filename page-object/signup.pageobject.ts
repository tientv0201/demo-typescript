import {SignUpPageLocators} from '../page-object/locators/signup-page.locators'
import { BasePageObject } from "./base.pageobject";

const signUpPageLocators = new SignUpPageLocators();
export class SignUpPageObject extends BasePageObject {

    async inputEmailSignUp(email: string) {
        await this.sendKey(await this.findElementByXpath(signUpPageLocators.XPATH_EMAIL_TEXTBOX), email);  
    }

    async inputPasswordSignUp(password: string) {
        await this.sendKey(await this.findElementByXpath(signUpPageLocators.XPATH_PASSWORD_TEXTBOX), password)
    }

}