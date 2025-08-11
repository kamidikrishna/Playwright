let numbers = [1, 2, 4, 5, 6]; // array of numbers

numbers.forEach((n, index) => {
    if (index == 1) {
        console.log(n); 
    }
});

const evenNumbers = numbers.filter((n) => {
    console.log(n)
    return n % 2 !== 0;
});

const doubleNumbers = numbers.map((num) => {
    return num * 4;
})


console.log(numbers,doubleNumbers,evenNumbers);

// == 1 "1" // true
// === 1 "1" //false
// ==== 1 1 //true


// items
const phones = [
    {name: 'realme 10', price: 1000},
    {name: 'mi', price: 2000}
];

const prices = phones.map((p) => {
    return {name: p.name, price: p.price * 2};
    
})

console.log(prices);