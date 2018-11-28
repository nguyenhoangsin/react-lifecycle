import React, { Component } from 'react';

class TestRender extends Component {
  constructor (props) {
    console.log('TESTRENDER - constructor')
    super(props);
    this.state = { clicked: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    alert('TESTRENDER - getDerivedStateFromProps');
    console.log('TESTRENDER - getDerivedStateFromProps', ' - props', props, ' - state', state);
    return { clicked: 5 };
  }

  componentDidMount() {
    alert('TESTRENDER - componentDidMount');
    console.log('TESTRENDER - componentDidMount', ' - props', this.props, ' - state', this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    alert('TESTRENDER - shouldComponentUpdate');
    console.log('TESTRENDER - shouldComponentUpdate', ' - nextProps', nextProps, ' - nextState', nextState);
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    alert('TESTRENDER - componentDidUpdate');
    console.log('TESTRENDER - componentDidUpdate', ' - prevProps', prevProps, ' - prevState', prevState);
  }

  click() {
    alert('TESTRENDER - click');
    this.setState({ clicked: this.state.clicked + 1 });
    console.log('TESTRENDER - click', ' - props', this.props, ' - state', this.state);
  }

  render () {
    return (
      <div onClick={this.click.bind(this)}>
        <p>TestRenderComponent - props - { this.props.clicked }</p>
        <p>TestRenderComponent - state - { this.state.clicked }</p>
        { console.log('TESTRENDER - render', ' - props', this.props, ' - state', this.state) }
      </div>
    );
  }
}

export default TestRender;
