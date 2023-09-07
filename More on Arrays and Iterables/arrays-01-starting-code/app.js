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
