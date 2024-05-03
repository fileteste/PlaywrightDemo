import { Page,Locator } from "@playwright/test";
export class testpage {
    page: Page;
    getstratedbtn: Locator;
    Headingtext: Locator;
    homepagelink: Locator;
    verifyallnavlinks: Locator;
    searchicon: Locator;
    
constructor(page:Page) {
this.page =  page;
this.getstratedbtn = page.locator('#get-started');
this.Headingtext = page.locator('text=Think different. Make different.');
this.homepagelink = page.locator('#zak-primary-menu:has-text("Home")');
this.searchicon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]');
this.verifyallnavlinks = page.locator('#zak-primary-menu li[id*=menu]');
}
async navigate(){
   await this.page.goto('/');
}
getNavLinksText () {
    return this.verifyallnavlinks.allTextContents();
}
}

