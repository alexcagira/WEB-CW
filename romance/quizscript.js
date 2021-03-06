var position = 0,
  quiz, quiz_status, question, audio, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  { //Question 1
  a: "Love Actually",
  b: "Titanic",
  c: "Romeo + Juliet",
  d: "Moulin Rouge",
  answer: "d",
  img: "https://film-grab.com/wp-content/uploads/2016/12/moulinrouge062.jpg"
  },

  { //Question 2
    a: "The fault in our stars",
    b: "The Notebook",
    c: "Her",
    d: "Me before you",
    answer: "a",
    img: "https://variety.com/wp-content/uploads/2014/05/fault-in-our-stars.jpg"
  },

  { //Question 3
    a: "Call me by your name",
    b: "La La Land",
    c: "The curious case of Benjamin Button",
    d: "P.S. I love you",
    answer: "b",
    img: "https://film-grab.com/wp-content/uploads/2019/03/lalal020.jpg"
  },

  { //Question 4
    question: "<h2>'Even the smallest person can change the course of the future.'</h2>",
    a: "Galadriel",
    b: "Gandalf",
    c: "Arwen",
    d: "Aragorn",
    answer: "a",
    audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

  },

  { //Question 5
    question: "<h2>'Even the smallest person can change the course of the future.'</h2>",
    a: "Galadriel",
    b: "Gandalf",
    c: "Arwen",
    d: "Aragorn",
    answer: "a",
    audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

  },

  { //Question 6
    question: "<h2>'Even the smallest person can change the course of the future.'</h2>",
    a: "Galadriel",
    b: "Gandalf",
    c: "Arwen",
    d: "Aragorn",
    answer: "a",
    img: "",
    audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

  },

  { //Question 7
    question: "<h2>'Even the smallest person can change the course of the future.'</h2>",
    a: "https://variety.com/wp-content/uploads/2014/05/fault-in-our-stars.jpg",
    b: "https://film-grab.com/wp-content/uploads/2019/03/lalal020.jpg",
    c: "Arwen",
    d: "Aragorn",
    answer: "a",
    audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

  },

  { //Question 8
    question: "<h2>'Even the smallest person can change the course of the future.'</h2>",
    a: "Galadriel",
    b: "Gandalf",
    c: "Arwen",
    d: "Aragorn",
    answer: "a",
    img: "",
    audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

  },

  { //Question 9
    question: "<h2>'Even the smallest person can change the course of the future.'</h2>",
    a: "Galadriel",
    b: "Gandalf",
    c: "Arwen",
    d: "Aragorn",
    answer: "a",
    img: "",
    audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

  }];


function get(x) {
  return document.getElementById(x);
}

function play() {
  audio = document.getElementById("audio");
  audio.play();
}

function renderQuestion() {
  quiz = get("quiz");
  if (position >= questions.length) {

    quiz.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";

    if(correct == 0){
      quiz.innerHTML += "<h2> YOU HAVE NO CINEMATIC CULTURE </h2>";
    } //if ZERO questions are correct
  
    if(correct >= 1 && correct >! 5){
      quiz.innerHTML += "<h2> YOU ARE AN CASUAL VIEWER </h2>";
    } //if ONE question is correct

    if(correct > 5 && correct >! 8){
      quiz.innerHTML += "<h2> YOU ARE AN AVERAGE VIEWER </h2>";
    } //if TWO questions are correct

    if(correct == 9){
      quiz.innerHTML += "<h2> YOU ARE A CINEMA LOVER </h2>";
    } //if THREE questions are correct

    get("quiz_status").innerHTML = "Quiz completed";
    //reset everything for the next quiz
    position = 0;
    correct = 0;

    quiz.innerHTML += "<button onclick='goHome()'>BACK HOME</button>";

    return false;
  }
  get("quiz_status").innerHTML = "Question " + (position + 1) + " of " + questions.length;

  question = questions[position].question;
  chA = questions[position].a;
  chB = questions[position].b;
  chC = questions[position].c;
  chD = questions[position].d;
  //Add local var to hold url
  img = questions[position].img;
  audio = questions[position].audio;

  quiz.innerHTML = "<h3></h3>";

  if(position <=2 ){
    quiz.innerHTML += "<h1>GUESS THE FRAME</h1>";
  //Add <img> element to DOM with source
    quiz.innerHTML += "<img class='pretty-image' src=\"" + img + "\"><br>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='a'> " + chA + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='b'> " + chB + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='c'> " + chC + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='d'> " + chD + "</label><br>";
  } 
  
  if(position >= 3 && position <= 5){
    quiz.innerHTML += "<h1>GUESS WHO SAID THE QUOTE</h1>";
    quiz.innerHTML += "<label><audio controls><source src=" + audio + " type='audio/mpeg'></audio></label>";
    quiz.innerHTML += "<h3>" + question + "</h3>"
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='a'> " + chA + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='b'> " + chB + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='c'> " + chC + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='d'> " + chD + "</label><br>";

  }

  if(position >= 6){
    quiz.innerHTML += "<h1>GUESS THE SOUNDTRACK</h1>";
    quiz.innerHTML += "<label><audio controls><source src=" + audio + " type='audio/mpeg'></audio></label></br>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='a'><img class='icons' src=" + chA + "></label>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img class='icons' src=" + chB + "></label>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img class='icons' src=" + chC + "></label>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img class='icons' src=" + chD + "></label><br>";
  }
  quiz.innerHTML += "<button onclick='showPrevious()'>&#8678 Question</button>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  quiz.innerHTML += "<button onclick='showNext()'>Question &#8680</button>";
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  if (choice == questions[position].answer) {
    correct++;
  }

  position++;

  renderQuestion();
}

//Show next question
function showNext() {
  position++;
  renderQuestion();
}
//Show previous question
function showPrevious() {
  position--;
  renderQuestion();
}

//Go back to the main page
function goHome(){
  document.location.href="/Users/alex/Desktop/Web Tech/WEB CW/quizselector.html";
}

window.addEventListener("load", renderQuestion);