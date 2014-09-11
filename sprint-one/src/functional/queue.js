var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

    var last = 0;
    var first = 0;
    var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
      storage[last] = value;
      last += 1;
      size = last-first;
  };

  someInstance.dequeue = function(){
      if (size === 0) {
	  return null;
      }
      value = storage[first];
      delete storage[first];
      first += 1;
      size = last-first;
      return value;
  };

  someInstance.size = function(){
      return size;
  };

  return someInstance;
};
