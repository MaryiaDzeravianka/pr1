/*global all, tasks, task, oneFirst,allPoints, taskPoints, games1, fish1, fish2, fish3, fish4*/

const MAX_POINTS = 10; //константа

var ready = true;
var points = 5;
var totalPoints = 0;

var getRandom = function(length) {
    return Math.floor(Math.random() * (length));
};

var fishList = [fish1, fish2, fish3, fish4]; //массив рыбок
var correctAnswer;

var shuffle = function(a) { // перемешиваем числа в массиве для рыбок, чтобы каждый раз разные выбирались по клику на фишку на карте
    var j, x, i;
    for (i = a.length; i; i--) { //если ноль то false
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};
var initGame = function() {
    all.style.display = 'none';
    games1.style.display = 'block';
    var a = getRandom(tasks.length); //хранит значение от рандома
    correctAnswer = tasks[a].answers[0]; //запоминаем правильный ответ перед перемешиванием в массиве чисел
    var answers = tasks[a].answers.slice(0); //запоманает первоначальный вид массива ответов
    shuffle(answers); //перемешиваем масив
    for (var i = 0; i < fishList.length; i++) { // выбираем рыбку
        fishList[i].querySelector("div:nth-of-type(2)").innerHTML = answers[i]; //вставляем числа в рыбки
        fishList[i].style.display = 'block'; //стиль для рыбки с числом
        fishList[i].classList.remove('hidden_fish');
    }
    ready = true;
    points = 5;
    task.classList.remove("correct"); //убираю класс с зелеными буквами
    allPoints.querySelector("div").innerHTML = totalPoints;
    task.querySelector("div").innerHTML = tasks[a].primer; //вставляю пример в белую область
    taskPoints.querySelector("div").innerHTML = points;
};

exit.onclick = function() {
    games1.style.display = 'none';
    all.style.display = 'block';
    
};


oneFirst.onclick = function() {
    totalPoints = 0;
    initGame();
};

for (var i = 0; i < fishList.length; i++) {
    fishList[i].onclick = function() { //при нажатии на рыбку (действие на событие)
        if (ready) {
            if (this.querySelector("div:nth-of-type(2)").innerHTML == correctAnswer) { //число в рыбке равно правильному сохраненному ответу
                task.querySelector("div").innerHTML = "Правильно!!!"; //в белую область вставляется "Правильно!"
                task.classList.add("correct");
                ready = false; //пока светится Правильно, все не работает это 
                totalPoints += points;
                allPoints.querySelector("div").innerHTML = totalPoints;
                if (totalPoints >= MAX_POINTS) {
                    all.style.display = 'block';
                    games1.style.display = 'none';
                    totalPoints = 0;
                    oneFirst.classList.add('one_first_checked');
                    oneFirst.classList.remove('one_first_unchecked');
                    twoFirst.style.display = 'block';
                    
                }
                else {
                    setTimeout(initGame, 3000); // задержка выполнения функции на 3 сек (3000миллисекунды) и ready и initGame стало снова true
                }
            }
            else {
                this.classList.add('hidden_fish'); // иначе рыбка пропадает плавно
                points -= 2;
                taskPoints.querySelector("div").innerHTML = points;
            }
        }
    };
}


