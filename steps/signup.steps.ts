import {when, given, then, binding} from 'cucumber-tsflow';
import { ISignUpPageObject } from '../interface/ISignUpPageObject';
import { SignUpPageObject } from '../page-object/signup.pageobject';

@binding()
class SignUpSteps {
    @given('Open browser')
    public openBrowser(): void{
        let signUpPage;
        signUpPage = new SignUpPageObject()
        signUpPage.test();
    }
}
export = SignUpSteps;

// openBrowser();