"use strict";

// 1
console.log('/******** Ex 1 ********/');

class Employee {
    
    constructor (id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
        this.workingDayInMonth = 20;
        this.hourSalary = 0;
    }
    
    get info (){
        return `My name is ${this.firstName} ${this.lastName}, i'm working in a position ${this.position} developer, my salary ${this.salary}$ per month, at a rate of ${this.hourSalary}$ per hour.`;
    }
    
    set info (value){
        let {id, firstName, lastName, position, salary, workingHours} = value;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }
    
    getFullName = () => {
        return `My name is ${this.firstName} ${this.lastName}, i'm working in a position ${this.position} developer.`;
    }
    
    getAnnularSalary = () => {
        if ( typeof this.salary === 'number' && typeof this.workingHours === 'number') {
            this.hourSalary = Math.round(this.salary / (this.workingHours * this.workingDayInMonth));

            return `${this.firstName}'s total salary per year is ${this.salary * 12}$, at a rate of ${this.hourSalary}$ per hour.`;
        } else {
            return `Invalid salary or working hours types!`;
        }
    }
    
    raiseSalary = (percent) => {
        const newSalary = this.salary += ((this.salary / 100) * percent);
        
        return `New salary ${newSalary}$ per month.`;
    }
    
}

const hayk = new Employee (1, 'Hayk', 'Tevanyan', 'Front-end', 2000, 8);

console.log(hayk.getFullName());
console.log(hayk.getAnnularSalary());
console.log(hayk.raiseSalary(20));

console.log('\nGetters & Setters');
console.log(hayk.info);
console.log(hayk.info = {
    id: 2,
    firstName: 'Hayk-2',
    lastName: 'Tevanyan-2',
    position: 'Front-end',
    salary: 3000,
    workingHours: 8
});
console.log(hayk.getFullName());
console.log(hayk.getAnnularSalary());
console.log(hayk.raiseSalary(10));



// 2
console.log('\n/******** Ex 2 ********/');

class Account { 
    
    constructor (id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    
    get info () {
        return `Id: ${this.id}, Name: ${this.name}, Balance: ${this.balance}`;
    }
    
    set info ({n, b}){
        this.name = n;
        this.balance = b;
    }

    credit = amount => this.balance += amount;

    debit = amount => {
        if (amount <= this.balance){
            this.balance -= amount; 
            return this.balance;
        }
        return `Amount exceeded balance.`;        
    }
    
    transferTo = (anotherAccount, amount) => {
        if (amount <= this.balance){
            this.balance -= amount; 
            anotherAccount.balance += amount;
            return anotherAccount.balance;
        }
        return `Amount exceeded balance.`; 
    }
    
    static identifyAccounts = (accountFirst, accountSecond) => {
        let msg = '';
        
        if(accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountSecond.id && accountFirst.balance === accountSecond.balance) {
            msg = `Accounts are identify`;
        } else {
            msg = `Accounts not identify`;
        }
        
        return msg;
    }
    
    toString () {
        return `Id: ${this.id}, Name: ${this.name}, Balance: ${this.balance}`;
    }
    
}

const user = new Account(10, 'Hayk', 4000);
const user2 = new Account(11, 'Mike', 2000);
const user3 = new Account(11, 'Mike', 2500);

console.log(user.info);
console.log(user.info = {n: 'John', b: 5500});
console.log(user.info);
console.log(user.credit(1000));
console.log(user.debit(5410));

console.log(user.transferTo(user2, 500));
console.log(Account.identifyAccounts(user2, user3));



// 3
console.log('\n/******** Ex 3 ********/');

class Person {
    
    constructor (firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    
    get info () {
        return `I'm ${this.firstName} ${this.lastName}, gender ${this.gender}, ${this.age} year old`;
    }
    
    set info ({f, l, g, a}){
        this.firstName = f;
        this.lastName = l;
        this.gender = g;
        this.age = a;
    }
    
    toString () {
        return `I'm ${this.firstName} ${this.lastName}, gender ${this.gender}, ${this.age} year old`;
    }
    
}

class Student extends Person {
    
    constructor (name, [pName, pGrade], year, fee) {
        super(name);
        this.progName = pName;
        this.progGrade = pGrade;
        this.year = year;
        this.fee = fee;
    }
    
    passExam = (programName, grade) => {
        return grade >= 50 && programName === this.progName ? ++this.year : `The grade of student ${grade}, must be more 50 ор program name does not match`;
    }
    
    toString () {
        return `Student ${this.firstName} to learn ${this.progName} in ${this.year} year, grade: ${this.progGrade} `;
    }
}

const haykTev = new Person('Hayk', 'Tevanyan', 'male', 33);
console.log(String(haykTev));
console.log(haykTev.info);
haykTev.info = {f: 'Mary', l: 'Jain', g: 'female', a: 30};
console.log(haykTev.info);

const haykStudent = new Student('Hayk', ['Javascript', 20], 2021, 50000);
console.log(String(haykStudent))
console.log(haykStudent.passExam('JS', 20));
console.log(haykStudent.passExam('Javascript', 51));

