var makeBinarySearchTree = function(value){
  var newTree = Object.create(makeBinarySearchTree.prototype);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

makeBinarySearchTree.prototype = {
  insert: function() {},
  contains: function() {},
  depthFirstLog: function() {}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
