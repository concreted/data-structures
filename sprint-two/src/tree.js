var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var flag = false;
  var traverse = function(tree) {
    if (tree.value === target) {
      flag = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        traverse(tree.children[i]);
      };
    }
  }
  traverse(this);
  return flag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
