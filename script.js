
var codeQuizData = [
  {
    //one
    question: "The function and var are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c",
  },
  {
    //two
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //three
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //four
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //five
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //six
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //seven
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //eight
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //nine
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
  {
    //ten
    question: "#",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    correct: "#",
  },
];
//-------------------------------------------------------------//
// setting the required variables for the quiz                 //
var quiz = document.getElementById("quiz");
var timer = document.querySelector("#timer"); 
var answerElements = document.querySelectorAll(".answer");
var questionElements = document.getElementById("question");
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
//-------------------------------------------------------------||