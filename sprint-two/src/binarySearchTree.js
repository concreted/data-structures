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
