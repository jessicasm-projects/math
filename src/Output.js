import React from 'react';

const Output = (props) => (
  <div>
    <div>Operation: {props.operation}</div>
    <div>Equation: {props.equation}</div>

    <div>
      {
        props.operation === 'zeroes' ?
          <div className="result">Result: [{props.result}]</div> :
          <div className="result">Result: {props.result}</div>
      }
    </div>
  </div>
);

export default Output;