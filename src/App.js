import React from 'react';
import './App.css';

import Form from './Form';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: '',
      equation: '',
      result: '',
      display: false,
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
          display: true,
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { operation, equation, result, display } = this.state;
    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} operation={operation} equation={equation} />
        {
          display ? (
            <Output operation={operation} equation={equation} result={result} />
          ) : (
              <div></div>
            )
        }
      </div>
    );
  }
}

export default App;