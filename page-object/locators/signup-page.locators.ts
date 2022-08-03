export class SignUpPageLocators {
    XPATH_EMAIL_TEXTBOX: string = '//';
    XPATH_PASSWORD_TEXTBOX: string = '//';
    XPATH_BY_TEXT(text: string): void {`//a[text()="${text}"]`};
}