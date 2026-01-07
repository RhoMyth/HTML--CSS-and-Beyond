console.log("For Loop");
let a = 1;
for (let i = 0; i < 60; i++) {
    console.log(a + i);
}
let obj = {
    name: "Romy",
    Work: "Unemployed",
    Age: 22,
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);




}
for (const c of "Romy") {
    console.log(c);
    
}

// let i =3;
// while9i<7){
//     console.log(i); 
//     i++;
// } While Loop
 

// DO Loop:

// let i = 4;
// do{
//     console.log(i);
//     i++;
// } while(i<10);