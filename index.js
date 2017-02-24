import React from 'react'
import { render } from 'react-dom'
import { createStore } from './lib/my-redux'
import { Provider } from './lib/my-react-redux'
import TodoApp from './container/todoapp.js'
import combine_reducer from './reducer/'

const store = createStore(combine_reducer);

render(
  <Provider store={store}>
  <TodoApp/>
</Provider>, document.getElementById('app'))
