// #1. Passing Functions as Arguments:

function greet(name) {
    console.log('Hello, ' + name + '!');
}

function executeCallback(callback) {
    callback('John');
}

executeCallback(greet); // Pass the greet function as an argument


// #2 Returning Functions from Functions:
function createGreeter() {
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }
    return greet; // Return the greet function
}

const greeter = createGreeter();
greeter('Jane'); // Call the returned function


// 3. Assigning Functions to Variables:

const sayHello = function (name) {
    console.log('Hello, ' + name + '!');
};

sayHello('Alice'); // Call the function using the variable name

// 4. Storing Functions in Data Structures:

const functions = {
    greet: function (name) {
        console.log('Hello, ' + name + '!');
    }
};

functions.greet('Bob'); // Call the function stored in the object
