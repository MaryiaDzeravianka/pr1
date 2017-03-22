/*global fishGamePage fish1 fish2 fish3 fish4 fishData
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;

var fishList = [fish1, fish2, fish3, fish4];

var initFishGame = function() {
    totalPoints = 0;
    newFishRound();
};

var newFishRound = function() {
    points = START_POINTS
    answer = initGame(fishData, fishList, fishGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < fishList.length; i++) {
    fishList[i].onclick = function() { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                totalPoints += points;
                correctAnswer(fishGamePage, totalPoints);
                if (totalPoints >= MAX_POINTS) {
                    totalPoints = 0;
                    exitGame();
                }
                else {
                    setTimeout(newFishRound, 2500); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            }
            else {
                points = wrongAnswer(this, fishGamePage, points);
                ready = true;
            }

        }
    };
}