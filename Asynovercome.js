describe('Asynchronous overcome',function(){
	it('use then',function(){
		browser.get("http://localhost:9095/Account/Login").then(function(){
			console.log("Asynchronous is overcome")
		})
	})
})