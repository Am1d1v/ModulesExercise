
//import sum from './moduleOne.mjs'

/*

import myName from "./moduleOne.mjs";

myName();

*/



/*

const res = sum(2, 10);

console.log(res); 

*/

/*

const firstArg = +prompt("First Arguement"),
      secondArg = +prompt("Second Arguement");

const res = sum(firstArg, secondArg);

console.log(res); 

*/

/*

import {
    one,
    two
} from './moduleOne.mjs'

console.log(one);
console.log(two);

*/

/*

import {
    one as oneRenamed,
    two
} from './moduleOne.mjs'

console.log(oneRenamed);
console.log(two);

*/

import {
    sum,
    mult
} from './moduleOne.mjs'

const sumResult = sum(10,6);
const multResult = mult(10, 10);

console.log(sumResult);
console.log(multResult);