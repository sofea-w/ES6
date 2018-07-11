//parameters

//default parameters
//instead of
function addTwoNumbers(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}

//alternative 
function addTwoNumbers(x=0, y=0){
    return x+y;
}

//rest parameters - instead of expanding an array into parameters, it collects parameters and turns them into an array.
//instead of 
function logArguments() {
    for (var i=0; i<arguments.length; i++) {
        console.log(arguments[i]);
    }
}

//alternative
function logArguments(...args){
    for (let arg of args) {
        console.log(arg);
    }
}

//named parameters - uses options object pattern
//instead of: 
function initializeCanvas (options){
    var height = options.height || 600;
    var width = options.width || 400;
    var lineStroke = options.lineStroke || 'black';
}

//alternative
function initializeCanvas(
    { height=600, width=400, lineStroke='black'}) {
        console.log(height, width, lineStroke);
    }

    //alternative2 - to make the entire value optional, can do so by destructuring an empty object
function intializeCanvas(
    { height=600, width=400, lineStroke='black'} = {}) {
        console.log(height, width, lineStroke);
    }





//spread operator - allows an expression to be expanded in places where multiple elements/variables/arguments are expected.
//example1 - find the max of values in an array by using the apply method on Math.max
//instead of
 Math.max.apply(null, [-1, 100, 9001, -32]); // result:9001
 //alternative
 Math.max(...[-1, 100, 9001, -32]); //result: 9001


 //example2
let args = [1, 2, 3];

function test(){
    console.log(args);
}
 //for the last line of code to print, instead of
test.apply(null, args);
//alternative
test(...args);

//exaple2.1
let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
    console.log(args1 + ',' + args2);
}
//test.apply(null, args);
test(...args1, ...args2);


 //example3 - concat array literals(strings)
 let cities = ['San Francisco', 'Los Angeles'];
 let places = ['Miami', ...cities, 'Chicago']; 

 console.log (places); // prints ['Miami', 'San Francisco', 'Los Angeles', 'Chicago']

