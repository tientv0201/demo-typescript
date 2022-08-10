import {Builder, By, WebDriver, WebElement} from 'selenium-webdriver';
require('chromedriver')

const driver = new Builder().forBrowser('chrome').build();
export class Action {
    private driver: WebDriver;
    constructor() {
        this.driver = driver;
    }
    
    async findElementByXpath(xpath: string) {
        return await driver.findElement(By.xpath(xpath));
    }
    
    async findElementById(id: string) {
        return await driver.findElement(By.id(id));
    }

    async findElementByName(name: string) {
        return await driver.findElement(By.name(name));
    }

    async findElementsByXpath(xpath: string) {
        return await driver.findElement(By.xpath(xpath));
    }

    async sendKey(element: WebElement, text: string) {
        await element.sendKeys(text);
    }
}