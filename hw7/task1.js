function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

// Приклад виклику
handleNum(10, handleEven, handleOdd); // number is even
handleNum(7, handleEven, handleOdd);  // number is odd
