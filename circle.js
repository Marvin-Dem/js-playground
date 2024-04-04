const radius = 8;
const pi = 3.14;
function circle(radius) {
    const circumference = (pi*2)*radius;
    return `Ein Kreis mit einem Radius von ${radius} hat einen Umfang von ${circumference}.`;
}
const result = circle(radius);
console.log (result);