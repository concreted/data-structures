var makeStack = function(){
    var someInstance = {};

  // Use an object with numeric keys to store values
    var storage = {};

    var last = -1;
    var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
      last += 1;
      storage[last] = value;
      size += 1;
  };

  someInstance.pop = function(){
      if (size === 0) {
	  return null;
      }
      var value = storage[last];
      delete storage[last];
      last -= 1;
      size -= 1;
      return value;
  };

  someInstance.size = function(){
      return size;
  };

  return someInstance;
};