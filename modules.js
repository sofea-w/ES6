//Modules

//in a seperate file called myModule.js
module.exports.foo = function (){

};

module.exports.bar = function(){

};


//current file, instead of: 
var myModule = require("myModule"); //to import myModule.js file
var foo = myModule.foo;
var bar = myModule.bar;

//alternative
import myModule from "myModule"; //imports are placed at the top of a file. 
import {foo, bar} from "myModule"; //destructured to import the functions directly. 



//another way of exporting modules
//instead of
module.exports = function(){

}

//alternative recode with ES6
export default function(){

}




//or
export function foo(){

}

// or
export var foo = 3;
export function bar(){

}


//then imported as 
import {foo, bar } from "myModule";
//or
import { foo as foolish, bar } from "myModule";
console.log(foolish); //3
