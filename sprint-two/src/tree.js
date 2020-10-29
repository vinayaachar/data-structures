var Tree = function(value) {
  var newTree = {};
  newTree.value = value || null;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value, parentValue) {
  var newChild = Tree(value);
  parentValue = parentValue || this.value;

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


/*
 * Complexity: What is the time complexity of the above functions?
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