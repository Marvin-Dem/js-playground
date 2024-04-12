export type CartEntry = {
    itemName: string;
    amount: number;
    price: number;
}
export const cartEntryList: CartEntry[] = [{
    itemName: "Pokemon Karten 1. Edition",
    amount: 5,
    price: 4.99,
},
{
    itemName: "Relaxo Puppe Modell Goschs Mum",
    amount: 2,
    price: 149.99
},
{
    itemName: "Pikachu Overall",
    amount: 3,
    price: 24.99,
}]
export function calcSum(warenkorb:CartEntry[]){
    let sum = 0;
    for(let entry of warenkorb){
    sum = sum + (entry.amount * entry.price); 
    }
    return sum*1.19;
}