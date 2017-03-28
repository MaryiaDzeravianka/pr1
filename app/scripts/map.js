var mapState = {
    'firstMapFirstStep': true,
    'firstMapSecondStep': false,
    'firstMapThirdStep': false,

    'secondMapFirstStep': true,
    'secondMapSecondStep': false,
    'secondMapThirdStep': false,
    
    'thirdMapFirstStep': true,
    'thirdMapSecondStep': false,
    'thirdMapThirdStep': false,
    
    'fourthMapFirstStep': true,
    'fourthMapSecondStep': false,
    'fourthMapThirdStep': false
};

var currentStep;
var nextStep;
var nextStepLabel;

firstMapFirstStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = firstMapSecondStep;
        nextStepLabel = 'fish';

        initBirdGame(gameDataLevel1);
    }
};

firstMapSecondStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = firstMapThirdStep;
        nextStepLabel = 'spider';

        initFishGame(gameDataLevel2);
    }
};

firstMapThirdStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapFirstStep;
        nextStepLabel = 'spider';

        initSpiderGame(gameDataLevel3);
    }
};

secondMapFirstStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapSecondStep;
        nextStepLabel = 'fish';

        initSpiderGame(gameDataLevel4);
    }
};

secondMapSecondStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = secondMapThirdStep;
        nextStepLabel = 'bird';

        initFishGame(gameDataLevel5);
    }
};

secondMapThirdStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = thirdMapFirstStep;
        nextStepLabel = 'test';

        initBirdGame(gameDataLevel6);
    }
};

thirdMapFirstStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = thirdMapSecondStep;
        nextStepLabel = 'test';

        initTestGame(gameDataLevel7);
    }
};

thirdMapSecondStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = thirdMapThirdStep;
        nextStepLabel = 'test';

        initTestGame(gameDataLevel8);
    }
};

thirdMapThirdStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = fourthMapFirstStep;
        nextStepLabel = 'test';

        initTestGame(gameDataLevel9);
    }
};


fourthMapFirstStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = fourthMapSecondStep;
        nextStepLabel = 'test';

        initTestGame(gameDataLevel10);
    }
};

fourthMapSecondStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = fourthMapThirdStep;
        nextStepLabel = 'test';

        initTestGame(gameDataLevel11);
    }
};

fourthMapThirdStep.onclick = function() {
    if (mapState[this.id]) {
        currentStep = this;
        nextStep = thirdMapSecondStep;
        nextStepLabel = '';

        initTestGame(gameDataLevel12);
    }
};
