var id = 0;
export const action_addItem = (text) => ({
  type: 'ADD_ITEM',
  text: text,
  id: id++
})

export const action_toggleItem = (index) => ({
  type: 'TOGGLE_ITEM',
  index: index
})

export const action_updateInput = (text) => ({
  type: 'UPDATE_INPUT',
  text: text
})

export const action_changeFilter = (text) => ({
  type: 'CHANGE_FILTER',
  filter: text
})
