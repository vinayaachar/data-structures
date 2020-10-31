

// Instantiate a new graph
var Graph = function() {
  // //this.edgeCount = 0;
  // this.adjacencyLists = {};
  this.vertices = [];
  this.adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if (!this.adjacencyLists[node]) {
  //   this.adjacencyLists[node] = [];
  // }


  this.vertices.push(node);
  this.adjacencyList[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if (this.adjacencyLists[node]) {
  //   return true;
  // }
  // return false;

  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      return true;
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // // step 1.  Remove Edges as well associated with the deleted node
  // var tempArray = this.adjacencyLists[node];
  // for (var i = 0; i < tempArray.length; i++) {
  //   this.removeEdge(node, tempArray[i]);
  // }
  // // step2. Remove node
  // delete this.adjacencyLists[node];

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
  // var fromNodeHasToNode = false;
  // var toNodeHasFromNode = false;
  // var fromArrayList = this.adjacencyLists[fromNode];
  // var toArrayList = this.adjacencyLists[toNode];

  // if (!fromArrayList || !toArrayList) {
  //   return false;
  // }


  // for (var i = 0; i < fromArrayList.length; i++) {
  //   if (fromArrayList[i] === toNode) {
  //     fromNodeHasToNode = true;
  //     break;
  //   }
  // }
  // for (var i = 0; i < toArrayList.length; i++) {
  //   if (toArrayList[i] === fromNode) {
  //     toNodeHasFromNode = true;
  //     break;
  //   }
  // }
  // if (fromNodeHasToNode && toNodeHasFromNode) {
  //   return true;
  // }
  // return false;



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
  // if (!this.adjacencyLists[fromNode]) {
  //   this.addNode(fromNode);
  // }
  // if (!this.adjacencyLists[toNode]) {
  //   this.addNode(toNode);
  // }

  // this.adjacencyLists[fromNode].push(toNode);
  // this.adjacencyLists[toNode].push(fromNode);

  this.adjacencyList[fromNode] = this.adjacencyList[fromNode].concat(toNode);
  this.adjacencyList[toNode] = this.adjacencyList[toNode].concat(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // // adjList[fromNode] = [1,2,3, toNode, 4, 5]
  // // adjList[toNode] = [1,2,3, fromNode, 4, 5]
  // //first for loop
  // for (var i = 0; i < this.adjacencyLists[fromNode].length; i++) {
  //   if (this.adjacencyLists[fromNode][i] === toNode) {
  //     this.adjacencyLists[fromNode].splice(i, 1);
  //   }
  // }
  // for (var i = 0; i < this.adjacencyLists[toNode].length; i++) {
  //   if (this.adjacencyLists[toNode][i] === fromNode) {
  //     this.adjacencyLists[toNode].splice(i, 1);
  //   }
  // }

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



/*
 * Complexity: What is the time complexity of the above functions?
 */


