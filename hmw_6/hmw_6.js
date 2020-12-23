"use strict";

// 1
console.log('/******** Ex 1 ********/');

const anagramWords = (word, arr) => {
    let wordSorted = sortWord(word),
        anagramArray = [];
    
    arr.forEach(el => {
        if (wordSorted === sortWord(el)){
            anagramArray.push(el);
        }        
    });
    
    return anagramArray;
} 

function sortWord (text) {
    return text.split('').sort().join('');
}

console.log(anagramWords("listen", ["enlists", "google", "inlets", "banana"]));
console.log(anagramWords("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]));


// 2
console.log('/******** Ex 2 ********/');

const allSubstring = (str, num) => {
    let result = [];
    
    for (let i = 0; i < str.length + 1 - num; i++) {
        result.push(str.substr(i, num));
    }
    
    return result;    
}

console.log(allSubstring('495215', 3));
console.log(allSubstring('abcdfghz', 7));


// 3
console.log('/******** Ex 3 ********/');

const shuffleArray = (arr) => {
    let count = arr.length;
    
    while(count > 0) {
        
        let index = Math.floor(Math.random() * count);
        
        count--;
        
        let temp = arr[count];
        arr[count] = arr[index];
        arr[index] = temp;
    }
    
    return arr;
} 

console.log(shuffleArray([1, 2, 4, 5, 7, 10]));
console.log(shuffleArray(['a', 'b', 'c', 'd', 'e', 'f']));


// 4
console.log('/******** Ex 4 ********/');

const concatMany = (...arg) => {
    return arg.reduce((acc, el) => {
        return acc.concat(el);
    }, []);
}

console.log(concatMany([1, 2], [2, 3], [3, 4]));
console.log(concatMany(['1', 'hello'], [[1, 2], 2]));


// 5
console.log('/******** Ex 5 ********/');
let testArr = [1, 2, 3, 4, 5];

//My Filter function
const filter = (arr, func) => {
    let filteredArr = [];
    
    for (let i = 0; i < arr.length; i++){
        if(func(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
}

let myFilter = filter(testArr, function(val){
    return val % 2 === 0;
});

console.log(myFilter);


//My Map function 
const map = (arr, func) => {
    let mapedArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        mapedArr[i] = func(arr[i], i);
    }
    
    return mapedArr;
}

let myMap = map(testArr, function(val, i){
    return val * 3;
});

console.log(myMap);


//My Foreach function 
const forEach = (arr, func) => {    
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i);
    }    
}

let myforEach = forEach(testArr, function(val, i){
    console.log(val, 'idx '+i);
});


//My Reduce function 
const reduce = (arr, func) => {
    let acc = 0;
    
    for (let i = 0; i < arr.length; i++){
        acc = func(acc, arr[i], i);
    }
    
    return acc;
}

let myReduce = reduce(testArr, function(acc, val, i){
    return acc += val;
});

console.log(myReduce);



// 6
console.log('/******** Ex 6 ********/');

const createUser = (name, pass, balance) => {
    
    const user = { name, pass, balance }
    
    function getName() {
        return user.name;
    }
    
    function deposit(amount) {
        return amount !== undefined ? user.balance = amount : user.balance = balance;
    }
    
    function resetPassword(newPassord, oldPassword) {
        return oldPassword === user.pass ? user.pass = newPassord : 'Access denied';        
    }
    
    function getBalance(password) {
        return password === user.pass ? user.balance : 'Access denied';
    }
    
    return {
        getName, 
        deposit,
        resetPassword,
        getBalance
    }
}

let {getName, deposit, resetPassword, getBalance} = createUser('John', 'itsnotyourbusiness', 100);

console.log(getName());
console.log(deposit(50));
console.log(resetPassword('newmypass', 'itsnotyourbusiness'));
console.log(getBalance('newmypass'));
