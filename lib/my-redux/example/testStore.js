class Store {
  constructor(reducer) {
    this.state = reducer(undefined, {
      type: undefined
    });
    this.reducer = reducer;
    this.callbacks = [];
  }
  subscribe(callback) {
    this.callbacks.push(callback);
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

function count(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return 1;
    case 'MINUS':
      return -1;
    default:
      return state;
  }
}

function record(state = [], action) {
  switch (action.type) {
    case 'ADD_RECORD':
      state.push(action.text);
      return state;
    default:
      return state;
  }
}

var reducer = combineReducers({
  number: count,
  record: record
});


var store = createStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD'
});
store.dispatch({
  type: 'ADD_RECORD',
  text: 'AaBb'
});
store.dispatch({
  type: 'ADD_RECORD',
  text: 'AaBb'
});
