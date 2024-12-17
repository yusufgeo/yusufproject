(string)
let text = "Hello Baku!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
(array)
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

let colors = ["red", "green"];
colors.unshift("blue");
console.log(colors);
colors.shift();
console.log(colors);

let animals = ["horse", "dog", "jaguar"];
console.log(animals.indexOf("jaguar"));
console.log(animals.includes("dragon"));

(array iterations)
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));

let numbers = [1, 2, 3];
let squares = numbers.map(num => num ** 2);
console.log(squares);

let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num < 4);
console.log(evens);
