import React from 'react';

const Output = (props) => (
  <div>
    {
      props.operation === 'zeroes' ?
        <div className="result">Result: [{props.result}]</div> :
        <div className="result">Result: {props.result}</div>
    }
  </div>
);

export default Output;