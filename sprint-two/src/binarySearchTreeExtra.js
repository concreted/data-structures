var makeBinarySearchTree = function(value){
  var newTree = Object.create(makeBinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.parent = null;
  return newTree;
};

makeBinarySearchTree.prototype = {
  insert: function(value) {


  },

  breadthFirstLog: function() {

  },

  rebalance: function(tree) {
    // Create a new tree
    // Pick a node to be top of the new tree

    // Add all old nodes to the new tree
  },

  minDepth: function(tree) {
    //return Math.pow(2, tree.nodes.length) - 1;
  },

  maxDepth: function(tree) {

  },

  contains: function(target) {

  },
  depthFirstLog: function(callback) {

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
