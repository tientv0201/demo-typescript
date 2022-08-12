import { By } from "selenium-webdriver";
import { Action } from "../utils/Action";

export class BasePageObject extends Action {

    async visit(url:string) {
        await this.driver.get(url);
    }

    async pageIsDisplayed(locator: By) {
        let isDisplayed: boolean = await this.driver.findElement(locator).isDisplayed();
        return isDisplayed;
    }
}