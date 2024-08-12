// Sum number
function sum(a, b) {
    return a + b;
}

// Sum Array
function sumArray(array) {
    total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

// Find max
function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Find min
function findMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Find MIN MAX
function findMinMax(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return {
        min, max
    };
}

// Count letter
function countLetters(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            count += array[i].length;
        }
    }
    return count;
}

