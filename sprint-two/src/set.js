// prototypal instantiation

var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = 1;
};

setPrototype.contains = function(item){
  return !!this._storage[item];
};

setPrototype.remove = function(item){
  this._storage[item] = 0;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
