import React from 'react'
import Li_component from './listitem.js'
import Footer_component from './footer.js'

class Todo_component extends React.Component {
  render() {
    const {items, text, filter, submit, click, change, changeFilter} = this.props;
    var mySubmit = submit.bind(this);
    return (
      <div>
        <form onSubmit={(e) => mySubmit(e)}>
          <input ref='myInput' value={text} onChange={change}/>
          <button>add</button>
        </form>
        <ul onClick={click}>
          {items.map(item => (<Li_component text={item.text} id={item.id} done={item.done} key={item.id} filter={filter}/>))}
        </ul>
        <Footer_component click={changeFilter}/>
      </div>
    )
  }
}

export default Todo_component
