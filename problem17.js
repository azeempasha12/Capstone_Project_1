function findMove(s) {
    const states = [];
    const n = s.length;

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            const newState = s.substring(0, i) + '--' + s.substring(i + 2);
            states.push(newState);}}

    return states;}


console.log(findMove("++++"));  
console.log(findMove("++-++")); 
