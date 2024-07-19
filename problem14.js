function checkSign(num1, num2, num3) {
    const positiveCount = [num1, num2, num3].filter(num => num > 0).length;
    const negativeCount = 3 - positiveCount;

    if (positiveCount === 3) {
        return "+++";
    } else if (positiveCount === 2) {
        return "++-";
    } else if (positiveCount === 1) {
        return "+--";
    } else {
        return "---";
    }
}

console.log(checkSign(2, 5, 7)); 
console.log(checkSign(8, -3, 4)); 

