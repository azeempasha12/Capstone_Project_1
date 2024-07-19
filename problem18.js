function swapConsecutiveCharacters(str) {
    let swappedString = '';

    for (let i = 0; i < str.length - 1; i += 2) {
        swappedString += str[i + 1] + str[i];
    }

    
    if (str.length % 2 !== 0) {
        swappedString += str[str.length - 1];
    }

    return swappedString;
}


console.log(swapConsecutiveCharacters("abcdef"));
console.log(swapConsecutiveCharacters("Almabetter"));  
