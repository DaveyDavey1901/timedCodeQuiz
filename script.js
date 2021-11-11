
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
var timer = document.querySelector("#timer"); 
var questionElements = document.getElementById("question");
var answerElements = document.querySelectorAll(".answer");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var submitBtn = document.getElementById("submit_Btn");

var currentQuiz = 0;
var score = 0;
//----------------------------------------------------------------//
//when the cards flips the writing also flips backwards these transforms turn them back
document.getElementById("startQuiz").onclick = function changeContent() {
  document.getElementById("flipMain").style.transform = "rotatey(180deg)";
  document.getElementById("flipInner").style.transform = "rotatey(180deg)";
  document.getElementById("quizHeader").style.transform = "rotatey(180deg)";
  document.getElementById("results").style.transform = "rotatey(180deg)";
  document.getElementById("highScoreTable").style.transform = "rotatey(180deg)";
};
//----------------------------------------------------------------//
// initally the when function is called in get the quiz data -----//
codeQuizLoad();

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
