const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function calcSum(num1: number, num2: number) {
//     let sum = 0;
//     sum = num1 + num2;
//     return sum;
// }

const calcSum = (num1: number, num2: number) => {
    const sum = num1 + num2;
    return sum;
};

// for (let num of array) {
//     console.log(num);
// }

array.forEach((num) => console.log(num));

const newArray = () => {
    const newArr: number[] = [];
    for (let num of array) {
        const double = num * 2;
        newArr.push(double);
    }
    return newArr;
    // console.log(newArr);
};
// newArray();

const map1 = array.map((num) => num * 2);
console.log(map1);

const evenNumbers = () => {
    const evenArr: number[] = [];
    for (let num of array) {
        if (num % 2 === 0) {
            evenArr.push(num);
        }
    }
    return evenArr;
};
// console.log(evenNumbers());

const filterResult = array.filter((num) => num % 2 === 0);
console.log(filterResult);
