var rls=require("readline-sync")
var ch=require('chalk')
var score=0;var alpha=["a","b","c","d"];
console.log(ch.white.bold("Hello,Welcome to Quiz.Choose appropriate answer and try to pass each level.Good luck:)"))
console.log("\n")

var name=rls.question("What's your name:");
console.log("Good Luck!"+name)
console.log("\n")
var highscore=[
  {
    name:"ABC",
    score:"18"
  },
  {
    name:"XYZ",
    score:"16"
  }
]
first={
  question:"1.What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
  answer:"b",
  options:["2005", "2008", "2010", "2012"]
}
second={
  question: "2.What is the name of Thor’s hammer?",
  answer: "a",
  options: ["Mjolnir", "vanir", "aesir", "norn"]
}
third={
  question: "3.What is Captain America’s shield made of?",
  answer: "c",
  options: ["adamantium", "promethium", "vibranium", "carbonadium"]
}
fourth={
  question: "4.What is the name of the little boy Tony befriends while stranded in the Iron Man 3?",
  answer: "b",
  options: ["Harry", "Henry", "Holden", "Harley"]
}
fifth={
  question: "5.Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
  answer: "b",
  options: ["H.O.M.E.R", "J.A.R.V.I.S", "A.L.F.R.E.D", "M.A.R.V.I.N"]
}
sixth={
  question: "6.What is the real name of the Black Panther?",
  answer: "a",
  options: ["TChalla", "Mbaku", "NJadaka", "Njobu"]
}
seven={
  question:"7.What song plays at the beginning of the first Iron Man movie?",
  answer:'a',
  options:['Back In Black by AC/DC','Iron Man by Black Sabbath','Stairway to Heaven" by Led Zeppelin','Ordinary World" by Duran Duran']
}
eight={
  question:"8.What is Hawkeye's real name?",
  answer:'c',
  options:['Bart Clinton','Cole Philson','Clint Barton','Phil Coulson']
}
nine={
  question:"9.What is Loki's title?",
  answer:'a',
  options:['God of Mischief','God of Pranks','God of Tricks','God of Evil']
}
ten={
  question:"10.Who is the original owner of the Reality Stone?",
  answer:'b',
  options:['The Asgardians','The Dark Elves','The Humans','The Collector']
}
question(first)
question(second)
question(third)
question(fourth)
function question(obj)
{
    console.log(ch.black.bgYellow.inverse(obj.question));
    for(var i=0;i<obj.options.length;i++)
        console.log(ch.blue(alpha[i])+"."+obj.options[i]);     
    var ans=rls.question("Choose option:");
    if(ans==obj.answer)
    {
      console.log(ch.green.inverse("You are right!!"));
      score+=2;
    }
    else
      console.log(ch.red.bold("Oops!You are wrong!!"));
      console.log("Your score is:"+score);
      console.log("\n")
}
if(score>=6)
{
    console.log(ch.green.bold("Congrates!You reached to Level 2:)"))
    console.log("\n")
    question(fifth),
    question(sixth),
    question(seven)
}
if(score>=10)
{
    console.log(ch.green.bold("Congrates!You reached to Level 3:)"))
    console.log("\n")
    question(eight),
    question(nine),
    question(ten)
}
console.log(ch.magenta.bold("Thank you for playing!!"));
console.log(ch.magenta.bold('Your final score is:'+score))


console.log("High Scores:")
console.log("******************")
for(var i=0;i<highscore.length;i++)
{
  var current=highscore[i]
  if(score>current.score)
  {
    highscore.push({name:name,score:score})
  }
  console.log("Name:   "+current.name),
  console.log("Score:   "+current.score)
}