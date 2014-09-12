var makeBinarySearchTree = function(value){
  var newTree = Object.create(makeBinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

makeBinarySearchTree.prototype = {
  insert: function(value) {
    function traverse (tree) {
      if (tree.value < value) {
        if (!tree.right) {
          tree.right = makeBinarySearchTree(value);
        } else {
          traverse(tree.right);
        }
      } else if (tree.value > value) {
        if (!tree.left) {
          tree.left = makeBinarySearchTree(value);
        } else {
          traverse(tree.left);
        }
      } else {
        return;
      }
    }
    traverse(this);
  },
  breadthFirstLog: function() {

  },

  rebalance: function(tree) {
    // Create a new tree
    // Pick a node to be top of the new tree
    var nodes = [];
    this.depthFirstLog(function(value) {
      nodes.push[value];
    });
    nodes.sort();
    console.log(nodes);
    // Add all old nodes to the new tree
  },

  minDepth: function(tree) {

  },

  maxDepth: function(tree) {

  },

  contains: function(target) {
    function traverse (tree) {
      if (tree.value === target) {
        return true;
      }
      if (tree.value < target) {
        if (tree.right === null) {
          return false;
        } else {
          return traverse(tree.right);
        }
      } else if (tree.value > target) {
        if (tree.left === null) {
          return false;
        } else {
          return traverse(tree.left);
        }
      }
    }
    return traverse(this);
  },
  depthFirstLog: function(callback) {
    function traverse(tree) {
      callback(tree.value);
      if (tree.right) {
        traverse(tree.right);
      }
      if (tree.left) {
        traverse(tree.left);
      }
    }
    traverse(this);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
