//import {array} from "./array";
//const arr: number[] = [1, 2, 3];
//console.log (array(arr));

// import type {Person} from "./arrayobject";
// import {arrayobject} from "./arrayobject";
// const arr: Person[] = [{
//     name: "Alex",
//     age: 28,
// },
// {
//     name: "Jimmy",
//     age: 30,
// },
// {
//     name: "Sam",
//     age: 34,
// }];
// console.log (arrayobject(arr));


import {LogIn} from "./userlogin";
import {LoginData} from"./userlogin";
let logindata: LoginData = {
    username: "",
    password: "",
}
const logintry = LogIn({
    username: "Gosch42",
    password: "froxxundacidsinddiegeilsten",
});
if (logintry === true) {
    console.log ("Login successful!");
}
else {
   console.log ("Login failed!");
}