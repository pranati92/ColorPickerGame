var numsquare=6;
var color= generateRandomColor(numsquare);
var pickedcolor = pickColor();
var squares = document.querySelectorAll(".square");
var colordisplay=document.getElementById("colorDisplay");
var messagedisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
	
	setupmodebutton();
	setupsquares();
	reset();
}

function setupmodebutton(){
	for(var i=0;i<modebuttons.length;i++){
	modebuttons[i].addEventListener("click", function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
		{
			numsquare = 3;
		}
		else{
			numsquare=6;
		}
		reset();
	});
}
}

function setupsquares(){
	for(var i=0;i<squares.length;i++)
{
	//check if clicked color is equal to picked color
	squares[i].addEventListener("click", function(){
		var clickedcolor=this.style.backgroundColor;

		if(clickedcolor===pickedcolor)
		{
			messagedisplay.textContent = "Correct !";
			changecolor(pickedcolor);
			h1.style.backgroundColor = pickedcolor;
			resetbutton.textContent = "play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again";
		}
	});
}
}


function reset(){
	//generate new colors
	color = generateRandomColor(numsquare);

	//pick a new random color
	pickedcolor=pickColor();

	//assign the picked color to colordisplay in h1
	colordisplay.textContent = pickedcolor;

	//change color of squares
	for(var i=0;i<squares.length;i++)
		{
			if(color[i])
			{
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = color[i];
			}
			else
			{
				squares[i].style.display = "none";
			}
			//assigning color
			squares[i].style.backgroundColor = color[i];
		}

	resetbutton.textContent = "New Colors";
	messagedisplay.textContent="";
	h1.style.backgroundColor = "steelblue";
}


resetbutton.addEventListener("click",function(){
	reset();
});


function changecolor(color1)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color1;
	}
}

function pickColor()
{
	//generate random picked color
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColor(num)
{
	//create array
	var arr=[];
	//loop through each element in array and generate color
	for(var i=0;i<num;i++)
	{
		arr.push(colorgenerator());
	}
	//return array
	return arr;
}

function colorgenerator()
{
	//pick a red from 0-255
	var r=Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g=Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random() * 256);

	//return rgb
	return "rgb("+ r + ", " + g + ", " + b + ")";
}