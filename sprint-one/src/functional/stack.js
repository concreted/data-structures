var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = function() {
    var len = 0;

    for (var k in storage) {
      len++;
    }

    return len;

  }

  // Implement the methods below
  someInstance.push = function(value){
    storage[size()] = value;

  };

  someInstance.pop = function(){
    var currentSize = size();
    var temp = storage[currentSize-1];
    delete storage[currentSize-1];
    return temp;
  };

  someInstance.size = function(){
    return size();
  };

  return someInstance;
};
