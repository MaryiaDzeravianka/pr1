/*global spiderGamePage spider1 spider2 spider3 spider4
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;

var spiderList = [spider1, spider2, spider3, spider4];
var spiderData;

var initSpiderGame = function (data, mapIndex, stepIndex, mapState) {
    totalPoints = 0;
    spiderData = data;
    newSpiderRound();
};

var newSpiderRound = function () {
    points = START_POINTS
    answer = initGame(spiderData, spiderList, spiderGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < spiderList.length; i++) {
    spiderList[i].onclick = function () { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                totalPoints += points;
                if (totalPoints >= MAX_POINTS) {
                    winAnswer(spiderGamePage, totalPoints);
                    totalPoints = 0;
                    setTimeout(exitGame, 2500);
                } else {
                    correctAnswer(spiderGamePage, totalPoints);
                    setTimeout(newSpiderRound, 2500); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            } else {
                points = wrongAnswer(this, spiderGamePage, points);
                ready = true;
            }

        }
    };
}
