var codeQuizData = [
  {
    //one
    question: "1. The function and var are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c",
  },
  {
    //two
    question: "2. Which of the following is not JavaScript Data Types?",
    a: "Undefined",
    b: "Number",
    c: "Boolean",
    d: "Float",
    correct: "d",
  },
  {
    //three
    question: "3. Which company developed JavaScript?",
    a: "Netscape",
    b: "Bell Labs",
    c: "Sun Microsystems",
    d: "IBM",
    correct: "a",
  },
  {
    //four
    question: "4. Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<head>",
    c: "<meta>",
    d: "<style>",
    correct: "a",
  },
  {
    //five
    question: "5. which of the following are advantages of JavaScript?",
    a: "Less server interaction",
    b: "Increased interactivity",
    c: "Richer interfaces",
    d: "All of the above",
    correct: "d",
  },
  {
    //six
    question: "6. JavaScript ignores?",
    a: "spaces",
    b: "tabs",
    c: "newlines",
    d: "All of the above",
    correct: "d",
  },
  {
    //seven
    question: "7. JavaScript is designed for following purpose?",
    a: "to style HTML pages",
    b: "to execute Queries related to databases on a server",
    c: "to add interactivity to html pages",
    d: "All of the above",
    correct: "d",
  },
  {
    //eight
    question: "8. What is the default value of the asyc attribute?",
    a: "0",
    b: "1",
    c: "False",
    d: "True",
    correct: "d",
  },
  {
    //nine
    question: "9. Javascript is ideal to?",
    a: "make computations in HTML simpler",
    b: "minimize storage requirements on the web server",
    c: "increase the download time for the client",
    d: "none of the mentioned",
    correct: "b",
  },
  {
    //ten
    question: "10. What is the purpose of script loading?",
    a: "Load Scripts programmatically",
    b: "Load JavaScript files manually",
    c: "Load JavaScript files programmatically",
    d: "All of the mentioned",
    correct: "c",
  },
];
//-------------------------------------------------------------//
// setting the required variables for the quiz                 //
var quiz = document.getElementById("quiz");
var questionElements = document.getElementById("question");
var answerElements = document.querySelectorAll(".answer");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var submitBtn = document.getElementById("submit_Btn");
var flipMain = document.getElementById("flipMain");
var toHighScore = document.getElementById("highScoreTbl");

var currentQuiz = 0;
var score = 0;
var timer = 100;

document.getElementById("highBtn").onclick = function changeContent() {
  document.getElementById("highScoreTbl").style.display = "block";
  toHighScore.scrollIntoView();
  displayScore();
};

//----------------------------------------------------------------//
//when the cards flips the writing also flips backwards these transforms turn them back
document.getElementById("startQuiz").onclick = function changeContent() {
  document.getElementById("flipMain").style.transform = "rotatey(180deg)";
  document.getElementById("flipInner").style.transform = "rotatey(180deg)";
  document.getElementById("questionsQuiz").style.transform = "rotatey(180deg)";
  document.getElementById("results").style.transform = "rotatey(180deg)";
  document.getElementById("highScoreTbl").style.transform = "rotatey(180deg)";
  setTime();
};

//------------------------------------------------------------------------------//
//function for the timer, starts at 200 decreasing by 1, game over at 0         //
//at the start of the game this function makes sure certain elements are hidden //
// displays your score at the end                                               //
function setTime() {
  var timerinterval = setInterval(function () {
    document.getElementById("timer").innerHTML = timer;
    timer--;
    if (timer <= 0 || currentQuiz === codeQuizData.length) {
      clearInterval(timerinterval);
      quiz.style.display = "none";
      flipInner.style.display = "none";
      highScoreTbl.style.display = "block";
      document.getElementById(
        "timer"
      ).innerHTML = `You got ${score} / ${codeQuizData.length} questions
      correct with a finish time of ${timer} seconds  `;
    }
  }, 1000);
}
codeQuizLoad();
//----------------------------------------------------------------//
// initally the when function is called in get the quiz data -----//

function codeQuizLoad() {
  deselectAnswers();

  var currentQuizData = codeQuizData[currentQuiz];

  questionElements.innerText = currentQuizData.question;
  answerA.innerText = currentQuizData.a;
  answerB.innerText = currentQuizData.b;
  answerC.innerText = currentQuizData.c;
  answerD.innerText = currentQuizData.d;
}

//-------------------------------------------------------------||
//delselects all answers at the start of new quiz
function deselectAnswers() {
  answerElements.forEach((answerElements) => (answerElements.checked = false));
}
//-------------------------------------------------------------||
//looks to see which answer has been selected and stores it
function getSelected() {
  var answer;

  answerElements.forEach((answerElements) => {
    if (answerElements.checked) {
      answer = answerElements.id;
    }
  });
  return answer;
}
//---------------------------------------------------------------------------||
//submits the answer.  checks if answer is correct if it is adds to the score||
//after its checks the answer it also moves then moves to the next question or||
//checks the current quiz and if it has asked all questions goes back to start||
submitBtn.addEventListener("click", () => {
  var answer = getSelected();

  if (answer) {
    if (answer === codeQuizData[currentQuiz].correct) {
      score++;
    } else {
      timer = timer - 10;
    }
    currentQuiz++;

    if (currentQuiz < codeQuizData.length) {
      codeQuizLoad();
    } else {
      quiz.innerHTML = `<p> </p>`;
    }
  }
});

//---------------------------------------------------------------------//
//highscore / current score submit

var highScores = checkForStoredScores();

function checkForStoredScores() {
  // try get high scores from local storage
  var storedScores = localStorage.getItem("highScores");
  if (storedScores !== undefined) {
    //if something in local storage set the highscore to it
    return JSON.parse(storedScores);
  }
}

console.log("created", highScores);

submitScore.addEventListener("click", function (event) {
  event.preventDefault();

  var finalScore = {
    userName: playerName.value,
    score,
    timer,
  };
  saveHighscore(finalScore);
  displayScore();
});

function saveHighscore(finalScore) {
  // check to see if highscores is null
  if (highScores === null) {
    highScores = [];
  }

  highScores.push(finalScore);

  // inline function will sort array descending by score
  highScores = highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  if (highScores.length > 5) {
    highScores = highScores.splice(0, 5);
  }
  // save high scores back to local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  console.log(highScores);
}
/* displays the score in a newly created table */
function displayScore() {
  if (highScores === null)
    return;
  var tbody = document.getElementById("highScore");
  for (let i = 0; i < highScores.length; i++) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.textContent = `${highScores[i].userName} ${highScores[i].score} /10 Questions with ${highScores[i].timer} Seconds left.`;
    row.appendChild(cell);
    tbody.appendChild(row);
  }
}
/* clears the local storage and then reloads the page */
function deleteItems() {
  localStorage.clear();
  location.reload();
}
