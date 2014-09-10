var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {}


  };
  //var storage = {};
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var temp = this.storage[this.size()-1];
    delete this.storage[this.size()-1];
    return temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


// instance.size()
