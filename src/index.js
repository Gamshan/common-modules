import Main from "./Main";
import React from 'react';
import ReactDOM from 'react-dom';

function randomNoGenerator(min, max) {
  if(typeof(max) !== 'number' && typeof(min) !== 'number') {
    min = 0;  max = 1;
  }
 return (Math.random() * (max-min)) + min;
}
ReactDOM.render(<Main />, document.getElementById('root'));

// module.exports = {
//     randomNoGenerator : randomNoGenerator
// }