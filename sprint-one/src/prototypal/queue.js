var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //


  var instance = Object.create(queueMethods);

  // add specific keys to object
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.size()] = value;
  },
  dequeue  : function(){
    var temp = this.storage[0];
    var obj = {};
    delete this.storage[0];
    for (var key in this.storage) {
      obj[key-1] = this.storage[key];
    }
    this.storage = obj;
    return temp;
  },
  size : function(){
    return Object.keys(this.storage).length;
  }
};
