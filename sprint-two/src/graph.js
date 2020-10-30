

// Instantiate a new graph
var Graph = function() {
  //this.edgeCount = 0;
  this.adjacencyLists = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.adjacencyLists[node]) {
    this.adjacencyLists[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.adjacencyLists[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // step 1.  Remove Edges as well associated with the deleted node
  var tempArray = this.adjacencyLists[node];
  for (var i = 0; i < tempArray.length; i++) {
    this.removeEdge(node, tempArray[i]);
  }
  // step2. Remove node
  delete this.adjacencyLists[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeHasToNode = false;
  var toNodeHasFromNode = false;
  var fromArrayList = this.adjacencyLists[fromNode];
  var toArrayList = this.adjacencyLists[toNode];

  if (!fromArrayList || !toArrayList) {
    return false;
  }


  for (var i = 0; i < fromArrayList.length; i++) {
    if (fromArrayList[i] === toNode) {
      fromNodeHasToNode = true;
      break;
    }
  }
  for (var i = 0; i < toArrayList.length; i++) {
    if (toArrayList[i] === fromNode) {
      toNodeHasFromNode = true;
      break;
    }
  }
  if (fromNodeHasToNode && toNodeHasFromNode) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.adjacencyLists[fromNode]) {
    this.addNode(fromNode);
  }
  if (!this.adjacencyLists[toNode]) {
    this.addNode(toNode);
  }

  this.adjacencyLists[fromNode].push(toNode);
  this.adjacencyLists[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // adjList[fromNode] = [1,2,3, toNode, 4, 5]
  // adjList[toNode] = [1,2,3, fromNode, 4, 5]
  //first for loop
  for (var i = 0; i < this.adjacencyLists[fromNode].length; i++) {
    if (this.adjacencyLists[fromNode][i] === toNode) {
      this.adjacencyLists[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.adjacencyLists[toNode].length; i++) {
    if (this.adjacencyLists[toNode][i] === fromNode) {
      this.adjacencyLists[toNode].splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.adjacencyLists, function(value, key) {
    cb(Number(key));
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


