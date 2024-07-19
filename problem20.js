function insert7(str) {
    let result = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
        result += str[i];

        if (count === 6) {
            result += '7';
            count = 0;
        }
    }

    return result;
}

// Example 
console.log(insert7("Hello World and Universe!")); // "Hello W7orld an7d Unive7rse!"
console.log(insert7("Full Stack Web Development")); // "Full St7ack Web7 Develo7pment"
