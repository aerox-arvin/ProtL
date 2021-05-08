describe('All method', function(){
	
	it('app', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	})
	
	for(var i=0; i<=2; i++){
		
		it('do the operation multiple times', function(){
			element(by.model("first")).sendKeys("8");
			element(by.model("second")).sendKeys("10");
			element(by.id("gobutton")).click();
		})
	}
	//count() method to get the number of elements found from all() method
	it('count', function(){
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text)
		})
	})
	
	//each() method to iterate the steps inside the it function based on the elements found from all() method
	
	it('iterate and locate all elements', function(){
		element.all(by.repeater("result in memory")).each(function(list){
			list.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})		
	})
})