import React from 'react';
import { Add, Sub, Div, Mult } from './Calc';

function  App(){
  return (<>
    <ul>
      <li>Sum of two number is {Add(30, 3)}</li>
      <li>Sub of two number is {Sub(30, 3)}</li>
      <li>Div of two Number is {Div(10, 3)}</li>
      <li>Multi of two number is {Mult(10, 3)}</li>
    </ul>
  </>);
}
export default App;