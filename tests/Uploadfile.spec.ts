import { test, expect } from '@playwright/test';
import { cartpage } from '../Pages/cartpage';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload', () => {
  let Uploadpage: cartpage
  const filename=['3mb-file.pdf','logotitle.png']
  for (const name of filename) {

    test(` Should Upload a ${name} file`, async ({ page }) => {
        Uploadpage= new  cartpage(page);
    
         await Uploadpage.NavigateTocart();
    
  
          const  filePath = path.join(__dirname,`../Data/${name}`);    
  
  
        await Uploadpage.UploadComponent().uploadFile(filePath);
      
     await expect(Uploadpage.UploadComponent().SuccesText).toContainText("successfully",{timeout:10000});
  })}})



    