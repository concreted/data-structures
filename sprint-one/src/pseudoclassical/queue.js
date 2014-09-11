var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype = {
  enqueue: function  (value) {
    this.storage[this.size()] = value;
  },
  dequeue: function () {
  var temp = this.storage[0];
  var newObj = {};
  delete this.storage[0];
  for (var k in this.storage) {
    newObj[k-1] = this.storage[k];
  }
  this.storage = newObj;
  return temp
  },
  size: function () {
  return Object.keys(this.storage).length;
  },
  constructor: Queue
}


