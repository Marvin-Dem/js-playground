const myFinalVar = "hello";
let myOverrideableVar;
myOverrideableVar = "world";
let myInteGer: number;
myInteGer = Math.sqrt(2);
type MyObject = {
    name: string;
    amount: number;
};
const myObject: MyObject = {
    name: "Johnny",
    amount: 23,
};
console.log("Hello world");

function logHelloWorld() {
    console.log("Hello world");
}
logHelloWorld();

function logHello(person: string) {
    console.log(`Hello ${person}`);
}
logHello("Marvin");

function tellAge(name: string, age: number) {
    return `${name}, der alte Sack, ist ${age} Jahre alt.`;
}
console.log(tellAge("Philipp", 30));

type Gender = "male" | "female";
function tellGender(gender: Gender) {
    if (gender === "male") {
        console.log("Your gender is male.");
    } else {
        console.log("Your Gender is female.");
    }
}
tellGender("male");
tellGender("female");

function isZero(nummer: number) {
    if (nummer === 0) {
        console.log("The number is 0.");
    } else {
        console.log("The number is not 0.");
    }
}
isZero(0);
isZero(12);

function compareNumbers(num1: number, num2: number) {
    if (num1 < num2) {
        console.log("num1 is smaller than num2.");
    } else if (num1 > num2) {
        console.log("num1 is bigger than num2.");
    } else {
        console.log("num1 and num2 are equal.");
    }
}
compareNumbers(3, 7);
compareNumbers(9, 5);
compareNumbers(4, 4);

function getBiggestNumber(numberArray: number[]) {
    if (numberArray.length === 0) {
        throw "Must pass at least one number!";
    }
    let bigNumber = 0;
    for (let num of numberArray) {
        if (num > bigNumber) {
            bigNumber = num;
        }
    }
    return bigNumber;
}
try {
    let biggestNumber = getBiggestNumber([12, 69, 13425, 88]);
    console.log(`The biggest number is ${biggestNumber}.`);
    getBiggestNumber([]);
} catch (error) {
    console.error(error);
}

type Post = {
    title: string;
    description: string;
};
const posts: Post[] = [
    { title: "First post", description: "Short Description." },
    { title: "Second Post", description: "This is the longest description." },
    { title: "Third Post", description: "Longer Description." },
];
function longestDescription(posts: Post[]) {
    let longestDescription = posts[0];
    for (let post of posts) {
        if (post.description.length > longestDescription.description.length) {
            longestDescription = post;
        }
    }
    return longestDescription;
}
const post = longestDescription(posts);
console.log(
    `The post "${post.title}" has the longest description, which is saying: "${post.description}."`
);
