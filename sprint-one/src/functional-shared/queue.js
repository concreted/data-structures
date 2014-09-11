var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var instance = {
	last: 0,
	first: 0,
	length: 0,
	storage: {}
    };


    _.extend(instance, queueMethods);

    return instance;
};

var queueMethods = {
    push: function(value) {
	this.storage[this.last] = value;
	this.last += 1;
	this.length = this.last-this.first;
    },

    pop: function() {
	var value = this.storage[this.first];
	delete this.storage[this.first];
	this.first += 1;
	this.length = this.last-this.first;
	return value;
    },

    size: function() {
	return this.length;
    }
};



