import React, { useState } from "react";

const TemperatureInput = React.lazy(() => import('./TemperatureInput'))

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const Calculator = () => {
  const [temperature, setTemperature] = useState({
    celsius: {
      value: 0,
      scale: "c"
    },
    fahrenheit: {
      value: 0,
      scale: "f"
    }
  }) 

  const handleTemperatureChange = (value) => {
    setTemperature({
      celsius: {
        value: value.scale === "f" ? tryConvert(value.value, toCelsius): value.value,
        scale: "c"
      },
      fahrenheit: {
        value: value.scale === "c" ? tryConvert(value.value, toFahrenheit): value.value,
        scale: "f"
      }
    })
  }

  return (
    <>
      <TemperatureInput 
        scale={temperature.celsius.scale}
        onTemperatureChange={handleTemperatureChange}
        temperature={temperature.celsius.value}/>
      <TemperatureInput 
        scale={temperature.fahrenheit.scale}
        onTemperatureChange={handleTemperatureChange}
        temperature={temperature.fahrenheit.value}/>
    </>
  )
}

export default Calculator