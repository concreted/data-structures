// functional instantiation
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    // check if the current list is empty
    // if empty, set tail and head to new node
    if (list.head === null) {
        list.head = newNode;
        list.tail = newNode;
    }
    else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    // if there isn't a head, return null
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
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
