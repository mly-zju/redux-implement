import React from 'react'

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};


function connect(mapStateToProps = {}, mapDispatchToProps = {}) {
  return function createConnect(TargetComponent) {
    class Connect extends React.Component {
      componentWillMount() {
        this.stateProps = mapStateToProps(this.context.store.getState());
        this.dispatchProps = mapDispatchToProps(this.context.store.dispatch);
        this.mergeProps = Object.assign({}, this.stateProps, this.dispatchProps);

        this.handleChange = this.handleChange.bind(this);
        this.unsubscribe = this.context.store.subscribe(this.handleChange);
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      handleChange() {
        this.setState((prevState) => {
          var storeState = this.context.store.getState();
          this.stateProps = mapStateToProps(storeState, prevState);
          this.dispatchProps = mapDispatchToProps(this.context.store.dispatch, prevState);
          this.mergeProps = Object.assign({}, this.stateProps, this.dispatchProps);
          return storeState;
        });
      }
      render() {
        return (
          <TargetComponent {...this.mergeProps}/>
          );
      }
    }
    Connect.contextTypes = {
      store: React.PropTypes.object
    };
    return Connect;
  }
}

export { Provider, connect }
