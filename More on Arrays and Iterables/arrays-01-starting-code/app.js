const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const yetYetMoreNumbers = Array.from("Hi!");
console.log(yetYetMoreNumbers);

const hobbies = ["Sports", "Cooking"];
hobbies[1] = "Coding";
hobbies[5] = "Reading";
console.log(hobbies);

// 0
// :
// "Sports"
// 1
// :
// "Coding"
// 5
// :
// "Reading"

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
