var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};
//if _.storage.length > (0.75  * limit), make new hashtable with 2x limit, rehash
// if storage < (.25 * limit), halve


HashTable.prototype.size = function() {
  var storageLen = 0
  for (var i = 0; i < this._limit; i++) {
    var bucket = this._storage.get(i);
    if (bucket !== [] && bucket !== undefined) {
      storageLen += bucket.length;
    }
  }
  return storageLen;

}
HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);

  if (!this._storage.get(i)) {
    //console.log(this._storage[i]);
    this._storage.set(i, []);
  }
  //this._storage[i].push([key,value]);
  var oldBucket = this._storage.get(i);
  oldBucket.push([key,value]);
  //this._storage.set(i, [key,value]);

  //console.log(storageLen, (0.75 * this._limit));
  storageLen = this.size();
  if (storageLen >= (0.75  * this._limit)) {
    this._limit *= 2;
    this.rehash(this._limit/2);
  }


};

HashTable.prototype.rehash = function(oldsize) {
  // make a new storage array with new limit
  var newStorage = makeLimitedArray(this._limit);
  var oldStorage = this._storage;
  var bucket, key, index, newBucket, value;
  // for each bucket in the old storage array:
  for (var i = 0; i < oldsize; i++) {
    bucket = oldStorage.get(i);

    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        key = bucket[j][0];
        value = bucket[j][1];

        index = getIndexBelowMaxForKey(key, this._limit);

        if (!newStorage.get(index)) {
          newStorage.set(index, []);
        }

        newBucket = newStorage.get(index);
        newBucket.push([key,value]);
      }
    }
  }

  this._storage = newStorage;
    // for each item in the bucket:
      // recalculate the hash and add to new storage
}

HashTable.prototype.retrieve = function(key){
  //console.log(key);
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  //console.log(JSON.stringify(bucket));
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
  var bucket = this._storage.get(i);
  //console.log(JSON.stringify(bucket));
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

  var storageLen = this.size();
  if (storageLen < (0.25 * this._limit)) {
    this._limit /= 2;
    this.rehash(this._limit*2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
