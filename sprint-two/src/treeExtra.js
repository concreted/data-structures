var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var flag = false;
  var traverse = function(tree) {
    if (tree.value === target) {
      flag = true;
    } else if (!tree.children.length) {
      //return false;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        //if (tree.children[i].value === 7) debugger;
        traverse(tree.children[i]);
      };
    }
  }
  traverse(this);
  return flag;
};

treeMethods.removeFromParent = function() {
  var parentTree = this.parent;
  this.parent = null;
  for (var i = 0; i < parentTree.children.length; i++) {
    if (parentTree.children[i].value === this.value) {
      return parentTree.children.splice(i, 1)[0];
    }
  };
};

treeMethods.traverse = function(hollaback) {
  // if value === undefined, ignore
  function recurse (tree) {
    if (tree.value !== undefined) {
      hollaback(tree.value);
    }
    for (var i = 0; i < tree.children.length; i++) {
      recurse(tree.children[i]);
    }
  }
  recurse(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
