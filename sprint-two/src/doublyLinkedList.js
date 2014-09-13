var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    // If no nodes: set head and tail to newNode
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.addToTail = function(value){
    var newNode = makeNode(value);

    // No nodes: set head and tail to newNode
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var headVal = list.head.value;
    //we need to check if its the only node
    // if so, save that value, delete the node, return the value

    list.head = list.head.next;

    if (list.head === null) {
      list.tail = null;
    } else {
      list.head.prev = null;
    }

    return headVal;
  };

  list.removeTail = function() {
    var tailVal = list.tail.value;
    list.tail = list.tail.prev;

    if (list.tail === null) {
      list.head = null;
    } else {
      list.tail.next = null;
    }

    return tailVal;
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

  list.prevContains = function(target){
    function traverse (node) {
      if (node.value === target) {
        return true;
      } else if (node.prev === null) {
        return false;
      } else {
        return traverse(node.prev);
      }
    }
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } else {
      return traverse(list.tail);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
