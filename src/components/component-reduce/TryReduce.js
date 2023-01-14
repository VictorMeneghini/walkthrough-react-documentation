import { useReducer, useState } from "react";

const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

function TryReduce() {
  const [number, updateNumber] = useState(0);

  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case OPERATIONS.ADD:
        return state + number
      case OPERATIONS.SUBTRACT:
        return state - number
    
      default:
        break;
    }
  
  }, 0);

  /* implement dispatches */
  const add = () => dispatch({
    type: OPERATIONS.ADD
  });
  const subtract = () => dispatch({
    type: OPERATIONS.SUBTRACT
  });

  const handleNumberChange = e => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>Add</button>
        <button id="subtract" onClick={subtract}>Subtract</button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}


export default TryReduce;