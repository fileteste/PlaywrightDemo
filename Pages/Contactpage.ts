import { Page,Locator } from "@playwright/test";
import { uploadcomponent } from "./Component/upload.component";
export class Contactpage {
   private page:Page
    Name: Locator;
    Email: Locator;
    Phone: Locator;
    Message: Locator;
    Btnsubmit: Locator;
    ReturnMessage: Locator;
    Text: Locator;
   constructor(page:Page){
    this.page=page;
    this.Text=page.locator('text="Send Us Message"');
    this.Name=page.locator('#evf-277-field_ys0GeZISRs-1');
    this.Email=page.locator('.contact-email input');
    this.Phone=page.locator('.contact-phone input');
    this.Message=page.locator('.contact-message textarea');
    this.Btnsubmit=page.locator('button[type=submit]');
    this.ReturnMessage=page.locator('div[role="alert"]');
   }
   async NavigatePageContact (){
    await this.page.goto('/contact/');
   }
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   async SubmitForm(Name_input:string,Email_input:string,Phone_input:string,Message_input:string){
    await this.Name.fill(Name_input);
    await this.Email.fill(Email_input);
    await this.Phone.fill(Phone_input);
    await this.Message.fill(Message_input);
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page.waitForTimeout(5000);
    await this.Btnsubmit.click();
   }


   UploadComponent(){
    return new uploadcomponent(this.page);}
}