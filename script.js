
var codeQuizData = [
  {
    //one
    question: "The function and var are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "#",
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

