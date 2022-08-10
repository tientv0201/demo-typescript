import {when, given, then, binding} from 'cucumber-tsflow';
import { SignUpPageObject } from '../page-object/signup.pageobject';

let signUpPage = new SignUpPageObject()

@binding()
class SignUpSteps {
    @given('Open browser')
    public openBrowser(): void{
    }
}
export = SignUpSteps;

// openBrowser();