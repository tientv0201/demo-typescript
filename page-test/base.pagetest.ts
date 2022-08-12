import { BasePageObject } from "../page-object/base.pageobject";

export class BasePageTest extends BasePageObject {

    async visitLoginPageWithUrl(url: string) {
        await this.visit(url);
    }

}