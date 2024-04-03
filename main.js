let wochentag = 3;

function firsttry(weekdayIndex) {
    let weekdayName;
    if (weekdayIndex === 1) {
        weekdayName = "Montag";
    } else if (weekdayIndex === 2) {
        weekdayName = "Dienstag";
    } else if (weekdayIndex === 3) {
        weekdayName = "Mittwoch";
    } else if (weekdayIndex === 4) {
        weekdayName = "Donnerstag";
    } else if (weekdayIndex === 5) {
        weekdayName = "Freitag";
    } else if (weekdayIndex === 6) {
        weekdayName = "Samstag";
    } else if (weekdayIndex === 7) {
        weekdayName = "Sonntag";
    } else {
        throw "Falscher Wert"
    } 
    return `Der ${weekdayIndex}. Tag ist der ${weekdayName}`;
}
try {
    let result = firsttry(wochentag)
    console.log(result);
} catch (error) {
    console.error(error);
}