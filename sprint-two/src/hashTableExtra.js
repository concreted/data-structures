var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket) {
    this._storage.set(i, []);
    bucket = this._storage.get(i);
  }

  for (var i = 0; i < bucket.length; i++) {
    if (key === bucket[i][0]) {
      bucket[i][1] = value;
      return;
    }
  }

  bucket.push([key, value]);
  this._size++;

  if (this._size >= (0.75  * this._limit)) {
    this.resize(this._limit * 2);
  }

};

HashTable.prototype.resize = function(newSize) {
  // make a new storage array with new limit

  var oldStorage = this._storage;
  var oldSize = this._limit;
  this._limit = newSize;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

  var bucket, key, index, newBucket, value;

  for (var i = 0; i < oldSize; i++) {
    bucket = oldStorage.get(i);

    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        key = bucket[j][0];
        value = bucket[j][1];

        this.insert(key, value);
      }
    }
  }
}

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return null;
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
  var bucket = this._storage.get(i);
  var found = null;
  if (!bucket) {
    return null;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        this._size--;
        bucket.splice(i,1);
        found = tuple;
      }
    };
  }

  if (found) {
    if (this._size < (0.25 * this._limit)) {
      this.resize(this._limit/2);
    }
  }

  return found[1];

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
