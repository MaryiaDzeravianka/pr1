/*global fishGamePage fish1 fish2 fish3 fish4
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;

var fishList = [fish1, fish2, fish3, fish4];
var fishData;

var initFishGame = function (data, mapIndex, stepIndex, mapState) {
    totalPoints = 0;
    fishData = data;
    newFishRound();
};

var newFishRound = function () {
    points = START_POINTS
    answer = initGame(fishData, fishList, fishGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < fishList.length; i++) {
    fishList[i].onclick = function () { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                totalPoints += points;
                if (totalPoints >= MAX_POINTS) {
                    winAnswer(fishGamePage, totalPoints);
                    totalPoints = 0;
                    setTimeout(exitGame, 2500);
                } else {
                    correctAnswer(fishGamePage, totalPoints);
                    setTimeout(newFishRound, 2500); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            } else {
                points = wrongAnswer(this, fishGamePage, points);
                ready = true;
            }

        }
    };
}
