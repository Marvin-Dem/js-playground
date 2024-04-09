//import {array} from "./array";
//const arr: number[] = [1, 2, 3];
//console.log (array(arr));

import type {Person} from "./arrayobject";
import {arrayobject} from "./arrayobject";
const arr: Person[] = [{
    name: "Alex",
    age: 28,
},
{
    name: "Jimmy",
    age: 30,
},
{
    name: "Sam",
    age: 34,
}];
console.log (arrayobject(arr));