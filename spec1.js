describe('website launching test', function(){
	
	it('launch protractor site', function(){
		
		//use this method to launch site
		browser.get("http://localhost:9095/Account/Login")
		//by default protractor will use chrome browser even though 
		//we don't mention it		
		browser.sleep(6000);
		browser.get("http://localhost:9095/Account/Login")
		console.log("Test new webappp")
		
		//Note: Here Java script is not put inside the "then" to overcome Asynchronous.
	})
})