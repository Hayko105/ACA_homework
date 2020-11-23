"use strict";

console.log('/******** Ex 1 ********/');

function separateNum ( arr ) {
    let oddNumArr = [],
        evenNumArr = [];
    
    for (let num of arr) {
        if(num % 2) {
            evenNumArr.push(num);
        }
        else {
            oddNumArr.push(num); 
        }
    }    
    
    return [evenNumArr, oddNumArr];
}

console.log(separateNum([45, 12, 3, 6, 17, 0]));
console.log(separateNum([1, 3, 5, 9]));

console.log('/******** Ex 2 ********/');

function filterRange (arr, a, b) {
    let res = [];
    
    for (let i in arr) {
        if (arr[i] > a && arr[i] < b) {
            res.push(arr[i]);
        }
    }
    
    return res;
}

console.log(filterRange([1, 10, 20, 30], 9, 23));
console.log(filterRange([100, 200, 300], 9, 23));
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15));

console.log('/******** Ex 3 ********/');

const frameworks = [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" }
];

function findById (arr, num) {
    let find;
    
    for (let i of arr) {
        find = i.id === num ? find = i : find = 'No Data';        
    }
    
    return find;
}

console.log(findById(frameworks, 3))
console.log(findById(frameworks, 13))


console.log('/******** Ex 4 ********/');

const arr = ['Godfather', 'Whiplash', 'Social Network'];
const arr1 = ['Manchester City', 'Liverpool'];

function generate( arr ) {
    
    return arr.map((el, i) => (
        {
            title: el,
            idx: i
        }
    ));
    
}

console.log(generate(arr));
console.log(generate(arr1));


console.log('/******** Ex 5 ********/');

const ex5Arr1 = ['Godfather', 'Game of thrones', 'Social Network'];
const ex5Arr2 = ['Manchester City', 'Milan', 'Marseille'];
const ex5Arr3 = ['Godfather', 'Whiplash', 'Social Network'];

function removeByLetter (array, symbol) {    
    return array.filter(el => el[0].toLocaleUpperCase() !== symbol.toLocaleUpperCase() );
}

console.log(removeByLetter(ex5Arr1, 'g'));
console.log(removeByLetter(ex5Arr2, 'm'));
console.log(removeByLetter(ex5Arr3, 'v'));


console.log('/******** Ex 6 ********/');

let lengthen = (str1, str2) => {
    let str1Len = str1.length,
        str2Len = str2.length,
        strRes = '';    
    
    if(str1Len > str2Len) {
        strRes = str2.repeat(str1Len/str2Len) + str2.substr(0, str1Len % str2Len);
    } else {
        strRes = str1.repeat(str2Len/str1Len) + str1.substr(0, str2Len % str1Len);
    }    
    
    return strRes;
}

console.log(lengthen("abcdefg", "ab"));
console.log(lengthen("ingenius", "forest"));
console.log(lengthen("clap", "skipping"));