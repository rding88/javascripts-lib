var HTMLChanger = (function() {
    var contents = 'contents'
  
    var changeHTML = function() {
      var element = document.getElementById('attribute-to-change');
      element.innerHTML = contents;
    }
  
    return {
      callChangeHTML: function() {
        changeHTML();
        console.log(contents);
      }
    };
  
  })();
  
  HTMLChanger.callChangeHTML();       // Outputs: 'contents'
  console.log(HTMLChanger.contents);  // undefined

  var Exposer = (function() {
    var privateVariable = 10;
  
    var privateMethod = function() {
      console.log('Inside a private method!');
      privateVariable++;
    }
  
    var methodToExpose = function() {
      console.log('This is a method I want to expose!');
    }
  
    var otherMethodIWantToExpose = function() {
      privateMethod();
    }
  
    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
  })();
  
  Exposer.first();        // Output: This is a method I want to expose!
  Exposer.second();       // Output: Inside a private method!
  Exposer.methodToExpose; // undefined

  var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
  }
  
  TeslaModelS.prototype = {
    go: function() {
      // Rotate wheels
    },
    stop: function() {
      // Apply brake pads
    }
  }

  var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
  }
  
  TeslaModelS.prototype = function() {
  
    var go = function() {
      // Rotate wheels
    };
  
    var stop = function() {
      // Apply brake pads
    };
  
    return {
      pressBrakePedal: stop,
      pressGasPedal: go
    }
  
  }();

  