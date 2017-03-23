var mapState = {
    "firstMapFirstStep": true,
    "firstMapSecondStep": false,
    "firstMapThirdStep": false,

    "secondMapFirstStep": true,
    "secondMapSecondStep": false,
    "secondMapThirdStep": false

};

var currentStep;
var nextStep;
var nextStepLabel;


firstMapFirstStep.onclick = function () {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = firstMapSecondStep;
        nextStepLabel = "fish";

        initBirdGame(gameDataLevel1);
    }
};

firstMapSecondStep.onclick = function () {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = firstMapThirdStep;
        nextStepLabel = "spider";

        initFishGame(gameDataLevel2);
    }
};

firstMapThirdStep.onclick = function () {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapFirstStep;
        nextStepLabel = "spider";

        initSpiderGame(gameDataLevel3);
    }
};

secondMapFirstStep.onclick = function () {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapSecondStep;
        nextStepLabel = "fish";

        initSpiderGame(gameDataLevel4);
    }
};

secondMapSecondStep.onclick = function () {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapThirdStep;
        nextStepLabel = "bird";

        initFishGame(gameDataLevel5);
    }
};

secondMapThirdStep.onclick = function () {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapFirstStep;
        nextStepLabel = "";

        initBirdGame(gameDataLevel6);
    }
};

/*
thirdMapFirstStep.onclick = function() {
    initBirdGame();
};

thirdMapSecondStep.onclick = function() {
    initSpiderGame();
};

thirdMapThirdStep.onclick = function() {
};


fourthMapFirstStep.onclick = function() {
};

fourthMapSecondStep.onclick = function() {
};

fourthMapThirdStep.onclick = function() {
};
*/
