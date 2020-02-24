var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

//  Funkcje   

function init() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			// skrócony if
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}

	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener('click', function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#222222';
				messageDisplay.textContent = 'Try again';
			}
		});
	}
	
	reset();
}

function reset() {
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = 'steelblue';
	resetButton.textContent = 'New colors ?';
	messageDisplay.textContent = '';

	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
}

resetButton.addEventListener('click', function(){
	reset();
});

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	// Pick "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
