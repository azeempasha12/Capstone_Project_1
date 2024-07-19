function countOccurrences(str, char) {
    const charRegx = new RegExp(char, 'g');
    const matches = str.match(charRegx);
    
    return matches ? matches.length : 0;
}

console.log(countOccurrences("hello world", "l")); // output 3
console.log(countOccurrences("Elephant", "E"));   // output 1

