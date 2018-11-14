//обЪявление переменных
var location1 = 3; //переменные для хранения позиции корабля
var location2 = 4;
var location3 = 5;
var guess; //переменная для номера клетки
var hits = 0; //Переменная для количества попаданий
var guesses = 0; //Переменная для количества попыток
var isSink = false; //Переменная для хранения информации о том потоплен
                    //корабль или нет

//Цикл пока корабль не будет потоплен
while (isSink === false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	//Выводит сообщение с просьбой ввести номер клетки
	if (guess < 0 || guess > 6) {
		//Проверяет введённое значение с положением корабля
		alert("Please enter a valid number!");
		//Выводит сообщение если номер клетки введен не верно
	} else {
		guesses = guesses + 1;
		//Прибавляет попыткам + 1 если номер введён верно
 //Проверка попадания
		if (guess == location1 || guess == location2 || guess == location3) {
      alert("Hit");
			hits = hits + 1;
		  if (hits == 3) {
			  isSink = true;
				alert("You sank my battleship!");
			}
		} else {
			alert("Miss!");
		}
	}
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
               " wich means your shooting accuracy was " + (3/guesses);
alert(stats);
