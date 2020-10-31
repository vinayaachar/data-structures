

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //this is storage
  // this_storage = [[[k,v], [k1,v1], [k2,v2]], ]
  // this_storage[0][0][0]
  // this._keyTracker = []; <- keeps track of all keys in hash table, this is only needed when you resize hash table


};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //step1: Look for if there is this index ?
  if (!this._storage[index]) {
    //this._storage[index] = [LimitedArray(8)];
    this._storage[index] = [];
  }

  var bucket = this._storage[index];
  //var bucketLength = this._storage.length;
  var tuple = [k, v];
  //check in bucket if bucket has 'key'
  var containsKey = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      containsKey = true;
    }

  }
  // if no key push else overwrite
  if (!containsKey) {
    bucket.push(tuple);
  }


  this._storage.set(index, bucket);
  //step2 : Check to see if bucked exists
  //step3: : if no bucked, define a bucket
  //add tuple to bucket, which is 2 item array [[k, v], [k1, v1], [k3, v3]]
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

