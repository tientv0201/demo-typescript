import {when, given, then, binding} from 'cucumber-tsflow'
import {LoginPageTest} from '../page-test/login.pagetest'

@binding()
export class LoginStepsDefination {
    private DataOfLoginSteps: Object = {}
    LoginPage: LoginPageTest = new LoginPageTest();


    @when('Do login with existing email {string} and {string}')
    async loginSuccessWithExistingEmail(email: string, password: string){
        this.LoginPage.doLogIn(email, password)
    }
}

