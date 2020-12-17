"use strict";

// 1
console.log('/******** Ex 1 ********/');

const isogram = (str) => {
    let s = str.toLowerCase().split('');
    
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i+1) > -1) return false;
    }
    return true;  
}

console.log(isogram('Machine'));
console.log(isogram('isogram'));
console.log(isogram('Area'));


// 2
console.log('/******** Ex 2 ********/');

const isOddDigit = (num) => {
    let digit = num % 10;

    if (digit % 2 == 0) {
        return false;
    }
        
    if (num >= 10) {
        let rest = Math.floor(num / 10);
        return isOddDigit(rest);
    }
    
    return true;
    
}

console.log(isOddDigit(4211133));
console.log(isOddDigit(7791));
console.log(isOddDigit(5));

// 3
console.log('/******** Ex 3 ********/');

const concatArrays = (arr) => {
    let resultArr = [];
    
    arr.forEach((el, i) => {
        
        if(Array.isArray(el)){ 
            //resultArr = resultArr.concat(concatArrays(el)); v 2
            resultArr.push(...concatArrays(el)); // v1
        }
        else {            
            resultArr.push(el);
        }        
    });
    
    return resultArr;
}

console.log(concatArrays([1, [3, 4, [1, 2]], 10]));
console.log(concatArrays([14, [1, [[[3, []]]], 1], 0]));


// 4
console.log('/******** Ex 4 ********/');

const calculateDigits = (sum) => {
    
    let digit = sum % 10;
    
    if (sum < 10) {
        return sum;
    }
    
    let rest = Math.floor(sum / 10);
    return calculateDigits(rest + digit);
    
}

console.log(calculateDigits(14));
console.log(calculateDigits(29));
console.log(calculateDigits(999999999999));


// 5
console.log('/******** Ex 5 ********/');

const binarySearch = (arr, num) => {
    const centerIdx = Math.floor(arr.length / 2);
    
    if (arr[centerIdx] === num) {
        return centerIdx;
    }    
    
    if (arr[centerIdx] < num) {
        return centerIdx + binarySearch(arr.slice(centerIdx, arr.length), num);
    }    
    
    return binarySearch(arr.slice(0, centerIdx), num); 
    
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// 6
console.log('/******** Ex 6 ********/');

const permutation = (arr, num) => {
    
} 

console.log(permutation([1, 2, 3, 4], 2));
console.log(permutation([1, 2, 3, 4], 3));

