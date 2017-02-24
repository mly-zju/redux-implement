import React from 'react'

class Li_component extends React.Component {
  render() {
    const {text, id, done, filter} = this.props;
    if (filter == 'active') {
      if (!done) {
        return (
          <li data-index={id}>{done
            ? 'done: ' + text
            : text}</li>
        )
      } else {
        return (
          <span></span>
        )
      }
    } else if (filter == 'done') {
      if (done) {
        return (
          <li data-index={id}>{done
            ? 'done: ' + text
            : text}</li>
        )
      } else {
        return (
          <span></span>
        )
      }
    } else {
      return (
        <li data-index={id}>{done
          ? 'done: ' + text
          : text}</li>
      )
    }
  }
}

export default Li_component
