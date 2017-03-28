/*global testGamePage option1 option2 option3 option4
START_POINTS MAX_POINTS 
initGame getAnswer correctAnswer wrongAnswer exitGame */

var ready;
var points;
var totalPoints;
var answer;
var testList = [option1, option2, option3, option4];
var testData;

var initTestGame = function (data) {
    totalPoints = 0;
    testData = data;
    newTestRound();
};

var newTestRound = function () {
    points = START_POINTS
    answer = initGame(testData, testList, testGamePage, totalPoints);
    ready = true;
};

for (var i = 0; i < testList.length; i++) {
    testList[i].onclick = function () { //при нажатии на рыбку (действие на событие)
        if (ready) {
            ready = false;
            if (getAnswer(this) == answer) { //число в рыбке равно правильному сохраненному ответу
                winAnswer(testGamePage, totalPoints);
                totalPoints = 0;
                setTimeout(exitGame, 2500);
            } else {
                points = wrongAnswer(this, testGamePage, points);
                ready = true;
            }

        }
    };
}
