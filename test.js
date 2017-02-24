var Store = function() {
  this.callbacks = [];
};

Store.prototype.subscribe = function() {
  this.callbacks.push(1);
  var a = this.callbacks.length;
  return () => {
    console.log(a);
  }
};

var store = new Store();

var f1 = store.subscribe();
var f2 = store.subscribe();
f1();
f2();
