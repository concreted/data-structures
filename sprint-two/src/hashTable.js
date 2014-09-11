var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);

  if (!this._storage[i]) {
    this._storage[i] = [];
  }
  this._storage[i].push([key,value]);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[i];

  if (!bucket) {
    return null;
  } else if (bucket.length === 1) {
    return bucket[0][1];
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    };
    return null;
  }
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[i];
  if (!bucket) {
    return null;
  } else if (bucket.length === 1) {
    bucket.splice(0);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i,1);
      }
    };
    return null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
