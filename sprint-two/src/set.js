var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(this._limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  var bucket = this._storage[index];
  var containsItem = false;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] === item) {
      containsItem = true;
    }
  }

  if (!containsItem) {
    bucket.push(item);
  }
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  //var bucket = this._storage.get(index);
  var bucket = this._storage[index];
  console.log('this is the bucket below');
  console.log(bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  //var bucket = this._storage.get(index);
  var bucket = this._storage[index];
  console.log('this is the bucket below');
  console.log(bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] === item) {
      bucket.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// old set, before refactoring to use hash tables

// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = [];
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   if (_.indexOf(this._storage, item) < 0) {
//     this._storage.push(item);
//   }
// };

// setPrototype.contains = function(item) {
//   for (var i = 0; i < this._storage.length; i++) {
//     if (this._storage[i] === item) {
//       return true;
//     }
//   }
//   return false;
// };

// setPrototype.remove = function(item) {
//   for (var i = 0; i < this._storage.length; i++) {
//     if (this._storage[i] === item) {
//       this._storage.splice(i, 1);
//     }
//   }
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
