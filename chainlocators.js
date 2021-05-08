describe('chain Locators', function(){
	
	//note: if we have repeater attribute in the page, it is better to use it has parent element 
	//when there is a requirement to click on child element 
	//Also if we have two of the elements with same attribute, we can chain the child element with its parent element with repeater attribute.
	
	//note: CSS for identical tags. 
	//Syntax: ("tagname:nth-child(enter the order number of tag)")
	
	
		it('input the values', function(){
			browser.get('http://juliemr.github.io/protractor-demo/');
			element(by.model("first")).sendKeys("8");
			element(by.model("second")).sendKeys("10");
			element(by.id("gobutton")).click();
			//element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
			element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
					{
				console.log(text);
	})	
		})
	it('change operator', function(){
		browser.refresh();
		element(by.model("first")).sendKeys("8");
		element(by.model("second")).sendKeys("2");
		element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2){
			console.log('\n');
			console.log(text2);
		})
	})
	
	it('change operator', function(){
		browser.refresh();
		element(by.model("first")).sendKeys("8");
		element(by.model("second")).sendKeys("2");
		element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2){
			console.log('\n');
			console.log(text2);
		})
	})
	it('change operator', function(){
		browser.refresh();
		element(by.model("first")).sendKeys("8");
		element(by.model("second")).sendKeys("2");
		element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2){
			console.log('\n');
			console.log(text2);
		})
	})
	it('change operator123', function(){
		browser.refresh();
		element(by.model("first")).sendKeys("8");
		element(by.model("second")).sendKeys("2");
		element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2){
			console.log('\n');
			console.log(text2);
		})
	})
})