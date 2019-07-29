import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: '',
      equation: ''
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
    this.props.getResult(this.state.operation, this.state.equation);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      operation: '',
      equation: ''
    })
  }

  render() {
    return (
      <form>
        <label>
          Operation:
          <select name="operation" value={this.state.operation} onChange={this.handleChange}>
            <option value="">Please Choose...</option>
            <option value="simplify">Simplify</option>
            <option value="factor">Factor</option>
            <option value="derive">Derive</option>
            <option value="integrate">Integrate</option>
            <option value="zeroes">Find O's</option>
            <option value="tangent">Find Tangent</option>
            <option value="area">Area Under Curve</option>
            <option value="cos">Cosine</option>
            <option value="sin">Sine</option>
            <option value="tan">Tangent</option>
            <option value="arccos">Inverse Cosine</option>
            <option value="arcsin">Inverse Sine</option>
            <option value="arctan">Inverse Tangent</option>
            <option value="abs">Absolute Value</option>
            <option value="log">Logarithm</option>
          </select>
        </label>
        <label>
          Equation:
          <input name="equation" value={this.state.equation} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;