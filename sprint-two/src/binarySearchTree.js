var makeBinarySearchTree = function(value){
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    var newNode = makeBinarySearchTree(value);
    (function traverse(node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        }
        else {
          traverse(node.left);
        }
      }
      else {
        if (node.right === null) {
          node.right = newNode;
        }
        else {
          traverse(node.right);
        }
      }
    })(this);
  };

  tree.contains = function(value) {
    var found = false;
    (function traverse(node) {
      if (node.value === value) {
        found = true;
      }
      else {
        if (node.left !== null)
          traverse(node.left);
        if (node.right !== null)
          traverse(node.right);
      }
    })(this);
    return found;
  };

  tree.depthFirstLog = function(callback) {
    (function traverse(node) {
      callback(node.value);
      if (node.left !== null)
        traverse(node.left);
      if (node.right !== null)
        traverse(node.right);
    })(this);
  };

  return tree;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
