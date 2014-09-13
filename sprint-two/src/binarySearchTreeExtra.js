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
    var count = 1;
    function traverse (tree) {

      if (tree.value < value) {
        count++;
        if (!tree.right) {
          tree.right = makeBinarySearchTree(value);
        } else {
          traverse(tree.right);
        }
      } else if (tree.value > value) {
        count++;
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

    if (count >= this.minDepth() * 2) {
      this.rebalance();
    }

  },

  rebalance: function() {
    var makeBalancedTree = function (arr) {
      if (arr.length === 0) {
        return null;
      }
      var index = Math.floor(arr.length/2);
      var newTree = makeBinarySearchTree(arr[index]);

      newTree.left = makeBalancedTree(arr.slice(0,index));
      newTree.right = makeBalancedTree(arr.slice(index+1));


      return newTree;
    }

    var arr = this.toSortedList();
    var index = Math.floor(arr.length/2);
    this.value = arr[index];
    this.left = makeBalancedTree(arr.slice(0,index));
    this.right = makeBalancedTree(arr.slice(index+1));
  },

  breadthFirstLog: function() {

  },
  toSortedList: function () {
    var list = []
    function sortNumber(a,b) {
      return a - b;
    }
    var recurse = function (tree) {
      list.push(tree.value);
      if (tree.left) {
        recurse(tree.left);
      }
      if (tree.right) {
        recurse(tree.right);
      }
    }
    recurse(this);
    list.sort(sortNumber);
    return list;
  },

  size: function() {
    var leftSize = this.left === null ? 0 : this.left.size();
    var rightSize = this.right === null ? 0 : this.right.size();
    return 1 + leftSize + rightSize;
  },

  minDepth: function(tree) {
    return Math.floor( Math.log(this.size()) / Math.log(2) ) + 1;
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
