/****************************************
 * Variables and data types
 ***/
/*
console.log('Hello World !!!');

var firstName = 'Praveen';

console.log(firstName);


var lastName = 'm';
var age = 38;

var fullAge = true;

var job;

var years$month;

var boolean = 4.5;

// values
console.log(firstName, lastName, age, fullAge, job, boolean);

//type 
console.log(typeof(firstName), typeof(lastName), typeof(age),
                typeof(fullAge), typeof(job));

*/

 /****************************************
 * Variable Declaration and Type Coercion
 ***/
/*
var firstName = 'Butter';
var age = 21;
var lastName = 'Fly';

console.log(typeof(firstName) , typeof(age) );

console.log(firstName + ' ' + age);

console.log( typeof(firstName + ' ' + age) );

var job, isMarried; 

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + 
                '. Is he married ? ' + isMarried);

*/

 /*********************************************
 * Variable mutation - change value of variable 
 ***/              
/*age = 'twenty one';
job = 'driver'

var lastName = prompt('what is his last name?');

console.log(firstName + ' ' + lastName + ' is a ' + age + ' year(s) old ' + job + 
                '. Is he married ? ' + isMarried);

*/

 /*********************************************
 * Basic Operators 
 ***/   
/*
var num1, num2, add, sub, mul, div;

num1 = 25;
num2 = 5;

// Math
console.log('Add:', num1 + num2);
console.log('Sub:', num1 - num2);
console.log('Mul:', num1 * num2);
console.log('Div:', num1 / num2);

//logical
var num1Gt = num1 > num2;
console.log(num1Gt, typeof num1Gt);
*/

 /*********************************************
 * Operator Precedence
 ***/   

var res = 3 + 4 * 5;

console.log(res);

//calculate average - using grouping operator

var num1 = 10;
var num2 = 20;

var avg = (num1 + num2) / 2;

console.log('Average is: ', avg);


// Equality Operator to understand Associativity
var x, y;

x = y = 5;

console.log(x, y);


// other operators 
    
// Multiplication Assignment Operator

var a = 50;
a *= 2;  // instead of a = a * 2

console.log(a); // expec out = 100


// Increment Operators

var d = 2;

d++;

console.log(d);
