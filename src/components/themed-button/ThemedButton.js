import {useContext, useState} from "react"
import ThemeContext from "../../context/ThemedContext";

const ThemedButton = () => {

  const [count, setCount] = useState(0)
  const context = useContext(ThemeContext);
  console.log(context, "a")

  const handleOnClick = () => {
    context.changeColor("red")
    setCount(state => state +1)
  }

  return (
    <button 
      style={context.theme}
      onClick={() => handleOnClick()}
    >Hi, im button using context</button>
  )
}

export default ThemedButton