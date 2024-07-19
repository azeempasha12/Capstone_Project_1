function findLongestWordLength(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(findLongestWordLength("Coading is Fun with fellow learners"))
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

