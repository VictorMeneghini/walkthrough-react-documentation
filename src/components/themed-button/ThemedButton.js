import {useContext} from "react"
import ThemeContext from "../../context/ThemedContext";

const ThemedButton = () => {
  const context = useContext(ThemeContext);
  console.log(context, "a")

  return (
    <button style={context.theme} onClick={() => context.changeColor("red")}>Hi, im button using context</button>
  )
}

export default ThemedButton