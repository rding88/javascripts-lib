//const add = (a, b) => a + b;
//const mult = (a, b) => a * b;
//add(2, mult(3, 5));

const users = [
    { name: "Jeff", age: 14 },
    { name: "Jack", age: 18 }, 
    { name: "Milady", age: 22 },
]
//const filter = (cb, arr) => arr.filter(cb);
//const map = (cb, arr) => arr.map(cb);
  
//map(u => u.name, filter(u => u.age >= 18, users)); //["Jack", "Milady"]

const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);
const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);

compose(
  map(u => u.name),
  filter(u => u.age >= 18)
)(users) //["Jack", "Milady"]

const reduce = cb => arr => arr.reduce(cb); //Just currify the reduce function

const mapWords = map(() => 1);
const reduceWords = reduce((acc, curr) => acc += curr)(0);

compose(reduceWords, mapWords)(['foo', 'bar', 'baz']); //3

//const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg),args);
