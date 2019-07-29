import React from 'react';
import './App.css';

import Form from './Form';
import Output from './Output';

class App extends React.Component {

  state = {
    operation: '',
    equation: '',
    result: '',
    display: false,
  }

  getResult = (operation, equation) => {
    fetch(`https://newton.now.sh/${operation}/${equation}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          operation,
          equation,
          result: data.result.toString(),
          display: true,
        })
      )
      .catch(err => console.log(err));
    console.log('123');
  }

  render() {
    const { operation, equation, result, display } = this.state;
    return (
      <div className="main">
        <h1 className="title">Newton Math</h1>
        <Form getResult={this.getResult} />
        {display ? (
          <Output operation={operation} equation={equation} result={result} />
        ) : <div></div>}
      </div>
    );
  }
}

export default App;