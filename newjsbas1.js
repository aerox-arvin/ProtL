//print numbers from 1 to 20
for(var i=1; i<20; i++)
	{
	console.log(i);
	}

//print numbers from 1 to 99 
for(var i=1; i<=99; i=i+2)
	{
	console.log(i);
	}

//while will execute until the condition is true.
//if the condition is not true, then it will not execute.
var j=2;
while (j<15)
	{
	console.log(j);
	j++;
	}

//do will execute atleat once. Because condition check will happen only after it is executed.
var k=10;
do
{
	console.log("do-while executed")
	k++;
}while(k<20)