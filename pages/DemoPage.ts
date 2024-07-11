import {Page, Locator} from '@playwright/test';

export class DemoPage{
    page:Page;
    readonly checkEmailID:Locator;
    readonly homePage:Locator;
    readonly signupLink:Locator;
    readonly signusername:Locator;
    readonly signpassword:Locator;
    readonly SignupButton:Locator;
    readonly loginLink:Locator;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly monitor:Locator;
    readonly selectMonitor:Locator;
    readonly addToCartbtn:Locator;
    readonly phones:Locator;
    readonly selectPhone:Locator;
    readonly next:Locator;
    readonly selectNextProduct:Locator;
    readonly gotoCart:Locator;
    readonly checkProductForMonitor:Locator;
    readonly checkProductForPhone:Locator;
    readonly checkProductForNext:Locator;
    readonly checkMonitorAmount:Locator
    readonly checkPhoneAmount:Locator
    readonly checkNextAmount:Locator;
    readonly product:Locator;
    readonly totalAmount:Locator;
    readonly placeOrder:Locator;
    readonly Name:Locator;
    readonly Country:Locator;
    readonly City:Locator;
    readonly Card:Locator;
    readonly Month:Locator;
    readonly Year:Locator;
    readonly Purchase:Locator;

    constructor(page:Page){
        this.page=page;

        //Check Email ID
        this.checkEmailID=page.locator("//p[normalize-space()='Email: demo@blazemeter.com']");

        //Home Page
        this.homePage=page.locator("//li[@class='nav-item active']//a[@class='nav-link']");

        //Sign Up
        this.signupLink=page.locator("(//a[normalize-space()='Sign up'])[1]");
        this.signusername=page.locator("//input[@id='sign-username']");
        this.signpassword=page.locator("//input[@id='sign-password']");
        this.SignupButton=page.locator("//button[normalize-space()='Sign up']");

        //Login Page
        this.loginLink=page.locator("(//a[normalize-space()='Log in'])[1]");
        this.usernameInput=page.locator("//input[@id='loginusername']");
        this.passwordInput=page.locator("//input[@id='loginpassword']");
        this.loginButton=page.locator("//button[normalize-space()='Log in']");



        //Add to Cart
        this.monitor=page.locator("(//a[normalize-space()='Monitors'])[1]");
        
        this.selectMonitor=page.locator("//a[normalize-space()='Apple monitor 24']");
        this.addToCartbtn=page.locator("//a[normalize-space()='Add to cart']");

        this.phones=page.locator("(//a[normalize-space()='Phones'])[1]");
        this.selectPhone=page.locator("//a[normalize-space()='Samsung galaxy s6']");

        this.next=page.locator("(//button[normalize-space()='Next'])[1]");
        this.selectNextProduct=page.locator("//a[normalize-space()='MacBook Pro']");

        //Check Product in Cart;
        this.checkProductForMonitor=page.locator("//td[normalize-space()='MacBook Pro']");
        this.checkProductForPhone=page.locator("//td[normalize-space()='Samsung galaxy s6']");
        this.checkProductForNext=page.locator("//td[normalize-space()='Apple monitor 24']");

        //Check Product Amount in Cart
        this.checkMonitorAmount=page.locator("//td[normalize-space()='400']");
        this.checkPhoneAmount=page.locator("//td[normalize-space()='360']");
        this.checkNextAmount=page.locator("//td[normalize-space()='1100']");


        //Goto Cart
        this.gotoCart=page.locator("//a[normalize-space()='Cart']");
        this.product=page.locator("//h2[normalize-space()='Products']");
        this.totalAmount=page.locator("(//h3[normalize-space()='1860'])[1]");

        //Place Order
        this.placeOrder=page.locator("//button[normalize-space()='Place Order']");
        this.Name=page.locator("//input[@id='name']");
        this.Country=page.locator("//input[@id='country']");
        this.City=page.locator("//input[@id='city']");
        this.Card=page.locator("//input[@id='card']");
        this.Month=page.locator("//input[@id='month']");
        this.Year=page.locator("//input[@id='year']");
        this.Purchase=page.locator("//button[normalize-space()='Purchase']");
    }


    //SignUp Method
    async signup(username,password){
        await this.signupLink.click();
        await this.signusername.fill(username);
        await this.signpassword.fill(password);
        await this.SignupButton.click();
    }

    //Login Method
    async login(username,password){
        await this.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


    //Add Product Methods
    async addMonitorToCart(){
        await this.monitor.click();
        await this.selectMonitor.click();
        await this.addToCartbtn.click();

        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })

        await this.homePage.click();
    }

    async addPhoneToCart(){
        await this.phones.click();
        await this.selectPhone.click();
        await this.addToCartbtn.click();

        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
                // await dialog.accept();
            }
        })

        await this.homePage.click();
    }

    async addNextProductToCart(){
        await this.next.click();
        await this.selectNextProduct.click();
        await this.addToCartbtn.click();

        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
                // await dialog.accept();
            }
        })

        await this.gotoCart.click();
    }



    //place Order Method
    async placeCartOrder(name,country,city,card,month,year){
        await this.placeOrder.click();
        await this.Name.fill(name);
        await this.Country.fill(country);
        await this.City.fill(city);
        await this.Card.fill(card);
        await this.Month.fill(month);
        await this.Year.fill(year);
        await this.Purchase.click();
    }
}