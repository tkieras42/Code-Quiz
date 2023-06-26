// decleration of variables
var highscoreArray = [{}];
var trueBtnElement = $("#quiz-box");
var falseBtnElement = $("#quiz-box");
// set elements
var quizBox = $("#quiz-box");
var scoreBox = $("#score-box");
var startBtn = $("#start-button");

// Functions

function showQuestion1(){
    
    quizBox.empty();
    quizBox.append("<h3>A Boolean has a value of 'true' or 'flase'.</h3>");
    quizBox.append("<button id='trueBtn'>True</button>");
    trueBtnElement = $("#trueBtn")
    quizBox.append("<button id='falseBtn'>False</button>");
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
function startQuiz(){

}
function correct(){
    var correctTimer = setInterval(function() {

    }, 5000)
    showQuestion2;
}
function incorrect(){
    
}

// Events
// reset button
// start quiz button
startBtn.on("click", showQuestion1);


// buttons for first question
trueBtnElement.on("click", correct());
falseBtnElement.on("click", incorrect);
// buttons for second question
// buttons for third question
// buttons 
