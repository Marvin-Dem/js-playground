let wochentag = 9;

function firsttry(weekdayIndex) {

    if (weekdayIndex === 1) {
        return `Der ${weekdayIndex}. Tag ist der Montag`;
    } else if (weekdayIndex === 2) {
        return `Der ${weekdayIndex}. Tag ist der Dienstag`;
    } else if (weekdayIndex === 3) {
        return `Der ${weekdayIndex}. Tag ist der Mittwoch`;
    } else if (weekdayIndex === 4) {
        return `Der ${weekdayIndex}. Tag ist der Donnerstag`;
    } else if (weekdayIndex === 5) {
        return `Der ${weekdayIndex}. Tag ist der Freitag`;
    } else if (weekdayIndex === 6) {
        return `Der ${weekdayIndex}. Tag ist der Samstag`;
    } else if (weekdayIndex === 7) {
        return `Der ${weekdayIndex}. Tag ist der Sonntag`;
    } else {
        return "Falscher Wert"
    }
}
let result = firsttry(wochentag)
console.log(result);