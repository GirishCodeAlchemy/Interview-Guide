// ********* 1. Spread syntax **********

// Spread operator used in array literals
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // Combining arrays
console.log(array2); // Output: [1, 2, 3, 4, 5]

// Spread operator used in function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Output: 3 (spread the array elements as arguments)

// Spread operator used in object literals (ES2018+)
const obj1 = { foo: 'bar' };
const obj2 = { ...obj1, baz: 'qux' }; // Merging objects
console.log(obj2); // Output: { foo: 'bar', baz: 'qux' }


// 2. ********** Rest parameter **********

// Using rest parameter with spread operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// 3. ********** Destructuring **********

const numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
