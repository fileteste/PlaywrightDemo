import { Page,Locator } from "@playwright/test";
export class AuthentificationPage {
    private page:Page;
    InpuUserName: Locator;
    InputPassword: Locator;
    BtnLogin: Locator;
    orderUrl: Locator;
   
    constructor(page:Page){
        this.page=page; 
        this.InpuUserName= page.locator('#username');
        this.InputPassword= page.locator('#password');
        this.BtnLogin= page.locator("button[name='login']");
        this.orderUrl= page.locator("//a[text()='Orders']");
        

 

    }

    async LoginForm (){
        await this.InpuUserName.fill('practiceuser1');
        await this.InputPassword.fill('PracticePass1!');
        await this.BtnLogin.click();
        
    }
    
async NavigateAuthentificationPage (){
    await this.page.goto('/my-account/');


}
  
   }