export type CartEntry = {
    itemName: string;
    amount: number;
    price: number;
}
export function calcSum(cartEntryList: CartEntry[]) {
    let sum = 0;
    for(let entry of cartEntryList) {
        sum = sum + (entry.amount * entry.price); 
    }
    return sum*1.19;
}