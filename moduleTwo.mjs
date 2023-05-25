
import sum from './moduleOne.mjs'

/*

import myName from "./moduleOne.mjs";

myName();

*/



/*

const res = sum(2, 10);

console.log(res); 

*/

const firstArg = +prompt("First Arguement"),
      secondArg = +prompt("Second Arguement");

const res = sum(firstArg, secondArg);

console.log(res); 
