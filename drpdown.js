describe('dropdown function', function() {

	function cal(a, b, c) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(list) {
			list.getAttribute("value").then(function(oper) {
				if (oper == c) {
					list.click();
				}
			})
		})
		element(by.id("gobutton")).click();
	}

	it('call the function', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		cal(1, 2, "MULTIPLICATION");
		element.all(by.repeater("result in memory")).each(
				function(list) {
					list.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {
								console.log(text);
	
							})
				})
	})

})
//Note: we can also select the dropdown items by chain locators approach.