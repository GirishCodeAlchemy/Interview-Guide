setTimeout(() => {
    console.log('This code will be executed after 2 seconds');
}, 2000);

setInterval(() => {
    console.log('This code will be executed every 3 seconds');
}, 3000);

const timeoutId = setTimeout(() => {
    console.log('This code will not be executed');
}, 2000);

clearTimeout(timeoutId); // Cancel the scheduled timeout

const intervalId = setInterval(() => {
    console.log('This code will not be executed repeatedly');
}, 3000);

clearInterval(intervalId); // Stop the interval execution


process.nextTick(() => {
    console.log('This code will be executed in the next iteration of the event loop');
});
