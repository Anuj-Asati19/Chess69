var rls = require('readline-sync');
function lg(data){
  console.log(data);
}
lg("Welcome to the Mega Quiz of Chess 69");
lg("----------------------------------------------------------------------------------------------------------");
    lg("----------------------------------------------------------------------------------------------------------");var name = rls.question("Please enter your name? ");
lg("Welcome "+ name+ " to Chess 69.");
lg("It is the ultimate quiz for pervy chess fans.");
lg("----------------------------------------------------------------------------------------------------------");
    lg("----------------------------------------------------------------------------------------------------------");
var rules = rls.question("Press 1 to know the rules OR press anything other than 1 if you don't want to know the rules... ");
if(rules == 1){
  lg("Game Rules:-");
  lg("(a) There is no rule. Just Play.");
  lg("(b) Oh by the way, if you want to go to level 2, do 6 questions correctly out of 5 questions.")
}
lg("----------------------------------------------------------------------------------------------------------");
    lg("----------------------------------------------------------------------------------------------------------");
var score = 0;
function play(quest,answer,op1,op2,op3,op4){
  lg("Question: " +quest);
  lg("(1)" +op1);
  lg("(2)" +op2);
  lg("(3)" +op3);
  lg("(4)" +op4);
  var ans = rls.question("Please type in the option: ");
  if(ans == answer){
    lg('Correct Answe bro. You are Awesome like the scholars mate');
    score++;
    lg("Current Score: " + score);
    lg("----------------------------------------------------------------------------------------------------------");
    lg("----------------------------------------------------------------------------------------------------------");
  }
  else{
    lg('Oops Blunderrr.');
    lg("Current Score: " + score);
    lg("----------------------------------------------------------------------------------------------------------");
    lg("----------------------------------------------------------------------------------------------------------");
  }
}

questions = [q1 = {
  quest : "Who is the current World Champion..? ",
  answer : 3,
  op1 : 'Sagar Shah',
  op2 : 'Samay Raina',
  op3 : 'Mangesh',
  op4 : 'Magnus Carlsen',
},
            q2 = {
  quest : "How many squares are there in a chess board..? ",
  answer : 3,
  op1 : 'Jitne Chaaho Utne',
  op2 : '64',
  op3 : '69',
  op4 : 'Kale Aur Safed',
},
            q3 = {
  quest : "How many moves are there in first move..? ",
  answer : 1,
  op1 : '20',
  op2 :  '1e4',
  op3 : 'queens Gambit',
  op4 :  '69',
},
            q4 = {
  quest : "How many hairs are there in Sagar Shah's head..? ",
  answer : 4,
  op1 : 'Bohot Saare',
  op2 : 'Raju jitne',
  op3 : '69',
  op4:  'Sirf Amruta ko pata hai',
},
            q5 = {
  quest : "Anish ki kya Giri..? ",
  answer : 4,
  op1 : 'chai',
  op2:  'samosa',
  op3: 'stocks',
  op4: '💩',
}]

for(var i=0;i<questions.length;i++){
play(questions[i].quest,questions[i].answer,questions[i].op1,questions[i].op2,questions[i].op3,questions[i].op4);
}
lg("FINAL SCORE: " + score);
if(score == questions.length){
  lg("You are A pervert.... The greatest 69.");
  lg("----------------------------------------------------------------------------------------------------------");
  lg("----------------------------------------------------------------------------------------------------------");
}
lg("THANKYOU FOR PLAYING CHESS 69.");
lg("----------------------------------------------------------------------------------------------------------");
lg("----------------------------------------------------------------------------------------------------------");