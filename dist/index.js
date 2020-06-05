import Select from "./../src/elements/Select";
import Input from "./../src/elements/Input";
function randomNoGenerator(min, max) {
  if(typeof(max) !== 'number' && typeof(min) !== 'number') {
    min = 0;  max = 1;
  }
 return (Math.random() * (max-min)) + min;
}


module.exports = {
    randomNoGenerator : randomNoGenerator,
    Input,
    Select
}