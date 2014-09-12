var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var headVal = list.head.value;
    list.head = list.head.next;

    return headVal;
  };

  list.contains = function(target){
    function traverse (node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return traverse(node.next);
      }
    }
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } else {
      return traverse(list.head);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
