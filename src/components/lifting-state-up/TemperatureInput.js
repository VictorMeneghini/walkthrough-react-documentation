import { useState } from "react";
import {BoilingVerdict} from './BoilingVerdict'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({scale, temperature, onTemperatureChange}) => {

  const handleChange = (e) => {
    console.log(e.target.value, "onTI")
    onTemperatureChange({value: e.target.value, scale: scale})
  }
  
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input
        value={temperature}
        onChange={handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  )
}


export default TemperatureInput