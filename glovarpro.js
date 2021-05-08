describe('global variable', function(){
	
	it('locate the UN field', function(){
		browser.get("http://localhost:9095/Account/Login")
		
		element(by.css("input[autocomplete='off']")).sendKeys("admin@prolaborate.com")
		
		element(by.css("input[type='password']")).sendKeys("Welcome@123")
		
		element(by.css("button[type='submit']")).click()
		
		browser.getTitle().then(function(title){
			
			console.log(title)
			
			//Here getTitle is the retrieving action on browser so this will not resolve promise.
			//So to resolve this, we have added then function
			//title is the variable to store the title.
		})
	})
})