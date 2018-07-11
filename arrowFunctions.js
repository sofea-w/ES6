//arrow functions

//instead of
var foo = function(a, b) {
    return a + b;
};

//alternative
var foo = (a, b) => {
    return a + b;
};

//single line arrow function makes code alot cleaner
var foo = (a, b) => a + b; 

//if function only has 1 arguemnt
do.something (a => a + 1); //order: 
do.something (a => a++);

[0, 1, 2].map(val => val++); //[1, 2, 3]

//Eliminating binding 
//original function
var module = {
    age: 21,
    foo: function(){
        console.log(this.age); //21
    }
};
module.foo();

//instead of binding
var module = {
    age: 21,
    foo: function(){
        setTimeout(function(){
            console.log(this.age);
        }.bind(this), 100)
    }
};
module.foo();

//alternative: arrow functions automatically bind this
var module = {
    age: 21,
    foo: function(){
        setTimeout(() => {
            console.log(this.age);
        }, 100)
    }
};
module.foo();

