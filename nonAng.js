describe('nonanghowTo', function(){
	
	it('nong',function(){
		
		//to handle non angular we should disable wait
		browser.waitForAngularEnabled(false);
		browser.get("http://localhost/Account/Login.aspx");
	})
})