// Initialize the game board with random numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
numbers.sort(function() { return Math.random() - 0.5; });

var cells = document.getElementsByTagName("td");

for (var i = 0; i < cells.length; i++) {
	cells[i].innerHTML = numbers[i];
	cells[i].onclick = function() {
		// Find the index of the empty cell
		var emptyIndex = -1;
		for (var j = 0; j < cells.length; j++) {
			if (cells[j].innerHTML === "") {
				emptyIndex = j;
				break;
			}
		}

		// Find the index of the clicked cell
		var clickedIndex = -1;
		for (var j = 0; j < cells.length; j++) {
			if (cells[j] === this) {
				clickedIndex = j;
				break;
			}
		}

		// Check if the clicked cell is adjacent to the empty cell
		if (Math.abs(clickedIndex - emptyIndex) === 1 && Math.floor(clickedIndex / 4) === Math.floor(emptyIndex / 4) || Math.abs(clickedIndex - emptyIndex) === 4) {
			
			cells[emptyIndex].innerHTML = this.innerHTML;
			this.innerHTML = "";

			// Check if the game is over
			var isGameOver = true;
			for (var j = 0; j < cells.length; j++) {
				if (cells[j].innerHTML !== j + 1 && cells[j].innerHTML !== "") {
					isGameOver = false;
					break;
				}
			}
			if (isGameOver) {
				var playAgain = confirm("you won! Play again?");
				if (playAgain) {
					// Scramble the numbers using the Math.random method
					numbers.sort(function() { return Math.random() - 0.5; });
					for (var j = 0; j < cells.length; j++) {
						cells[j].innerHTML = numbers[j];
					}
				}
			}
		} else {
			alert("Illegal move!");
		}
	};
}
