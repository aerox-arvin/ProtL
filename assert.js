describe('assertion',function(){
	it('runApp',function(){
		browser.get("http://localhost:9095/Account/Login");
	})
	
	it('LoginToApp',function(){
		element(by.css("input[autocomplete='off']")).sendKeys("admin@prolaborate.com");
		element(by.css("input[type='password']")).sendKeys("Welcome@123");
		element(by.css("button[type='submit']")).click();
		})
	//When we enter the java script code into the jasmine function, this itself will resolve promise.	
		
    //expect().toBe()
	it('pagetitle',function(){
		expect(browser.getTitle()).toBe("Prolaborate | Repositories");
	})
	
	it('pagetitlePromose',function(){
		
		browser.getTitle().then(function(title){
			
			console.log(title);
			expect(title).toBe("Prolaborate | Repositories");
		})
		
	it('falseAssertion',function(){
			expect(browser.getTitle()).not.toBe("Login");
		})
		
	})
	//Angular website will have "ng" in the attribute
	//Protractor will start the execution only when all the components are loaded. 
	//So it will wait untill all the components are loaded
	//It doesn't need wait function.
})