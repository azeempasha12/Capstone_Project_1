
function signOfProduct(nums) {
    let negativeCount = 0;

    for (const num of nums) {
        if (num === 0) {
            return 0;
        } else if (num < 0) {
            negativeCount++;
        }
    }

    return negativeCount % 2 === 0 ? 1 : -1;
}

console.log(signOfProduct([2, -3, 5, 4])); 
console.log(signOfProduct([1, 2, 0])); 
