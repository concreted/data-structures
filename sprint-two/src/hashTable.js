var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
  this._increaseThreshold = 0.5;
  this._decreaseThreshold = 0.25;
};

HashTable.prototype.loadFactor = function() {
  return this._count / this._limit;
};

HashTable.prototype.resize = function(newSize) {
  // detach storage and keep a reference
  var oldStorage = this._storage;

  // reset the limit and count
  this._count = 0;
  this._limit = newSize;
  this._storage = makeLimitedArray(this._limit);

  var that = this;

  // insert each item in oldStorage back into storage
  oldStorage.each(function(bucket, index, storage) {
    if (bucket !== undefined) {
      bucket.forEach(function(tuple) {
        that.insert(tuple[0], tuple[1]);
      });
    }
  });
};

// O(1) - constant time hash function, constant time creation of new bucket/pushing new k/v pair
HashTable.prototype.insert = function(k, v){
  // Check if the count causes the ratio of elements to exceed the increase threshold
  this._count++;
  if (this.loadFactor() > this._increaseThreshold) {
    this.resize(this._limit * 2);
  }

  // pass key through the hashing function
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get value in storage at the ith index
  var bucket = this._storage.get(index);

  // if bucket doesn't exist,
  // create a new bucket, place item inside, and return
  if (bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  // if bucket exists, loop over the whole bucket
  // and look for whether the key exists already.
  // if so, replace value for that key.
  // otherwise, push a new k/v pair to the bucket.
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      bucket[i][1] = v;
      return;
    }
  }

  bucket.push([k,v]);

};

// O(1) if no collisions
// O(n) in the length of collisions
HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket[i][1];
    }
  }

  return null;
};

// O(1) if no collisions
// O(n) in the length of collisions
HashTable.prototype.remove = function(k){
  this._count--;
  if (this.loadFactor() <= this._decreaseThreshold) {
    this.resize(this._limit / 2);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket.splice(i, 1);
    }
  }

  return null;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
