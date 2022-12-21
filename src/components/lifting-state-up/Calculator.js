import { useState } from "react";
import { BoilingVerdict } from "./BoilingVerdict";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const Calculator = (props) => {
  const [temperature, setTemperature] = useState("");

  const handleChange = (e) => {
    setTemperature(e.target.value)
  }
  
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        value={temperature}
        onChange={handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  )
}

export default Calculator