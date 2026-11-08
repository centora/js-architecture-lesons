const array = [1, 2, 3, 4, 5];

array.length = 100;

console.log(array[array.length - 1]);
console.log(array.at(-1));