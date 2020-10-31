var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = undefined;
  newBinaryTree.right = undefined;

  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};


var binaryTreeMethods = {};


binaryTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var insertNode = function (currentNode) {
    if (currentNode.value > newNode.value && currentNode.left === undefined) {
      currentNode.left = newNode;
    } else if (currentNode.value > newNode.value) {
      insertNode(currentNode.left);
    } else if (currentNode.value < newNode.value && currentNode.right === undefined) {
      currentNode.right = newNode;
    } else if (currentNode.value < newNode.value) {
      insertNode(currentNode.right);
    }
  };
  insertNode(this);
};

binaryTreeMethods.contains = function (value) {
  var doesContain = false;
  var containsNodeRecursion = function (currentNode) {
    if (currentNode.value === value) {
      doesContain = true;
    } else if (currentNode.value > value && currentNode.left !== undefined) {
      containsNodeRecursion(currentNode.left);
    } else if (currentNode.value < value && currentNode.right !== undefined) {
      containsNodeRecursion(currentNode.right);
    }
  };
  containsNodeRecursion(this);
  return doesContain;
};

binaryTreeMethods.depthFirstLog = function (cb) {
  console.log(cb);
  var depthFirstRecurse = function (currentNode) {
    // if (currentNode.value !== undefined) {
    //   cb(currentNode.value);
    // }
    cb(currentNode.value);

    if (currentNode.left !== undefined) {
      depthFirstRecurse(currentNode.left);
    }

    if (currentNode.right !== undefined) {
      depthFirstRecurse(currentNode.right);
    }
  };
  depthFirstRecurse(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
