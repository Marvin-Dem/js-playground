// import {array} from "./array";
// const arr: number[] = [1, 2, 3];
// console.log (array(arr));

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

// import {LogIn} from "./userlogin";
// import {LoginData} from"./userlogin";
// let logindata: LoginData = {
//     username: "",
//     password: "",
// }
// const logintry = LogIn({
//     username: "Gosch42",
//     password: "froxxundacidsinddiegeilsten",
// });
// if (logintry === true) {
//     console.log ("Login successful!");
// }
// else {
//    console.log ("Login failed!");
// }

// import {calcSum} from "./cartentry";
// import {CartEntry} from "./cartentry";

// const cartEntryList: CartEntry[] = [{
//     itemName: "Pokemon Karten 1. Edition",
//     amount: 5,
//     price: 4.99,
// },
// {
//     itemName: "Relaxo Puppe Modell Goschs Mum",
//     amount: 2,
//     price: 149.99
// },
// {
//     itemName: "Pikachu Overall",
//     amount: 3,
//     price: 24.99,
// }]
//console.log(`Der Gesamtpreis inkl. Mehrwertsteuer beträgt ${calcSum(cartEntryList)}.`);

// import {Pokemon} from "./poketypefilter";
// import {type} from "./poketypefilter";
// import {getPokemonByType} from "./poketypefilter";

// console.log (getPokemonByType("fire"));

import { rectangleArea, rectangleDiagonal, cuboidDiagonal } from "./algebra";
import type { Rectangle, Cuboid } from "./algebra";

const rectangles: Rectangle[] = [
    { width: 3, height: 3 },
    { width: 69, height: 69 },
    { width: 12, height: 12 },
];
const cuboids: Cuboid[] = [
    { width: 4, height: 9, depth: 3 },
    { width: 14, height: 69, depth: 30 },
    { width: 3, height: 5, depth: 14 },
];
try {
    const rectangleReturn = rectangleArea(rectangles);
    console.log(`The biggest rectangle has an area of ${rectangleReturn}cm^2.`);
} catch (error) {
    console.error(error);
}

try {
    const rectangleReturn = rectangleDiagonal(rectangles);
    console.log(
        `The longest diagonal of the given rectangles has a lenght of ${rectangleReturn}cm.`
    );
} catch (error) {
    console.error(error);
}

try {
    const cuboidReturn = cuboidDiagonal(cuboids);
    console.log(
        `The longest diagonal of the given cuboids has a lenght of ${cuboidReturn}cm.`
    );
} catch (error) {
    console.error(error);
}
