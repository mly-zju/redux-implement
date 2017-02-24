import { connect } from '../lib/my-react-redux'
import { action_addItem, action_toggleItem, action_updateInput, action_changeFilter } from '../action'
import Todo_component from '../component/todoapp.js'
import React from 'react'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    text: state.text,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: function(e) {
    e.preventDefault();
    var text = this.refs.myInput.value;
    dispatch(action_addItem(text));
  },
  click: function(e) {
    if (e.target.nodeName.toLowerCase() == 'li') {
      var index = e.target.dataset.index;
      dispatch(action_toggleItem(index));
    }
  },
  change: function(e) {
    var text = e.target.value;
    dispatch(action_updateInput(text));
  },
  changeFilter: function(e) {
    var text = e.target.innerText;
    dispatch(action_changeFilter(text))
  }
})

const TodoApp = connect(mapStateToProps, mapDispatchToProps)(Todo_component);

export default TodoApp
