// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Page,Locator } from "@playwright/test";
import { uploadcomponent } from "./Component/upload.component";
export class cartpage {
   private page:Page;

    constructor(page:Page){
    this.page=page;    
}
UploadComponent(){
    return new uploadcomponent(this.page);
}
async NavigateTocart(){
    await this.page.goto('/cart');
}
}
