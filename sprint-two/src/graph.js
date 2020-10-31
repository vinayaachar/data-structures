

// Instantiate a new graph
var Graph = function() {
  // //this.edgeCount = 0;
  // this.adjacencyLists = {};
  this.vertices = [];
  this.adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.vertices.push(node);
  this.adjacencyList[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      return true;
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  //iterate through the adjacency list of the node being deleted
  for (var i = 0; i < this.adjacencyList[node].length; i++) {
    console.log(this.adjacencyList[node][i]);
    console.log(_.indexOf(this.adjacencyList[node], this.adjacencyList[node][i]));
    this.adjacencyList[node].splice((_.indexOf(this.adjacencyList[node], this.adjacencyList[node][i])), 1);
  }

  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      this.vertices.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var fromNodeHasToNode = false;
  var toNodeHasFromNode = false;
  var toNodeAdjacencyArray = this.adjacencyList[toNode];
  var fromNodeAdjacencyArray = this.adjacencyList[fromNode];

  for (var i = 0; i < toNodeAdjacencyArray.length; i++) {
    if (toNodeAdjacencyArray[i] === fromNode) {
      toNodeHasFromNode = true;
      break;
    }
  }

  for (var i = 0; i < fromNodeAdjacencyArray.length; i++) {
    if (fromNodeAdjacencyArray[i] === toNode) {
      fromNodeHasToNode = true;
      break;
    }
  }

  if (fromNodeHasToNode && toNodeHasFromNode) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.adjacencyList[fromNode] = this.adjacencyList[fromNode].concat(toNode);
  this.adjacencyList[toNode] = this.adjacencyList[toNode].concat(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var toNodeAdjacencyArray = this.adjacencyList[toNode];
  var fromNodeAdjacencyArray = this.adjacencyList[fromNode];

  for (var i = 0; i < toNodeAdjacencyArray.length; i++) {
    if (toNodeAdjacencyArray[i] === fromNode) {
      toNodeAdjacencyArray.splice(i, 1);
    }
  }

  for (var i = 0; i < fromNodeAdjacencyArray.length; i++) {
    if (fromNodeAdjacencyArray[i] === toNode) {
      fromNodeAdjacencyArray.splice(i, 1);
    }
  }


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.vertices, function(value) {
    //Object.keys(myObj)
    cb(value);
  });
};

Graph.prototype.numOfNeighbors = function(node) {
  return this.adjacencyList[node].length;
};



/*
 * Complexity: What is the time complexity of the above functions?
add node O(1)
contains O(n)
remove node O(n)
has edge O(n)
add edge O(1)
remove edge O(n)
for each node O(n)
number of neighbors O(1)

 */


