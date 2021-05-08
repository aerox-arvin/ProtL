exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['assert.js'],
 // specs: ['chainlocators.js']
  //specs: ['loopitblock.js']
  specs: ['func.js']
  //specs: ['drpdown.js']
  
  /*capabilities: {
	  'browserName': 'firefox'
	}*/

//capabilities: {
//	  'browserName': 'internet explorer'
//	}
}