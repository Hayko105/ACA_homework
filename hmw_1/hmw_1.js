"use strict";

/* 1. Given a number. Print “odd” if the number is odd and “even” if it’s even. */
console.log('/******** Ex 1 ********/');

let checkNumType = (n) => {
    n % 2 == 0 ? console.log('Even') : console.log('Odd');
};

checkNumType(131);
checkNumType(21);
checkNumType(12);


/* 2. Given five numbers as input. Calculate and print the average of the
numbers(without using arrays). */
console.log('/******** Ex 2 ********/');

let getAverageNum = (...args) => {
    let count = 0;
    
    for (let i = 0; i < args.length; i++) {
        count += args[i] / args.length; 
    }
    return Math.round(count * 100 + Number.EPSILON ) / 100;
};

console.log(getAverageNum(45, -12, 0, 3, -15));
console.log(getAverageNum(7, 52, -23, 9, -81));


/* 3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same. */
console.log('/******** Ex 3 ********/');

let setNumBegin = (n) => {
    let res, nStr;
    
    nStr = Math.abs(n).toString();
    res = nStr.slice(-1);
    
    if (res != 0) {
        nStr = res + nStr.slice(0, nStr.length-1);
        console.log(parseInt(nStr) * Math.sign(n));
    }
    else {
        console.log(n);
    }
};

setNumBegin(367);
setNumBegin(1002);
setNumBegin(250);
setNumBegin(8);


/* 4. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message. */
console.log('/******** Ex 4 ********/');

let checkMultiplyNum = (num, a, b, c) => {
    let resMsg, aDiv, bDiv, cDiv;    
    
    aDiv = num % a == 0;    
    bDiv = num % b == 0;
    cDiv = num % c == 0;
    
    if (!aDiv && !bDiv && !cDiv) {
        resMsg = `${num} is not multiple of ${a}, ${b} or ${c}`;
    } else if (aDiv && bDiv && !cDiv) {
        resMsg = `${num} is a multiple of ${a} and ${b}`;
    }
    else if (aDiv && !bDiv && cDiv) {
        resMsg = `${num} is a multiple of ${a} and ${c}`;
    }
    else if (!aDiv && bDiv && cDiv) {
        resMsg = `${num} is a multiple of ${b} and ${c}`;
    }
    else if (!aDiv && !bDiv && cDiv) {
        resMsg = `${num} is a multiple of ${c}`;
    }
    else if (aDiv && !bDiv && !cDiv) {
        resMsg = `${num} is a multiple of ${a}`;
    }
    else if (!aDiv && bDiv && !cDiv) {
        resMsg = `${num} is a multiple of ${b}`;
    }
    else {
        resMsg = `${num} is a multiple of ${a}, ${b} and ${c}`;
    }
    
    return resMsg;
    
} 

console.log(checkMultiplyNum(21, 3, 5, 7));
console.log(checkMultiplyNum(35, 3, 5, 7));
console.log(checkMultiplyNum(13, 3, 5, 7));
console.log(checkMultiplyNum(420, 3, 5, 7));
console.log(checkMultiplyNum(24, 3, 5, 7));


/* 5. Write a function to print X star pattern series using loop.*/
console.log('/******** Ex 5 ********/');
let drawX = (num, symb) => {
    let res = '',
        draw = '',
        empty = ' ';
    
    for (let i = 0; i < num; i++) {  
        
        for (let j = 0; j < num; j++) {  
            if (i == j || num - i - 1 == j) {
                draw += symb;
            } 
            else {
                draw += empty;
            }
        }
        
        draw += '\n';
    }
    
    return res += draw;
    
};

console.log(drawX(5, '*'));


/* 6. */
console.log('/******** Ex 6 ********/');
let calculator = (num1, op, num2) => {
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 == 0 ? `Can't divide by 0!` : num1 / num2;
        default:
            return `${op} is not supported`;
    }     
}

console.log(calculator(2, '+', 2));
console.log(calculator(2, '*', 2));
console.log(calculator(6, '-', 4));
console.log(calculator(10, '/', 2));


/* 7. */
console.log('/******** Ex 7 ********/');

let intWithinBounds = (n, l, u) => {
    
    if (!Number.isInteger(n)){
        return false;
    }
    
    return n > l && n < u;
};

console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(3.5, 1, 9));

/* 8. */
console.log('/******** Ex 8 ********/');

let hasKey = (obj, key) => obj.hasOwnProperty(key);

console.log(hasKey({ a: 44, b: 45, c: 46 }, 'd'));
console.log(hasKey({ craves: true, midnight: true, snack: true },
'morning'));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, 'not'));


/* 9. */
console.log('/******** Ex 9 ********/');

let add_suffix = suff => txt => txt + suff;

let add_ly = add_suffix('ly');

console.log(add_ly('hopeless'));
console.log(add_ly('total'));

let add_less = add_suffix('less');

console.log(add_less('fear'));
console.log(add_less('ruth'));

