import {By} from 'selenium-webdriver'

export class LoginPageLocatos {
    XPATH_WELCOME_BACK_LABEL: By =  By.xpath('//h2[text()="Welcome back :)"]');
    ID_EMAIL_TEXTBOX: By = By.id('email-txt');
    ID_PASSWORD_TEXTBOX: By = By.id('password-txt');
    ID_LOGIN_BUTTON: By = By.id('login-btn');
}