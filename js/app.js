'use strict'

let n = prompt("Please enter your name","your name");
let gender =prompt("please enter your gender ","male,female");
let age =prompt("please enter your age ","23");
if (age <=0){
    alert("your age is incorrect!! ");
}
else{
    console.log("your age :"+age);
}

let conf=confirm("do you want to skip the welcoming message?");
console.log(conf);

if(gender=="male"){
    alert(" Welcome mr."+n);}
else if (gender=="female"){
    alert(" Welcome ms. "+n);}
else{
    alert(" Welcome "+n);
}


let ans =[];let rev=[];let temp=[];
function askQuestions() {
    let questions = ['Do you like JavaScript?', 'Do you like JavaScript?', 'Do you like JavaScript?'];
       for (let i = 0; i < questions.length; i++) {
      let answer = prompt(questions[i]);
      if (answer === 'Yes') {
        console.log('Yes');
      } else if (answer === 'No') {
        console.log('No');
      } else if(answer ==='yes' ||answer ==='no') {
        console.log('invalid');
      }
      ans.push(answer);
      temp.push(answer);
      rev.unshift(temp.pop());
    }
    
console.log(ans);
console.log(rev);

  }
  askQuestions();