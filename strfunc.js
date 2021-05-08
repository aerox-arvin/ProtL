 //String literal declaration

var companyname="Testing solutions  "
	
	//String object declaration
	
	var cname=new String("Testing solutions")
	
	//charAt(arg index)
	
	console.log(companyname.charAt(5));

    //concat(arg)

    console.log(companyname.concat("PVT LTD"))
    
    //indexOf()
    		
    console.log(companyname.indexOf("s"))
    
    //slice(start index, End index)
    
   // here start index is inclusive and end index is exclusive
    
    console.log(companyname.slice(0,9));
    
    //toUpperCase()
    
    console.log(companyname.toUpperCase())
    
    //trim() to trim spaces in the end
    console.log(companyname.trim())