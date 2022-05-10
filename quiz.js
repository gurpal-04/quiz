const quizdb=[{question: "JS stands for:",
a :"JavaScript",
b :"JoiningScript",
c :"Java School",
d :"JoinScript",
ans : "ans1"},
    {question: "Commonly used data types DO NOT include:",
a :"strings",
b :"booleans",
c :"alerts",
d :"numbers",
ans : "ans3"},
{question: "Which of the following is a coding language:",
a :"AppleScript",
b :"MangoScript",
c :"BananaScript",
d :"None of the Above",
ans : "ans1"},
{question: "CSS stands for:",
a :"Color Style Sheets",
b :"Colouring Style Sheets",
c :"Cascading Style Sheets",
d :"Children Style Sheets",
ans : "ans3"},
{question: "Which of the following is not a coding language:",
a :"Go",
b :"TypeScript",
c :"CoffeeScript",
d :"None of the Above",
ans : "ans4"}]


const answers = document.querySelectorAll(".options");

let i=0; 
let score=0;
const loadquestion = ()=> {
document.getElementById("question").innerHTML="Q"+(i+1)+" "+quizdb[i].question;
    document.getElementById("option1").innerHTML=quizdb[i].a;
    document.getElementById("option2").innerHTML=quizdb[i].b;
    document.getElementById("option3").innerHTML=quizdb[i].c;
    document.getElementById("option4").innerHTML=quizdb[i].d;
}
loadquestion();

function checked() {
    let ans;
    for (let j=0;j<answers.length;j++){
        if (answers[j].checked){
            ans= answers[j].id;
        }
    }return ans;
}
  
let j=0;

function nextques() {
    if (j%2===0 && timer>0){
    if (i<quizdb.length){
        const checkedAns = checked();
        if (checkedAns=== quizdb[i].ans){
        score+=1;
        document.getElementById("output").innerHTML="Correct";
        $("#output").css("color","green");
        }else{
            document.getElementById("output").innerHTML="Incorrect!";
            $("#output").css("color","red");
            timer-=10;
        }
        i++;
        document.getElementById("button").innerHTML="Next";
        
        
    }}else{
        if (i<quizdb.length && timer>0){
            loadquestion();
            document.getElementById("button").innerHTML="Submit";
            document.getElementById("output").innerHTML="";
        }else{
            $("#question").css("display","none");
            $(".options").css("display","none");
            $("#output").css("display","none");
            $("#button").css("display","none");

            document.getElementById("score").innerHTML="<br><b>You scored:</b> "+score+'<br><br> <button  class="button" onclick="location.reload();">Play Again</button>';
            document.getElementById("time").innerHTML= 00;
    }
    }j++;
}

let timer=50;
const interval = setInterval(fun,1000);

function fun(){
    if (timer<0){
        clearInterval(interval);
    }else{
    document.getElementById("time").innerHTML= timer--;
    }
}
