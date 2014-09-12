var Graph = function(){
  this.table = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if (Object.keys(this.table).length === 1) {
    var firstNode = Object.keys(this.table)[0];
  }

  this.table[newNode] = {};
  if (toNode) {
    this.table[newNode][toNode] = true;
    this.table[toNode][newNode] = true;
  }

  if (firstNode) {
    this.addEdge(newNode, firstNode);
  }
};

Graph.prototype.contains = function(node){
  if (this.table[node]) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  var connections = this.table[node];
  for (var n in connections) {
    delete this.table[n][node];
  }
  delete this.table[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.table[fromNode][toNode]) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.table[fromNode][toNode] = true;
  this.table[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from = this.table[fromNode];
  var to = this.table[toNode];

  delete from[toNode];
  delete to[fromNode];

  if (Object.keys(from).length === 0) {
    this.removeNode(fromNode);
  }
  if (Object.keys(to).length === 0) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


