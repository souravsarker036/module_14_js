// ternary --> three parts
// condition ? do something when true : do something when false

// const age = 15;
// simple ternary
// age >= 20 ? console.log('vote dio') : console.log('tmi akhono baccha')

let price = 500;
const isLeader = false;
// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price)

// price = isLeader === true ? 0 : price + 100;
// console.log(price)

// if(isLeader === true){
//     if(price > 1000){
//         price = price /2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 1000;
// }
price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 100;

console.log(price)