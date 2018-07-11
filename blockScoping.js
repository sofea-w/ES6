var a =1; 

function (){
  var b = 2; 
}

console.log(b); //b undefined, bcs its variable is local to the function


//function scoping then block scoping
var a = 1;

if (true) {
  var b = 2;
}
console.log(b); //2, bcs b is being hoisted 

//let
var a = 1;

if (true) {
  let b = 2;
}
console.log(b); //b is undefined, bcs let defines b restricted to only within the if statement block 

//const
//const is the same as let in that it's block scope
//const cannot be overwritten
const foo = 1; 

foo = 4; //an error will occur, as const variable has already been assigned 