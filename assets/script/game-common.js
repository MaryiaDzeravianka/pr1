/*global mainPageButton*/
var MAX_POINTS = 16; // необходимое количество баллов для победы
var START_POINTS = 5; // начально количество балов за правильный ответ
var FINE_POINTS = 2; // штраф за каждый неправильный ответ

var initGame = function (dataObject, list, pageObject, totalPoints) {
    currentStep = currentStep;
    nextStep = nextStep;
    var a = getRandom(dataObject.length); //хранит значение от рандома
    var answers = dataObject[a].answers.slice(0); //запоманает первоначальный вид массива ответов
    shuffle(answers); //перемешиваем масив
    for (var i = 0; i < list.length; i++) { // выбираем рыбку
        list[i].querySelector("div:nth-of-type(2)").innerHTML = answers[i]; //вставляем числа в рыбки
        list[i].classList.remove('hidden_fish');
    }
    pageObject.querySelector(".current_task").classList.remove("correct");
    pageObject.querySelector(".current_task").innerHTML = dataObject[a].primer;
    pageObject.querySelector(".total_points").innerHTML = totalPoints;
    pageObject.querySelector(".round_points").innerHTML = START_POINTS;
    return dataObject[a].answers[0];
};

var getAnswer = function (currentNode) {
    return currentNode.querySelector("div:nth-of-type(2)").innerHTML;
};

var correctAnswer = function (pageObject, totalPoints) {
    pageObject.querySelector(".current_task").innerHTML = "Правильно!!!"; //в белую область вставляется "Правильно!"
    pageObject.querySelector(".current_task").classList.add("correct");
    pageObject.querySelector(".total_points").innerHTML = totalPoints;
};

var winAnswer = function (pageObject, totalPoints) {
    pageObject.querySelector(".current_task").innerHTML = "Победа!!!";
    pageObject.querySelector(".current_task").classList.add("correct");
    pageObject.querySelector(".total_points").innerHTML = totalPoints;
    nextStep.parentNode.htmlFor = (nextStepLabel + "GamePageButton");
    nextStep.classList.add("available");
    nextStep.classList.remove("unavailable");
    currentStep.classList.add("passed");
    currentStep.classList.remove("available");
    mapState[nextStep.id] = true;
};

var wrongAnswer = function (currentNode, pageObject, points) {
    points -= FINE_POINTS;
    currentNode.classList.add('hidden_fish'); // иначе рыбка пропадает плавно
    pageObject.querySelector(".round_points").innerHTML = points;
    return points;
};

var exitGame = function () {
    mainPageButton.checked = true;
};

// перемешиваем числа в массиве для рыбок, 
// чтобы каждый раз разные выбирались по клику на фишку на карте
var shuffle = function (a) {
    var j, x, i;
    for (i = a.length; i; i--) { //если ноль то false
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

// случайное число не более чем length
var getRandom = function (length) {
    return Math.floor(Math.random() * (length));
};
