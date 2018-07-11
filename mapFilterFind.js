//map, Filter, Find

//Map - to transform elements in an array.
//emaple1
//map helps to modify the elements in the array without explicitly looping through it. 
let foo = [2,4,6,8,10];
let bar = foo.map(val => val += 1); // every value in foo is increased by 1 and stored in a new array called bar.

//examle2
//instead of
var map = new Object();
map[key1] = 'value1';
map[key2] = 'value2';

//alternative
let map = new Map();
map.set('name', 'Soph');
map.get('name'); //Soph
map.hasOwnProperty('name'); //true

//map is not limited to just using strings
//using any type as a key will not be type-cast to a string
let map = new Map ([
    ['name', 'Soph'],
    [true, 'false'],
    [1, 'one'],
    [{}, 'object'],
    [function () {}, 'function']
]);

for (let key of map.keys()) {
    console.log(typeof key); //string, boolean, number, object, function
}

//_______________________________________________________________________________________

//Filter - to select a subset of multiple elements from an array.
let words = ["Hello", "This", "Is", "A", "Test Of Array.Filter"];

// * This will result in a new array (filteredWords) that has the values from words with a length more than 4.
let filteredWords = words.filter(word => word.length > 4);

console.log(filteredWords);//["Hello", "Test Of Array.Filter"];
//________________________________________________________________________________________

//Find - to select a single element from an array.
let numbers = [5, 12, 8, 130, 44];

// * matches will be equal to 12 as that is the first number that is more than 10 in the array.
let matches = numbers.find(number => number > 10);

console.log(matches); // 12, 130, 44