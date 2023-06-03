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