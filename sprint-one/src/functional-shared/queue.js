var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}


  };
  //var storage = {};
  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },
  dequeue: function() {
    var temp = this.storage[0];
    var emptyObj = {};
    delete this.storage[0];
    for (var key in this.storage) {
      emptyObj[key-1] = this.storage[key];
    }
    this.storage = emptyObj;
    return temp;
  },
  size: function() {
    console.log(this.storage);
    return Object.keys(this.storage).length;
  }
};



