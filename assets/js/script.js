// decleration of variables
var highscoreArray = [{}];
var questionCount = 1;
// set elements

var trueBtnElement = $("#quiz-box");
var falseBtnElement = $("#quiz-box");
var addUl = $("<ul>");
var quizBox = $("#quiz-box");
var scoreBox = $("#score-box");
var startBtn = $("#start-button");

// Functions

function startQuiz(){
    startTimer;
    nextQuestion;

}

function nextQuestion(){
    if(questionCount === 4){
        showScorePage;        
    }
    else if(questionCount === 3){
        showQuestion3;        
    }
    else if(questionCount === 2){
        showQuestion2;      
    }
    else{
        showQuestion1;       
    }
    if(questionCount === 5){
        questionCount = 1;
    }
    else{
        questionCount++;
    }
}

function showQuestion1(){
    
    quizBox.empty();
    quizBox.append("<h3>A Boolean has a value of 'true' or 'flase'.</h3>");
    quizBox.append(addUl);
    addUl.append("<li><button id='trueBtn' class='trueBtn'>True</button>");
    trueBtnElement = $("#trueBtn")
    addUl.append("<li><button id='falseBtn' class='falseBtn'>False</button>");
    falseBtnElement = $("#falseBtn");
}

function showQuestion2(){
    quizBox.empty();
    quizBox.append("<h3></h3>");
   
}

function showQuestion3(){
    quizBox.empty();
    quizBox.append("<h3></h3>");
}

function showScorePage(){
    quizBox.empty();
    quizBox.append("<h3></h3>");
}

function correct(){
    var correctTimer = setInterval(function() {

    }, 5000)
    showQuestion2;
}

function incorrect(){
    
}

function questionAnswer(event){
    if(event.target.hasClass('incorrect')){
        incorrect;
    }
    else{
        correct;
    }
    nextQuestion;
}

// Events
// reset button
// start quiz button
startBtn.on("click", startQuiz);


// buttons for first question
trueBtnElement.on("click", correct);
falseBtnElement.on("click", incorrect);
// buttons for second question
// buttons for third question
// buttons 
