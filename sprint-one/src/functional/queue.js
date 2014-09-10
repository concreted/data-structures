var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;
  var size = function() {
    var len = 0;

    for (var k in storage) {
      len++;
    }

    return len;
  }

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;

  };

  someInstance.dequeue = function(){
    var temp = storage[first];
    delete storage[first];
    first++;
    return temp;
  };

  someInstance.size = function(){
    return size();
  };

  return someInstance;
};
