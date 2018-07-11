//classes

//instead of:
function Parent() {
    //const
}

Parent.prototype.foo = function() {}
Parent.prototype.bar = function() {}

//alternative using classes
class Parent {
    age = 34; 
    constructor() {

    }

    foo(){

    }

    bar(){

    }
}

var parent = new Parent();
parent.age();
parent.foo(); //Calling a function on an instance.


//example 2
class Parent {
    constructor() {

    }

    static foo(){

    }

    bar() {

    }
}

var parent = new Parent();
Parent.foo(); //// * Calling a static function on the class itself (Capital P - Parent).

//Inheritance 
class Child extends Parent
{
    constructor()
    {
        super() // calling parent constructor
    }

    baz(){

    }
}

var child = new Child();
child.baz();
child.bar(); //Inherited function from Parent class.




