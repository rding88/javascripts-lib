// using Generator
function* iteratorUsingGenerator(collection) {
    var nextIndex = 0;
  
    while (nextIndex < collection.length) {
      yield collection[nextIndex++];
    }
  }
  
  // usage
  const gen = iteratorUsingGenerator(['Hi', 'Hello', 'Bye']);
  
  console.log(gen.next().value); // 'Hi'
  console.log(gen.next().value); // 'Hello'
  console.log(gen.next().value); // 'Bye'