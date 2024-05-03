import { Page,Locator } from "@playwright/test";
export class uploadcomponent {
    private page:Page;
    Inputfiles: string;
    SuccesText: Locator;
    UploadBtn: Locator;
    recentpostlist: Locator;


    constructor(page:Page){
    this.page=page;
    this.Inputfiles= 'input#upfile_1';
    this.UploadBtn= page.locator('#upload_1');
    this.SuccesText= page.locator('#wfu_messageblock_header_1_label_1'); 
    
   
    
}
async uploadFile(filePath:string) {
    this.page.setInputFiles(this.Inputfiles, filePath);
    this.UploadBtn.click();
}
}
