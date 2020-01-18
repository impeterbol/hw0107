var sBtn = document.querySelector("#startBtn");
var timeCounter = document.querySelector("#counter");
var inputField = document.querySelector("#inputField1");
var saveHighscoresBtn = document.querySelector("#saveHighScores");

// user's initial position in the quiz
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// test, testStatus, choice, choices, chA, chB, chC,chD, correct = 0;
var selections=[];
var test = document.getElementById("test");
var testStatus = document.getElementById("testStatus");
// question = 0;

 inputField.style.display="none";
 saveHighscoresBtn.style.display="none";

sBtn.addEventListener("click", () => {
  // removing the start button
  sBtn.style.display = "none";
 

  //starting to populate first question
  countTime();
  renderQuiz();


});




// function to populate the quiz
function renderQuiz() {


 
 

  if (pos >= questions.length) {
    test.innerHTML = "You got " + correct + " of" + questions.length;
    testStatus.innerHTML = "You finished the quiz";
    //here to add - saves highscores;
    
   
    //saving to local storage
    var scoreLocal = localStorage.setItem('correct answer', correct);
   
    inputField.style.display="block";
    saveHighscoresBtn.style.display="block";

    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }

  var newStatus =  testStatus.innerHTML;
  testStatus.innerHTML = "Question " + (pos + 1) + " of " + questions.length;
 
  var question = questions[pos].title;
 var choice = questions[pos].choices;

 test.innerHTML = question + "<br>";


 chA = questions[pos].choices[0];
  chB = questions[pos].choices[1];
  chC = questions[pos].choices[2];
  chD = questions[pos].choices[3];

 
  // the += appends to the data on the line above
  test.innerHTML += `<input type='radio' name='choices' value=${chA}> ${chA}<br>`;
  test.innerHTML += `<input type='radio' name='choices' value=${chB}> ${chB}<br>`;
  test.innerHTML += `<input type='radio' name='choices' value=${chC}> ${chC}<br>`;
  test.innerHTML += `<input type='radio' name='choices' value=${chD}> ${chD}<br><br>`;
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

};


saveHighscoresBtn.addEventListener("click", function(){

 //creating a var for a user score
 var userName = document.querySelector("#inputField1").value;
 var nameLocal = localStorage.setItem('user name', userName);

});



function checkAnswer() {
// using getElementsByName because there is an array which it will loop through

var choices = document.getElementsByName('choices');
    for (var i = 0; i < choices.length; i++) {
          if (choices[i].checked) {
           let userChoice = choices[i].value;
           console.log(userChoice);
           if (userChoice === questions[pos]['answer']){
            //each time there is a correct answer this value increases
            correct++;
            console.log(correct);
          }
          }

// 

    }
 
 // checks if answer matches the correct choice
    // if (choice == questions[pos]['answer']){
    //   //each time there is a correct answer this value increases
    //   correct++;
    //   console.log(correct);
    // }
      // changes position of which character user is on
      pos++;
      console.log(pos);

       // then the renderQuiz function runs again to go to next question
       renderQuiz();

};


function countTime() {
  function counterFunction() {
    var counter = 76;
    setInterval(function () {
      if (counter == 0) { clearInterval(this) }
      else { timeCounter.textContent = --counter };
    }, 1000);

  };
  counterFunction();
  //add a start over button
};
