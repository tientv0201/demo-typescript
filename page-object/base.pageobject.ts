import { By } from "selenium-webdriver";
import { Action } from "../utils/Action";

export class BasePageObject extends Action {
    action: Action = new Action;


    async visit(url:string) {
        await this.action.get(url);
        await this.action.
    }

    async pageIsDisplayed(locator: string) {
        let isDisplayed: boolean = await this.action.findElementByXpath(locator).isDisplayed();
        return isDisplayed;
    }
}