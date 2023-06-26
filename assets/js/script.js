// decleration of variables
var highscoreArray = [{}];
// var trueBtnElement; 
// var falseBtnElement;
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
    trueBtnElement = $("#falseBtn");
}
function showQuestion2(){
    
}
function showQuestion3(){
    
}
function startQuiz(){

}

// Events
// reset button
// start quiz button
startBtn.on("click", showQuestion1());

// buttons for first question
// trueBtnElement.on("click", );
// falseBtnElement.on("click", );
// buttons for second question
// buttons for third question
// buttons 
