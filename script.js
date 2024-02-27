let number1 = 5;
let number2 = 7;
console.log(number1 + number2);
let number3 = 7;
let number4 = 3;
console.log(number2 - number4);
let number5 = 2;
let number6 = 6;
console.log(number5 * number6);
let number7 = 7;
let number8 = 2;
console.log(number7 / number8);

// assignment operators
console.log(!(number7 == 5 && number8 ==6));
//logical operators
//and operator
let x1 = 5;
let y1 = 10;
console.log(x1 < 10 && y1 > 5); // Output: true
//or operator
let x2 = 5;
let y2 = 10;
console.log(x2 === 5 || y2 === 5); // Output: true
//not operator
let x3= 5;
console.log(!(x3 === 5)); // Output: false

//assignmentoperators
let x4 = 5;
console.log(!(x4 === 5)); 
let x5 = 5;
x5 += 3;
console.log(x5); 
let x6 = 10;
x6 -= 4;
console.log(x6); 
let x7 = 3;
x7 *= 2;
console.log(x7); 
let x8 = 10;
x8 /= 2;
console.log(x8); 
let x9 = 10;
x9 %= 3;
console.log(x9); 



//javascript functions
function run() {
console.log("running");
}
run();
function jog() {
    console.log("jogging");
}
jog();// calling the function

//if else statments

let count = 638;
if (count < 200) {
    console.log("Not okay to go");
}
else if (count < 300){
     console.log("can start");
}
else {
    console.log("okay to go");
}
//for loops 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
let number =0;
 while(number < 10){
    console.log("Hello world");
    number++;
 }
 //strings
 let fname = "Aishwarya";
 let lname = "janamanchi";
 console.log(fname + " " + lname );
 //stringmethods 10
 // lowercase
 let str11 = "Hello World";
console.log(str11.toLowerCase()); 
//uppercase
let str12 = "Hello World";
console.log(str12.toUpperCase());
 //charAt
 let str = "Hello";
console.log(str.charAt(0)); // Output: "H"
//concatination
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2));
let str3 = "Hello World";
console.log(str3.indexOf("World")); 
let str4 = "Hello World";
console.log(str4.slice(6)); 
let str5 = "Hello World";
console.log(str5.split(" ")); 
let str6 = "Hello World";
console.log(str6.replace("World", "Universe")); 
let str7 = "   Hello World   ";
console.log(str7.trim()); 
let str8 = "Hello World";
console.log(str8.substring(6));



 









