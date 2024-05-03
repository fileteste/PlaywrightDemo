import { Page,Locator } from "@playwright/test";
import { uploadcomponent } from "./Component/upload.component";
export class Blogpage {
    private page:Page;
    recentpostlist: Locator;
    constructor(page:Page){
        this.page=page; 
        this.recentpostlist=page.locator('#recent-posts-3 ul li');
        
    }
    
async NavigateBlogPage (){
    await this.page.goto('/blog/');
}
   UploadComponent(){
    return new uploadcomponent(this.page);}
   }