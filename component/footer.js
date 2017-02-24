import React from 'react'

class Footer_component extends React.Component {
  render() {
    const {click} = this.props;
    return (
      <div onClick={click}>
        <button>all</button>
        <button>active</button>
        <button>done</button>
      </div>
    )
  }
}

export default Footer_component
