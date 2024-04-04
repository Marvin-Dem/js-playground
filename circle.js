let radius = 8;
function circle(radius) {
    let pi = 3.14;
    let circumference = (pi*2)*radius;
    return `Ein Kreis mit einem Radius von ${radius} hat einen Umfang von ${circumference}.`;
}
let result = circle(radius);
console.log (result);