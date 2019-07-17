import React from 'react';

const Form = (props) => (
  <form>
    <label>
      Operation:
      <select name="operation" value={props.operation} onChange={props.onChange}>
        <option value="" disabled selected>Please Choose...</option>
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
      <input name="equation" value={props.equation} onChange={props.onChange} />
    </label>
    <button onClick={props.onSubmit}>Submit</button>
  </form>
);

export default Form;