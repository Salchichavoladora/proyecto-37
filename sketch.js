var canvas, backgroundImage;
var question, contestant, quiz;
var title,input1,input2,button;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
