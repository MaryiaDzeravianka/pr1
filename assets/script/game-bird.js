/*global birdGamePage bird1 bird2 bird3 bird4
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;

var birdList = [bird1, bird2, bird3, bird4];
var birdData;

var initBirdGame = function (data) {
    totalPoints = 0;
    birdData = data;
    currentMapState = mapState;
    newBirdRound();
};

var newBirdRound = function () {
    points = START_POINTS
    answer = initGame(birdData, birdList, birdGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < birdList.length; i++) {
    birdList[i].onclick = function () { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                totalPoints += points;
                if (totalPoints >= MAX_POINTS) {
                    winAnswer(birdGamePage, totalPoints);
                    totalPoints = 0;
                    setTimeout(exitGame, 2500);
                } else {
                    correctAnswer(birdGamePage, totalPoints);
                    setTimeout(newBirdRound, 2500); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            } else {
                points = wrongAnswer(this, birdGamePage, points);
                ready = true;
            }

        }
    };
}
