const userChosenKeyName = "level";

let person = {
    firstName: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    [userChosenKeyName]: "...",
    greet: function () {
        alert("Hi there");
    },
    1.5: "hello",
};

delete person.age;

console.log(person[userChosenKeyName]);
