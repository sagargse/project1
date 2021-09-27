var readlineSync = require("readline-sync")
var score=0;
var username = readlineSync.question("Hey! what is your name : ")
console.log("Hello! "+ username + " do you know SAGAR RAJ ? YES/NO ")
var answer = readlineSync.question(answer)
var answer1 = answer.toLowerCase()
console.log("-------------------")
if(answer1 === 'yes')
{
function knowsagar(que,ans){
var useranswer = readlineSync.question(que)
if(useranswer.toLowerCase() === ans){
console.log("Great! you are right");
score +=1;
}
else{
console.log("Ohh! Wrong"); 
}
console.log("Current Score = ",score);
console.log("-------------------")
}
}
else if (answer1 === 'no')
{
console.log("It's OK! Have a great day")
console.log("-------------------")
}
if(answer1 === "yes")
{
var knowme =[
  {que:"Where do he live? ",
  ans:"patna"},
  {que:"Sagar mostly vists macd/kfc? ",
  ans:"kfc"},
  {que:"Sagar likes Mountains/beaches? ",
  ans: "mountains"},
  {que:"Do you know sagar age(20/21)?",
  ans:"21"},
  {que:"Sagar likes Cricket/Football? ",
  ans:"cricket"},
  ];

for(var i=0;i<knowme.length;i++){
  var currentque = knowme[i];
  knowsagar(currentque.que,currentque.ans)
}
console.log("You scored : ", score )
console.log("Thanks! For Your Time See You Bye-Bye")
}


