import React, { Component } from 'react';
import TestRender from './TestRender/TestRender';
import './App.css';

class App extends Component {
  constructor (props) {
    console.log('APP - constructor')
    super(props);
    this.state = { clicked: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    alert('APP - getDerivedStateFromProps');
    console.log('APP - getDerivedStateFromProps', ' - props', props, ' - state', state);
    return null;
  }

  componentDidMount() {
    alert('APP - componentDidMount');
    console.log('APP - componentDidMount', ' - props', this.props, ' - state', this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    alert('APP - shouldComponentUpdate');
    console.log('APP - shouldComponentUpdate', ' - nextProps', nextProps, ' - nextState', nextState);
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    alert('APP - componentDidUpdate');
    console.log('APP - componentDidUpdate', ' - prevProps', prevProps, ' - prevState', prevState);
  }

  click() {
    alert('APP - click');
    this.setState({ clicked: this.state.clicked + 1 });
    console.log('APP - click', ' - props', this.props, ' - state', this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.click.bind(this)}>AppComponent - { this.state.clicked }</p>
          <TestRender clicked={this.state.clicked} />
        </header>
        { console.log('APP - render', ' - props', this.props, ' - state', this.state) }
      </div>
    );
  }
}

export default App;
