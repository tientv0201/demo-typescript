import {By} from 'selenium-webdriver'

export class SignUpPageLocators {
    XPATH_EMAIL_TEXTBOX: By = By.xpath('//');
    XPATH_PASSWORD_TEXTBOX: By = By.xpath('//');
    XPATH_BY_TEXT(text: string): By {return By.xpath(`//a[text()="${text}"]`)}
}