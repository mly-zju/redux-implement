import { combineReducers } from '../lib/my-redux'

function reducer_item(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      var tmp = [];
      tmp = state.slice(0);
      tmp.push({
        text: action.text,
        done: false,
        id: action.id
      });
      return tmp;
    case 'TOGGLE_ITEM':
      var tmp = state.slice(0);
      tmp[action.index].done = !tmp[action.index].done;
      return tmp;
    default:
      return state;
  }
}

function reducer_inputText(state = '', action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return action.text;
    case 'ADD_ITEM':
      return '';
    default:
      return state;
  }
}

function reducer_filter(state = 'all', action) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    case 'ADD_ITEM':
      return 'all';
    default:
      return state;
  }
}

const combine_reducer = combineReducers({
  items: reducer_item,
  text: reducer_inputText,
  filter: reducer_filter
});

export default combine_reducer
