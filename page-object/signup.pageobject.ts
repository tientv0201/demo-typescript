import { Action } from "../utils/Action";
import {SignUpPageLocators} from '../page-object/locators/signup-page.locators'
import { ISignUpPageObject } from "../interface/ISignUpPageObject";

const signUpPageLocators = new SignUpPageLocators();
export class SignUpPageObject extends Action implements ISignUpPageObject {

    async inputEmailSignUp(email: string) {
        await this.sendKey(await this.findElementByXpath(signUpPageLocators.XPATH_EMAIL_TEXTBOX), email);  
    }

    async inputPasswordSignUp(password: string) {
        await this.sendKey(await this.findElementByXpath(signUpPageLocators.XPATH_PASSWORD_TEXTBOX), password)
    }

    async test() {
        console.log("Test successfully")
    }

}