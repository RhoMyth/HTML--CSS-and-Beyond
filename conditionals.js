console.log("Welcome to JavaScript Programming!");


let age=5;
let grace=7;

console.log(age + grace);
console.log(age - grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);
if(age==18){
    console.log("You can Vote");
}
else if(age == 5){
    console.log("Too Small to Judge");

}
else if (age == 0){
    console.log("You're not born yet??");
}
else{
    console.log("You cannot Vote");
}


let a = 10;
let b = 20;
let c = a>b ? (a-b) : (b-a);
console.log(c);