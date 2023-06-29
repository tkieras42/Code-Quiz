// decleration of variables
var highscoreArray = [{}];
var questionCount = 1;
// set elements
var addUl = $("<ul>");
var quizBox = $("#quiz-box");
var scoreBox = $("#score-box");
var startBtn = $("#start-button");

// Functions

function startQuiz(event){
    
    startTimer();
    nextQuestion();
}

function nextQuestion(){
    if(questionCount === 7){
        questionCount = 1;
    }
    else if(questionCount === 6){
        showScorePage(); 
        questionCount++;       
    }
    else if(questionCount === 5){
        showQuestion5();  
        questionCount++;      
    }
    else if(questionCount === 4){
        showQuestion4(); 
        questionCount++;       
    }
    else if(questionCount === 3){
        showQuestion3();  
        questionCount++;      
    }
    else if(questionCount === 2){
        showQuestion2();  
        questionCount++;    
    }
    else{
        showQuestion1();   
        questionCount++;    
    }
    questionAnswer();
}

function showQuestion1(){

    quizBox.empty();
    quizBox.append("<h3>A Boolean has a value of 'true' or 'flase'.</h3>");
    quizBox.append(addUl);
    addUl.append("<li><button class='correct button'>True</button>");
    trueBtnElement = $("#trueBtn");    
    addUl.append("<li><button class='incorrect button'>False</button>");
    falseBtnElement = $("#falseBtn");    
}

function showQuestion2(){
    addUl.empty()
    quizBox.empty();
    quizBox.append("<h3>How does a FOR loop start?</h3>");   
    quizBox.append(addUl); 
    addUl.append("<li><button class='incorrect button long-btn'>for(i = 0; i > 10)</button>");
    addUl.append("<li><button class='incorrect button long-btn'>for(i = 1, i >10, i++)</button>");    
    addUl.append("<li><button class='correct button long-btn'>for(i = 0; i > 10; i++</button>");
    addUl.append("<li><button class='incorrect button long-btn'>for(i++; i > 10)</button>");
    
}

function showQuestion3(){
    addUl.empty()
    quizBox.empty();
    quizBox.append("<h3>Which operator is used to assign a value to a variable?</h3>");
    quizBox.append(addUl); 
    addUl.append("<li><button class='incorrect button'>+</button>");
    addUl.append("<li><button class='correct button'>=</button>");    
    addUl.append("<li><button class='incorrect button'>-</button>");
    addUl.append("<li><button class='incorrect button'>*</button>");
}

function showQuestion4(){
    addUl.empty()
    quizBox.empty();
    quizBox.append("<h3>How do you call a function named 'testFunction'?</h3>");
    quizBox.append(addUl); 
    addUl.append("<li><button class='correct button long-btn'>testFunction();</button>");
    addUl.append("<li><button class='incorrect button long-btn'>call testFunction()</button>");    
    addUl.append("<li><button class='incorrect button long-btn'>function testFunction()</button>");
}

function showQuestion5(){
    addUl.empty()
    quizBox.empty();
    quizBox.append("<h3>Inside which HTML element do we put the JavaScript?</h3>");
    quizBox.append(addUl); 
    addUl.append("<li><button class='incorrect button'>'<js>'</button>");
    addUl.append("<li><button class='incorrect button'>'<link>'</button>");    
    addUl.append("<li><button class='incorrect button'>'<javascript>'</button>");
    addUl.append("<li><button class='correct button'>'<script>'</button>");
}

function showScorePage(){
    quizBox.empty();
    quizBox.append("<h3>score</h3>");
    quizBox.append("<textarea><textarea>");
}
// checks if the button pressed is the correct answer
function questionAnswer(){
    console.log(event);
    if($(event.target).hasClass('incorrect')){
        incorrect();
    }
    else{
        correct();
    }
}
// display for correct answer
function correct(){
    var correctTimer = setInterval(function() {

    }, 5000)    
}
// display for incorrect answer
function incorrect(){
    var correctTimer = setInterval(function() {

    }, 5000) 
}

function startTimer(){

}

// Events
// reset button
// start quiz button
startBtn.on("click", startQuiz);


// listens for click from buttons for quiz answers
quizBox.on("click", "button", nextQuestion);

