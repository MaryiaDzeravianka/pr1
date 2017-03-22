/*global birdGamePage bird1 bird2 bird3 bird4 birdData
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;

var birdList = [bird1, bird2, bird3, bird4];

var initBirdGame = function() {
    totalPoints = 0;
    newBirdRound();
};

var newBirdRound = function() {
    points = START_POINTS;
    answer = initGame(fishData, birdList, birdGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < birdList.length; i++) {
    birdList[i].onclick = function() { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                totalPoints += points;
                correctAnswer(birdGamePage, totalPoints);
                if (totalPoints >= MAX_POINTS) {
                    totalPoints = 0;
                    exitGame();
                }
                else {
                    setTimeout(newBirdRound, 2500); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            }
            else {
                points = wrongAnswer(this, birdGamePage, points);
                ready = true;
            }

        }
    };
}