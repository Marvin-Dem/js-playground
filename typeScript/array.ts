export function array (arr: number[]) { 
    let sum = 0;
    for (let zahl of arr) {
        sum = sum + zahl;
    }
    
    return sum;
}