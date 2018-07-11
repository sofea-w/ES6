//*destructuring 
var foo = {
    bar: 1,
    baz: 2
};

//instead of
var bar = foo.bar;
var baz = foo.baz;

//alternative:
var { bar, baz } = foo;


///*destructuring can also be done with arrays  
var tenses = ["me", "you", "he"];

///instead of calling it 
document.getElementById("demo").innerHTML = tenses[1];

///alternative:
var { firstPerson, secondPerson, thirdPerson } = tenses;


//*destructuring is useful when dealing with multiple promises
 //istead of:
 Promise.all([promise1, promise2]).then(function (results) {
     var [ results1 ] = results;
 });

 //alternative
Promise.all([promise1, promise2]).then(function ([result1, result2])
{
    
});


///*destructuring object
var foo = 2;

var obj = {
    bar: 1,
    foo, // * If a variable within scope with the same name exists and you want to use its value, just leave out a value. If not, just assign a new value.
}


//*destructuring arguements

//instead of:
function calcBmi(weight, height, max, callback){
    var bmi = weight / Math.pow(height, 2);
    if (bmi > max) {
        console.log("overweight");
    }
    if (callback) {
        callback(bmi);
    }
}
calcBmi(weight, height, 25);
calcBmi(weight, height, null, function() {});

//alternative:
function calculateBMI({ weight, height, max = 25, callback })
{
  var bmi = weight / Math.pow(height, 2);

  if (callback)
  {
    callback(bmi);
  }
}
calcBmi(weight, height, 25);
calcBmi({weight, height, callback: function() {} });

