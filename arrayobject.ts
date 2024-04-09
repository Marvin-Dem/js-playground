export type Person = {
    name: string;
    age: number;
}
export function arrayobject (arr: Person[]) {
    let oldestPerson: Person = {
        name: "",
        age: -1,
    };
    for (let person of arr) {
        if (person.age>oldestPerson.age){
            oldestPerson = person;
        }
    }
    return oldestPerson;
}