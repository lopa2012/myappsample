'use strict';

let user = {
    name: 'George',
    age: 21
};
user['likes birds'] = true;
console.log(user['likes birds']);

let key = 'likes hummingbird';
user[key] = true;
console.log(user[key]);

let key2 = prompt('What do you want to know about the user?', 'name');
alert('The user\s name is'+user[key]);
console.log('The user\s name is'+user[key]);

console.log('Computed Properties');
let fruit = prompt('Which fruit to buy?','apple');
let bag = {
    [fruit]: 5,
};
console.log(bag.apple);

/* Property names Limitations */
//But for an object property, there’s no such restriction:
console.log('--------Property names Limitations----------');
let obj2 = {
    for: 1,
    let: 2,
    return: 3,
};
console.log(obj2.for+obj2.let+obj2.return);

let obj3 = {
    0: 'test'
};
console.log(obj3[0]);
console.log(obj3['0']);

/* Property existence test, “in” operator */
console.log('------Property existence test, “in” operator----------');
let user3 = {};
console.log(user3.noSuchProperty === undefined);

let user4 = {name: 'George', age: 29};
console.log('age' in user4);
console.log('name' in user4);

let user5 = {age: 30};
let key3 = 'age';
console.log(key in user5);


let obj4 = {
    test: undefined
};
console.log(obj4.test);
console.log('test' in obj4);


/* The “for…in” loop */
console.log('-------------The “for…in” loop------------');
let user6 = {
    name: 'John',
    age: 30,
    isAdmin: true
};
for(let key in user6)
{
    console.log(key);
    console.log(user6[key]);
}

/* Ordered like an object */
//The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.
console.log('---------Ordered like an object-------------');
let codes = {
    50: 'Germany',
    41: 'Switzerland',
    47: 'Great Britain'
};
for(let code in codes)
{
    console.log(code); //41,47,50
}
//On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance
let user7 = {
    name: 'John',
    surname: 'Smith'
};
user7.age = 27;
for(let prop in user7)
{
    console.log(prop);
}

let codes2 = {
    '+50': 'Germany',
    '+41': 'Switzerland',
    '+47': 'Great Britain',
    '+7': 'USA'
};
for(let code in codes2)
{
    console.log(code);
}