    /Demonstrate simple finctions/
	function msg(){  
     alert("Hello take care of sanitizing in this covid situations");  
    }  
	// Demonstrete add function
	function add(){
		var a=2;
		var b=3;
		var c=a+b;
		document.write("add a and b:",c);
		//add two elements		
	}
	
	//Demonstrate accessing window global value
	var value=50;  
    function a(){  
    alert(window.value);//accessing global variable   
    }  
	
	//Demonstrate switch condition
	function switch1(){
    var grade='C';  
    var result;  
    switch(grade){  
    case 'A':  
    result="A Grade";  
    break;  
    case 'B':  
    result="B Grade";  
    break;  
    case 'C':  
    result="C Grade";  
    break;  
    default:  
    result="No Grade";  
    }  
    document.write(result);  
	}
//Demonstrate for loop
function pnt_numbers(){
	for (i=0;i<=5;i++)
	{
		document.write(i+"<br/>");
	}
}
//Demonstrate while loop
function pnt_while_no(){
	var i=11;
	while(i<=15)
	{
		document.write(i+"<br/>");
		i++;
	}
}

//find cube
function getcube(number){  
alert(number*number*number);  
}  
	
// JS function Methods - apply(), bind(), call(), toString()

// JS Function objects
var add1=new Function("num1","num2","return num1+num2");  
document.writeln(add1(12,15));

//JS obj by Obj Literal


