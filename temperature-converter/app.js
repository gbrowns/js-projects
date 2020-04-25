//grab the html elements in variables

let input = document.querySelector(".input");
let display = document.querySelector(".display");
let button = document.querySelector(".btn");
let selected = document.querySelector(".opt");
let celcius = document.querySelector(".option1");
let farenheits = document.querySelector(".option2");

//change value of the button
 button.value = "Change Temperature";

//add click listner to the button
button.addEventListener('click', fahToCel);
button.addEventListener('click', celToFah);

//add event listener to both inputs
input.addEventListener('input', celToFah);
display.addEventListener('input',fahToCel);

// function to convert farenheits to celcius--------------------
	function fahToCel(){
		
		const ftemp = parseFloat(input.value);
		
		let celTemp = (ftemp - 32) * 5/9;
		//log into the console
		console.log(celTemp + "Celcius");
		//set the result to be displayed
	     input.value = celTemp;

	}
	

// function to convert farenheits to celcius--------------------
	function celToFah(){
		
		const ctemp = parseFloat(input.value);
		let farTemp = ctemp * 9/5 + 32;
		
		//log into the console
          console.log(farTemp + "Farenheits");
          
	     //set the result to be displayed
		display.value = farTemp;
				
	}
	
	//end---------------------------------------------------------