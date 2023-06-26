// decleration of variables
var highscoreArray = [{}];
var trueBtnElement = $("#quiz-box");
var falseBtnElement = $("#quiz-box");
var addUl = $("<ul>");
// set elements
var quizBox = $("#quiz-box");
var scoreBox = $("#score-box");
var startBtn = $("#start-button");

// Functions

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
