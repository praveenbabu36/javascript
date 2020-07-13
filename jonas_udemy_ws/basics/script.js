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
/*
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

console.log(d);*/


 /*********************************************
 * Coding Challenge - 1
 * Compare body mass index of mark and john. 
 *  Print whether BMI of Mark is higher than John.
 *  BMI = Mass / Height ^ 2
 ***/   
/*
 var john_mass = 100;
 var john_height = 2.5;

 var mark_mass = 90;
 var mark_height = 2.2;

var john_bmi = john_mass / (john_height * john_height);
var mark_bmi = mark_mass / (mark_height * mark_height);

var bmiFlag = mark_bmi > john_bmi;

console.log('Is BMI of Mark greater than John: ', bmiFlag);
*/

 /*********************************************
 * If Else Statements  
 ****/
/*
var firstName = 'John';
var civilStatus = 'Single';

if(civilStatus === 'Married') { 
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is Single.');
}

// using a boolean
var isMarried = true;

if(isMarried) { 
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is Single.');
}
*/

 /*********************************************
 * Boolean Logic - If Else Statements  
 ****/
/*
var firstName = 'John';
var age = 20;

if( age < 13 ) {
    console.log(firstName + ' is a boy.' );
} else if(age >= 13 && age < 20 ) {
    console.log(firstName + ' is a teenager');
} else if(age >= 20 && age <= 30 ) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man')
}
*/

 /*********************************************
 * Ternary Operator and Switch Statements
 ****/
/*
 var firstName = 'John';
 var age = 19;

//ternary operator
var drink = age >= 18 ? 'Beer' : 'Juice';

console.log(firstName + ' drinks ' + drink );
*/

 /*********************************************
 * Switch Statements
 ****/
/*
var firstName = 'John';
var job = 'Teacher';

switch(job) {
    case 'Teacher'  : console.log(firstName + ' teaches how to code.');
                      break;

    case 'Driver'   : console.log(firstName + ' drives an uber in Chennai.');
                      break;

    case 'Designer' : console.log(firstName + ' designs beautiful websites.');
                      break;

    default         : console.log(firstName + ' does something else.');
}
*/

 /*********************************************
 * Truthy & Falsy
 ****/
// falsy :  0, '', null, undefined, NAN
// truthy : not falsy

/*
var height = '23';

if(height || height === 0 ) { // if true
    console.log('Variable height is defined.');
}else{
    console.log('Variable height has not been defined.');
}

if(height === '23') {
    console.log('The === operator does not do Type Coercion');
} else if(height == '23') {
    console.log('The == operator does Type Coercion');
} 
*/

 /*********************************************
 * Coding Challenge - 2
 *   Find who won the game through avg score.
 ****/
/*
var john_score = [57, 134, 105];
var mike_score = [97, 134, 105];

var john_avg  = 0;
var mike_avg = 0;

for(var i=0;i<john_score.length;i++){
    john_avg += john_score[i];
}

john_avg = john_avg / john_score.length;

for(var i=0;i<mike_score.length;i++){
    mike_avg += mike_score[i];
}

mike_avg = mike_avg / mike_score.length;

console.log("John Avg: ", john_avg, ". Mike Avg: ", mike_avg);

if(john_avg > mike_avg) {
    console.log("John won.");
} else if(john_avg == mike_avg) {
    console.log("Tie.");
} else {
    console.log("Mike Won.");
}


var mary_score = [97, 134, 105];
var mary_avg = 0;

for(var i=0;i<mary_score.length;i++){
    mary_avg += mary_score[i];
}
mary_avg = mary_avg / mary_score.length;

console.log("Mary Avg: ", mary_avg, ".");

if(john_avg == mike_avg || john_avg == mary_avg || mike_avg == mary_avg) {
    console.log("Tie.");
} else if( john_avg >= mike_avg ) {
    if(john_avg > mary_avg) {
        console.log("John won.");
    } else {
        console.log("Mary won.");
    }
} else if( mike_avg >= john_avg ) {
    if(mike_avg > mary_avg) {
        console.log("Mike won.");
    } else {
        console.log("Mary won.");
    }
}
*/
// end of coding challenge - 2

 /*********************************************
  * Functions
  ****/

 // Functon Declaration 
 //function whatDoYouDo(job, name) {}

 // Function as Expression
 /*
 var whatDoYouDo = function(job, name) {
     return name + ' is a ' + job;
 }

 console.log(whatDoYouDo('driver', 'ramesh'));
*/


/*********************************************
 * Arrays
 *********************************************/
/*
var names = ['John', 'Mark', 450, 'Mary'];
var years = new Array(1998, 1969, 1948);

console.log(names[1]);
console.log(names.length);

//mutate array
names[4] = 'Ben';
console.log(names);

//push - insert element at the end 
names.push('Red');
console.log(names);

//unshift - insert an element at the start
names.unshift("Cricket");
console.log(names);

//pop - remove last element
names.pop();
console.log(names);

//shift - remove element at the start
names.shift();
console.log(names);

// indexOf - find the position of element
console.log(names.indexOf(450));

console.log(names.indexOf('praveen'));
*/

/*********************************************
 * Objects and Properties
 *********************************************/

 // Create Object using Object Initializer 
 /*
var personObj = {
    
    name: 'praveen',
    birthYear: 1981,
    
    calcAge: function(current_year) {
        this.age = current_year - this.birthYear;
    }
}

console.log(personObj.name, 'born on', personObj.birthYear);
console.log(personObj)

personObj.calcAge(2020);
console.log(personObj);

*/

/*
// using Constructor - method1
var animalObj = new Object();
animalObj.name = 'Dog';
animalObj.age = 2;

console.log(animalObj);


// using Constructor - method2
function Flower(name, color) {
    this.name = name;
    this.color = color;
}

var lilly = new Flower('Lilly', 'White');
console.log(lilly);
*/

/*********************************************
 * Coding Challenge - Calculate BMI using Objects
 * 
 * Compare body mass index of mark and john. 
 *  Print whether BMI of Mark is higher than John.
 *  BMI = Mass / Height ^ 2
 *********************************************/

function Person(name, mass, height) {
    
    this.name = name;
    this.mass = mass;
    this.height = height;

    this.calcBMI = function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = new Person('John', 95, 2.5);
var mark = new Person('Mark', 105, 2.2);

var bmiFlag = mark.calcBMI() > john.calcBMI();

console.log(john, mark);

console.log('Is BMI of Mark greater than John: ', bmiFlag);
