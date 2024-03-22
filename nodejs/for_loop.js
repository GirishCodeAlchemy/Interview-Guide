// Traditional for loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of loop (for iterating over arrays or iterable objects):
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}

// for...in loop (for iterating over object properties):
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// for each loop (for iterating over arrays):
const array1 = [1, 2, 3, 4, 5];
array1.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});


// Map loop

const array2 = ['apple', 'orange', 'pineapple', 'banana', 'muskmelon'];
const newArray = array2.map((item, index) => {
    // Here, item represents each element of the array
    // and index represents the index of the current element
    
    // You can perform any operation on each element here
    // For example, let's convert each element to uppercase
    return item.toUpperCase();
});

console.log(newArray);
