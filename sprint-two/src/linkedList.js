var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  // list = {head: { value: 5, next: { value: 6, next: {value: 7}}}

  list.addToTail = function(value) {
    var newLink = Node(value);
    //list.tail = newLink;
    if (list.tail === null) {
      list.head = newLink;
      list.tail = newLink;
    } else {
      var tail = list.tail;
      tail.next = newLink;
      list.tail = newLink;
    }
    this.length++;
  };

  list.removeHead = function() {
    console.log('here');
    var headValue = list.head.value; // 5
    var currentNode = list.head; // { value: 5, next: { value: 6, next: {value: 7}}
    list.head = currentNode.next; // { value: 6, next: {value: 7}}

    return headValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
