var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateColors(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
			squares[i].style.background = colors[i];
		else
			document.querySelectorAll(".square")[i].style.display = "none";
	}
	document.getElementById("message").innerHTML = "";
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateColors(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	document.getElementById("message").innerHTML = "";
});


reset.addEventListener("click", function() {
	colors = generateColors(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}
	document.getElementById("heading").style.background = "steelblue";
	document.getElementById("message").innerHTML = "";
	document.getElementById("reset").innerHTML = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		if (this.style.background === pickedColor)
		{
			console.log(this.style.background, pickedColor);
			//display message
			document.getElementById("message").innerHTML = "YOU WIN!";
			//change colors of all squares amd h1 to correct color
			changeColor(pickedColor);
			document.getElementById("reset").innerHTML = "Play Again?";
		}
		else
		{
			console.log(this.style.background, pickedColor);
			this.style.background = "#232323";
			document.getElementById("message").innerHTML = "Try Again!";
		}
			
	})
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++)
		squares[i].style.background = color;
	document.getElementById("heading").style.background = color;
}

function pickColor(colors) {
	var random = Math.floor(Math.random() * colors.length + 1);
	return colors[random];
}

function generateColors(num) {
	var colorArray = [];
	for (var i = 0; i < num; i++)
		colorArray.push(randomColor());
	return colorArray;
}

function randomColor(argument) {
	// pick a red, green and blue from 0-255
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}