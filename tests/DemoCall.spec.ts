const {test,expect}=require('@playwright/test');
import { DemoPage } from "../Pages/DemoPage";

test('Home Page Test',async({page})=>{

    await page.goto('https://demoblaze.com/');

    //check for Email id
    const email=new DemoPage(page);
    await expect(email.checkEmailID).toHaveText('Email: demo@blazemeter.com');

   // Signup
//    const signup=new DemoPage(page);
//    await signup.signup('Lavish.7','.7');

//    page.on('dialog',async dialog=>{
//     expect(dialog.message()).toContain('Sign up successful.');
//     await dialog.accept();
//    })


    // Login
    const login=new DemoPage(page);
    await login.login('Lavish.7','.7');


    // Add to Cart
    const home=new DemoPage(page);
    await expect(home.monitor).toHaveText('Monitors');
    await home.addMonitorToCart();
    await expect(home.phones).toHaveText('Phones');
    await home.addPhoneToCart();
    await expect(home.next).toHaveText('Next');
    await home.addNextProductToCart();



    //Go to Cart
    const cart=new DemoPage(page);
    await expect(cart.product).toHaveText('Products');
    await expect(cart.checkProductForMonitor).toHaveText('MacBook Pro');
    await expect(cart.checkProductForPhone).toHaveText('Samsung galaxy s6');
    await expect(cart.checkProductForNext).toHaveText('Apple monitor 24');

    await expect(cart.checkMonitorAmount).toHaveText('400');
    await expect(cart.checkPhoneAmount).toHaveText('360');
    await expect(cart.checkNextAmount).toHaveText('1100');
    var totalAmount:number=parseInt('360') + parseInt('400') + parseInt('1100');
    var totalAmountString:string=totalAmount.toString();
    await expect(cart.totalAmount).toHaveText(totalAmountString);



    //Place Order
    const place=new DemoPage(page);
    await place.placeCartOrder('Lavish','India','Noida','23456','12','2027');

});