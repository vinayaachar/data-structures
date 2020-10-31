var Tree = function(value) {
  var newTree = {};
  newTree.value = value || null;

  // your code here
  if (value === undefined) {
    newTree.size = 0;
  } else {
    newTree.size = 1;
  }



  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value, parentValue) {
  var newChild = Tree(value);
  parentValue = parentValue || this.value;
  this.size++;

  if (this.value === parentValue) {
    this.children = this.children.concat(newChild);
    return;
  }

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].addChild(value, parentValue);
  }
};

treeMethods.contains = function(target) {
  if ( this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.sizeoftree = function () {
  return this.size;
};


/*
 * Complexity: What is the time complexity of the above functions?
 add child is O(n)
 contains is O(n)
 size is O(1)
 */


// {
//   value: 5,
//   traverse: [Function],
//   addChild: [Function],
//   contains: [Function],
//   children: [
//     {
//       value: 6,
//       traverse: [Function],
//       addChild: [Function],
//       contains: [Function],
//       children: []
//     },
//     {
//       value: 7,
//       traverse: [Function],
//       addChild: [Function],
//       contains: [Function],
//       children: []
//     }
//   ]
// }