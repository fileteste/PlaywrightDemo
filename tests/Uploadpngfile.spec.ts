import { test, expect } from '@playwright/test';
import { cartpage } from '../Pages/cartpage';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload', () => {
  let Uploadpage: cartpage
    test('Upload file from desktop', async ({ page }) => {
      Uploadpage= new  cartpage(page);
      //await page.goto("https://practice.sdetunicorns.com/cart");
       await Uploadpage.NavigateTocart();
      // provide test file path
      
      // for using __dirname, you may declare a variable called "const path = require('path');"
//then include __dirname as the first argument, then the path to a file 
// ../ indicate going up, Data:foldername, logotitle.png:filename. 

        const  filePath = path.join(__dirname,'../Data/logotitle.png');    


        //await page.setInputFiles('input#upfile_1', filePath);
      //await Uploadpage.UploadComponent().Inputfiles
        //await page.locator('#upload_1').click();
        //await Uploadpage.UploadComponent().UploadBtn.click();
      await Uploadpage.UploadComponent().uploadFile(filePath);
      //await expect (page.locator('#wfu_messageblock_header_1_label_1')).toContainText("uploaded successfully",{timeout: 10000});                 
   await expect(Uploadpage.UploadComponent().SuccesText).toContainText("successfully",{timeout:10000});
    })
        
    })
    
    

