class Store {
  constructor(reducer) {
    this.state = reducer(undefined, {
      type: undefined
    });
    this.reducer = reducer;
    this.callbacks = [];
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
  }
  subscribe(callback) {
    this.callbacks.push(callback);
    var index = this.callbacks.length - 1;
    return unsubscribe => {
      this.callbacks.splice(index, 1);
    }
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.callbacks.forEach(function(ele) {
      ele();
    });
  }
  getState() {
    return this.state;
  }
}

function combineReducers(reducers) {
  return function reducerAll(state = {}, action) {
    var tmp = {};
    for (var key in reducers) {
      tmp[key] = reducers[key](state[key], action);
    }
    return tmp;
  }
}

function createStore(reducer) {
  return new Store(reducer);
}

export { combineReducers, createStore }
