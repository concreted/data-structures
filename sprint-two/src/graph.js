var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){


  // if the toNode is undefined and there's only one node,
  if (toNode === undefined) {
    if (Object.keys(this.nodes).length === 1) {
      toNode = Object.keys(this.nodes)[0];
    }
    else {
      this.nodes[newNode] = {};
      return;
    }
  }

  this.nodes[newNode] = {};

  this.addEdge(newNode, toNode);
};

Graph.prototype.contains = function(node){
  return this.nodes[node] !== undefined;
};

Graph.prototype.removeNode = function(node){
  var edges = Object.keys(this.nodes[node]);
  var that = this;
  edges.forEach(function(otherNode) {
    that.removeEdge(node, otherNode);
  });
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode][toNode] === 1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = 1;
  this.nodes[toNode][fromNode] = 1;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
  if (Object.keys(this.nodes[fromNode]).length === 0) {
    this.removeNode(fromNode);
  }
  if (Object.keys(this.nodes[toNode]).length === 0) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
