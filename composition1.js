//const compose = (...funcs) => input => {
//    const finalOutput = funcs.reduceRight((prevOutput, nextFunc) => {
//      const nextOutput = nextFunc(prevOutput);
//      return nextOutput;
//    }, input);
  
//    return finalOutput;
//  };

const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);
const map = cb => arr => arr.map(cb);

const reduce = cb => arr => arr.reduce(cb); //Just currify the reduce function

const mapWords = map(() => 1);
const reduceWords = reduce((acc, curr) => acc += curr);

compose(reduceWords, mapWords)(['foo', 'bar', 'baz']); //3