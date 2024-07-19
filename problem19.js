function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];

    for (const num of set1) {
        if (set2.has(num)) {
            intersection.push(num);
        }
    }

    return intersection;
}


console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70])); 

