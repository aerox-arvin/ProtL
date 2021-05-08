describe('reusable function', function() {

	function add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}

	it('call the function', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		add(9, 10);
		add(11, 12);
		element.all(by.repeater("result in memory")).each(
				function(list) {
					list.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {
								console.log(text);
							})
				})
	})
})