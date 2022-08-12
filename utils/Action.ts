import {By, WebDriver, WebElement} from 'selenium-webdriver';
export class Action {
    driver: WebDriver;
    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async sendKey(element: WebElement, text: string) {
        await element.sendKeys(text);
    }
    
    async isDisplayed(element: WebElement) {
        return await element.isDisplayed();
    }

    async isSelected(element: WebElement) {
        return await element.isSelected();
    }

    async isChecked(element: WebElement) {
        if((await element.getAttribute('checked')).includes('true')) {
            return true;
        } else {
            return false
        }
    }

    async getTextInListElements(locators: By) {
        let listText: String[] = [];
        let elements = await this.driver.findElements(locators)
        elements.forEach(async element => {
            listText.push(await element.getText());
        });
        return listText;
    }

    async click(element: WebElement) {
        await element.click();
    }

    async clear(element: WebElement) {
        await element.clear();
    }

}