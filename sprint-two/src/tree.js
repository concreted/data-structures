//functional shared

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var found = false;
  (function traverse(node) {
    if (node.value === target) {
      found = true;
    }
    else {
      node.children.forEach(traverse);
    }
  })(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
