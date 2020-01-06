let startButton = document.querySelector("#start");

let quiz = {

    // quiz.create() - creates the quiz
    create: function(){
    
        //getting the HTML quiz element
        let wrapper = document.getElementById("quiz-wrap");

        // looping through the questions to create HTML elements
        for (let index in questions) {

            //adding let for the current question
            let number = parseInt(index) +1; 
            //adding a div to hold the current question
            let qwrap = document.createElement("div");
            //adding a CSS class for styling
            qwrap.classList.add("question");

            // adding a question to the h1 header
            let question = document.createElement("h1");
            question.innerHTML = number + ") " + questions[index]["title"];
            qwrap.appendChild(question);

            // addign options for the qiestions with radio buttons and labelign
            for (let oindex in questions[index]["choices"]){
                //adding the label tag
                let label = document.createElement('label');
                qwrap.appendChild(label);

                // adding the option tag
                let option = document.createElement("input");
                option.type = "radio";
                option.index = oindex;
                option.required = true;
                option.classList.add("oquiz");

                //radio button group shares the same name
                option.name = "quiz-" + number;
                label.appendChild(option);

                //adding text for choices
                let otext = document.createTextNode(questions[index]["choices"][oindex]);
                label.appendChild(otext);
            
            }

            //Adding created question to the HTML quiz
            wrapper.appendChild(qwrap);

        }

        //Adding submit button and event handler to the quiz wrapper
        let submitButton = document.createElement("input");
        submitButton.type = "submit";
        wrapper.appendChild(submitButton);
        wrapper.addEventListener("submit",quiz.submit);

    },

    //this will handle calculation when user submits a quiz:
    submit: function(event){
        //not allowing the form to be submitted
        event.preventDefault();
        event.stopPropagation();

        let selected = document.querySelectorAll(".oquiz:checked");

        //getting the score
        let score = 0;
        for (let index in questions){
            //comparing selected answer with the answer in the file
            if (selected.value == questions["answer"]){
                score++;
            }
        }

        //calculating scores
        let total = selected.length;
        let percent = score/total;

         // Update and show the score
        let html = "<h1>";
            if (percent>=0.7) {
            html += "WELL DONE!";
            } else if (percent>=0.4) {
            html += "NOT BAD!";
            } else {
            html += "TRY AGAIN!";
            }
            html += "</h1>";
            html += "<div>You scored " + score + " out of " + total + ".</div>";
            document.getElementById("quiz-wrap").innerHTML = html;

    }

};

/* [INIT] */
startButton.addEventListener("click", quiz.create);


startButton.addEventListener("hover", counter);
// startButton.addEventListener("click",startQuiz);

    //time count starts from 75 and minuses every sec
    function counter() {
                        var counter = 76;
                                setInterval(function(){
                                      if (counter ==0 ) {clearInterval(this)}
                                         else {timeCount.textContent=--counter};
                                }, 1000);
                         };
                         counter();
    






// let timeCount = document.querySelector("#timeCount");

// let q = document.querySelector(".question");
// let r = document.querySelector("#result");
// let submitButton = document.querySelector("#submit");






// // //listening to start the quiz
// startButton.addEventListener("click",startButton);

// //adding a quiz question function 
// function startQuiz(){
//     //time count starts from 75 and minuses every sec
//     function counter() {
//         var counter = 76;
//         setInterval(function(){
//             if (counter ==0 ) {clearInterval(this)}
//             else {timeCount.textContent=--counter};
//         }, 1000);
//      };
//     counter();

// // storing the answers in HTML
// let output = [];

// // for each question
// questions.forEach(


// )


// };

// //
// function showResuls(){};



// 1) user opens the page with a start button; done
// a. On the page there is a link to another html file - Vie scores
// b. On the page there is a let timeCount = 75;
// 2) User click startButton, question and 1  answer is presented
// a. timeCount starts adding 1 sec every sec
// 3) When user answers a question incorrectly - a sign appears "Not correct"
// a. timeCount adds substracts 15 sec once and then continues substracting 1 sec as usual
// 4) If user answers correctly - user proceeds to the next question (for test there is no next q - just a sign - "thank yoU!"); user score is stored to the local storage
// 5) if timeCount = 0 (for example) OR sign Thank You appeared (=quiz ended), users' score is presented from local storage and two input fields ask user to input their name and email; this is stored in the local storage;




// ## Instructions


//   * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

//   * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

//   * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

//   * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

// * Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

// * Refer to the animated GIF below for a demonstration of the application functionality.

// ![code quiz](./Assets/04-Web-APIs-homework-demo.gif)


// ### Hints

// * Store your questions as an array of objects in a separate file, `questions.js`, that follows this format:

// ```js
// var questions = [
//   {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//   },
//   {
//     title: "The condition in an if / else statement is enclosed within ____.",
//     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//     answer: "parentheses"
//   },
//   ///etc.
// ];
// ```

// * The length of the array in `questions.js` determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.


// ## Minimum Requirements

// * Functional, deployed application.

// * GitHub repository with README describing project.

// * The first view of the application displays a button that starts the quiz.

// * Clicking the start button displays a series of questions.

// * Once the quiz begins, a timer starts.

// * If a question is answered incorrectly, additional time is subtracted from the timer.

// * The timer stops when all questions have been answered or the timer reaches 0.

// * After the game ends, the user can save their initials and score to a highscores view using local storage.

// ## Bonus

// * Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

// * Customize the application theme.

// * Create multiple quizzes and an option for users to choose between them.

// * Add the application to your portfolio.


// ## Commit Early and Often

// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

// * Your commit history is a signal to employers that you are actively working on projects and learning new skills.

// * Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

// Follow these guidelines for committing:

// * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

// * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

// * Don't commit half-done work, for the sake of your collaborators (and your future self!).

// * Test your application before you commit to ensure functionality at every step in the development process.

// We would like you to have well over 200 commits by graduation, so commit early and often!


// ## Submission on BCS

// You are required to submit the following:

// * The URL of the deployed application

// * The URL of the GitHub repository


// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.






//  possible solution ? 

/* [QUIZ ENGINE] */
// var quiz = {
//   draw : function () {
//   // quiz.draw() : draw the quiz

//     // Fetch the HTML quiz wrapper
//     var wrapper = document.getElementById("quiz-wrap");

//     // Loop through all the questions
//     // Create all the necessary HTML elements
//     for (var index in questions) {
//       var number = parseInt(index) + 1; // The current question number
//       var qwrap = document.createElement("div"); // A div wrapper to hold this question and options
//       qwrap.classList.add("question"); // CSS class, for cosmetics

//       // The question - <h1> header
//       var question = document.createElement("h1");
//       question.innerHTML = number + ") " + questions[index]['q'];
//       qwrap.appendChild(question);

//       // The options - <input> radio buttons and <label>
//       for (var oindex in questions[index]['o']) {
//         // The <label> tag
//         var label = document.createElement("label");
//         qwrap.appendChild(label);

//         // The <option> tag
//         var option = document.createElement("input");
//         option.type = "radio";
//         option.value = oindex;
//         option.required = true;
//         option.classList.add("oquiz"); // Will explain this later in function submit below

//         // Remember that a radio button group must share the same name
//         option.name = "quiz-" + number;
//         label.appendChild(option);

//         // Add the option text
//         var otext = document.createTextNode(questions[index]['o'][oindex]);
//         label.appendChild(otext);
//       }

//       // Finally, add this question to the main HTML quiz wrapper
//       wrapper.appendChild(qwrap);
//     }

//     // Attach submit button + event handler to the quiz wrapper
//     var submitbutton = document.createElement("input");
//     submitbutton.type = "submit";
//     wrapper.appendChild(submitbutton);
//     wrapper.addEventListener("submit", quiz.submit);
//   },

//   submit : function (evt) {
//   // quiz.submit() : Handle the calculations when the user submits to quiz

//     // Stop the form from submitting
//     evt.preventDefault();
//     evt.stopPropagation();

//     // Remember that we added an "oquiz" class to all the options?
//     // We can easily get all the selected options this way
//     var selected = document.querySelectorAll(".oquiz:checked");

//     // Get the score
//     var score = 0;
//     for (var index in questions) {
//       if (selected[index].value == questions[index]['a']) {
//         score++;
//       }
//     }

//     // We can calculate the score now
//     var total = selected.length;
//     var percent = score / total ;

//     // Update and show the score
//     // Instead of creating elements, we can also directly alter the inner HTML
//     var html = "<h1>";
//     if (percent>=0.7) {
//       html += "WELL DONE!";
//     } else if (percent>=0.4) {
//       html += "NOT BAD!";
//     } else {
//       html += "TRY HARDER!";
//     }
//     html += "</h1>";
//     html += "<div>You scored " + score + " out of " + total + ".</div>";
//     document.getElementById("quiz-wrap").innerHTML = html;
//   }
// };

// /* [INIT] */
// window.addEventListener("load", quiz.draw);
