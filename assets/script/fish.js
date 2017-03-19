// JavaScript File
var tasks = [{
        "primer": "3+2=",
        "answers": [5, 6, 4, 7]
    }, {
        "primer": "2+3=",
        "answers": [5, 2, 6, 3]
    }
]
var getRandom=function(length) {
    return Math.floor(Math.random() * (length));
}
console.log(getRandom(tasks.length));
oneFirst.onclick = function() {
    // all.style.display = 'none';
    games1.style.display = 'block';
    var a=getRandom(tasks.length); //хранит значение от рандома
    task.querySelector("div").innerHTML=tasks[a].primer;
    fish1.querySelector("div:nth-of-type(2)").innerHTML= tasks[a].answers[getRandom(tasks[a].answers.length)];
    
}
