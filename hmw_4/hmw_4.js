"use strict";

// 1
console.log('/******** Ex 1 ********/');
let removeFirstElement = (arr, i = 0) => {
    
    if(arr.length <= 1){
        return [];
    }
    
    if (i === arr.length - 1){
        arr.pop();
        return arr;
    }
    
    arr[i] = arr[i + 1];
    
    return removeFirstElement(arr, i+1);
    
}

console.log(removeFirstElement([6, 78, 'n', 0, 1]));
console.log(removeFirstElement([5]));
console.log(removeFirstElement([]));


// 2
console.log('/******** Ex 2 ********/');

let changeKeyValue = (obj) => {
    let entries = Object.entries(obj),
        newObj = {};
    
    entries.forEach((el, i) => {  
        if(newObj.hasOwnProperty(el[1])) {
            if(!Array.isArray(newObj[el[1]])) {
               newObj[el[1]] = [newObj[el[1]]]
            }
            newObj[el[1]].push(el[0]);
        }
        else {
            newObj[el[1]] = el[0];
        }
    });
    
    return newObj;
}

console.log(changeKeyValue({ a: '1', b: '2'}));
console.log(changeKeyValue({ a: '1', b: '2', c: '2'}));
console.log(changeKeyValue({ a: '1', b: '2', c: '2', d: '2'}));


// 3
console.log('/******** Ex 3 ********/');

let listBook = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
];

let getBook = (books) => {    
    const findBooks = books.filter((book, i) => book.readStatus).sort(function(a, b) {
        if (a.percent > b.percent) {
            return -1;
        }
    });
        
    return findBooks;
}

console.log(getBook(listBook));

// 4
console.log('/******** Ex 4 ********/');

let recurseArrayEl = (arr, num) => {
    
    if(num === 0) {
        return arr;
    }
    
    if(num < 0) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
        return recurseArrayEl(arr, ++num);
    }
    else {
        let firstEl = arr.shift();
        arr.push(firstEl);
        return recurseArrayEl(arr, --num);
    } 
}

console.log(recurseArrayEl(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(recurseArrayEl(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

// 5
console.log('/******** Ex 5 ********/');

/// I did'nt understand the requirement

// 6
console.log('/******** Ex 6 ********/');

const permutation = (arr, num) => {
    //can't solve
} 
console.log(permutation([1, 2, 3, 4], 2));

// 7
console.log('/******** Ex 7 ********/');

let examObj = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
}

function Obj(object) {
    this.map = function(callBack){
        let entries = Object.entries(object),
            resObj = {};        
        
        entries.forEach((val, i) => {            
            resObj[val[0]] = callBack(val[1], val[0]);
        });
        
        return resObj;
    }
}

let obj = new Obj(examObj);

let myMap = obj.map(function(el, i){
    return i + el * 2;
});

console.log(myMap);



