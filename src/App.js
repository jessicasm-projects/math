import React from 'react';
import './App.css';

import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: 'simplify',
      equation: '',
      result: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getResult();
  }

  getResult() {
    fetch(`https://newton.now.sh/${this.state.operation}/${this.state.equation}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          result: data.result,
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} operation={this.state.operation} equation={this.state.equation} />
      </div>
    );
  }
}

export default App;