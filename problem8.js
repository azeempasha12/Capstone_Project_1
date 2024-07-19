function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');
    const titleCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return titleCaseWords.join(' ');
}

console.log(titleCase("dream big , work hard and stay focused")); 
console.log(titleCase("be yourself , everyone is already taken")); 

