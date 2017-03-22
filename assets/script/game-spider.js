/*global spiderGamePage spider1 spider2 spider3 spider4 spiderData
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;

var spiderList = [spider1, spider2, spider3, spider4];

var initSpiderGame = function() {
    totalPoints = 0;
    newSpiderRound();
};

var newSpiderRound = function() {
    points = START_POINTS;
    answer = initGame(fishData, spiderList, spiderGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < spiderList.length; i++) {
    spiderList[i].onclick = function() { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                totalPoints += points;
                correctAnswer(spiderGamePage, totalPoints);
                if (totalPoints >= MAX_POINTS) {
                    totalPoints = 0;
                    exitGame();
                }
                else {
                    setTimeout(newSpiderRound, 2500); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            }
            else {
                points = wrongAnswer(this, spiderGamePage, points);
                ready = true;
            }

        }
    };
}