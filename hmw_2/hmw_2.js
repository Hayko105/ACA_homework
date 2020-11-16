"use strict";

console.log('/******** Ex 1 ********/');

let compareArgs = (arr, num) => {
    let newArr = [];
    
    for(let el of arr) {
        if(el > num) {
            newArr.push(el);
        }        
    }
    
    return newArr.length > 0 ? newArr : 'Such values do not exist.';
}

console.log(compareArgs([10, 25, 16, -5, 30, 15, 24], 16));
console.log(compareArgs([1, 1, 2, -3, 0, 8, 4, 0], 9));


console.log('/******** Ex 2 ********/');
let findEvenNum = (a, b) => {
    let res = [];
    
    for (let i = a; i <= b; i++){            
        let isEven = true;
        
        for (let j of i.toString().split('')) {
            if (j % 2 !== 0){
                isEven = false;
                break;
            }  
        }
        
        if (isEven) {
            res.push(i);
        }
    }
    
    return res.length > 0 ? res : 'Such numbers does not exist.';
}

console.log(findEvenNum(19, 42));
console.log(findEvenNum(99, 199));


console.log('/******** Ex 3 ********/');
let findeIndex = (arr) => {
    for (let i = 1; i < arr.length; i++) {
         if(arr[i] < arr[i-1]){
            return i;
         }            
    }
    
    return -1;
}

console.log(findeIndex([2, 12, 15, 48, 64]));
console.log(findeIndex([-9, -4, -4, 3, 12, 4, 5]));


console.log('/******** Ex 4 ********/');
let largestElement = (arr) => {
    let maxProd = 0;
    
    for (let i = 0; i < arr.length-1; i++) {
        let prod = arr[i] * arr[i+1]; 
        
        if (prod > maxProd ) {
            maxProd = prod;
        }
    }
    
    return maxProd;
}

console.log(largestElement([2, 5, 10, 20, 5]));

console.log('/******** Ex 5 ********/');
let countNums = (arr) => {
    let minNum = arr[0],
        maxNum = arr[0],
        count = 0;
    
    for (let el of arr) {
        
        if (el < minNum) {
            minNum = el;
        }
        if (el > maxNum){
            maxNum = el;
        }
        
    }
    
    for (let i = minNum; i < maxNum; i++) {
        if (arr.indexOf(i) === -1){
            count++;
        }
    }
    
    return count;
}

console.log(countNums([4, 1, 3, 10, 20, 7, 15]));

console.log('/******** Ex 6 ********/');
let getSumArr = (arr) => {
    
    let res = [];        
    
    for (let i of arr) {
        let sum = 0;
        
        for (let j of i) {
            sum += j;            
        }
        
        res.push(sum);
    }
    
    return res;
}

console.log(getSumArr([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(getSumArr([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]));
console.log(getSumArr([[1], [2], [3], [4]]));

console.log('/******** Ex 7 ********/');
let sumOddNum = (arr) => {
    let newArr = [];
    
    for (let el of arr){
        if (el % 2 === 0) {
            continue;
        }
        
        newArr.push(el);
    }
    
    for (let i in newArr) {
        newArr[i] = newArr[i] * newArr.length;
    }
    
    return newArr;
}

console.log(sumOddNum([5, 4, 78, 0, -3, 7]));
console.log(sumOddNum([2, 4, 6, 88]));
console.log(sumOddNum([[]]));