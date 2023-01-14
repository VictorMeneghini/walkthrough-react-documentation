import ThemedButton from "../themed-button/ThemedButton"

const ToolBar = ({theme}) => {
  console.log("render toolbar")
 
  return (
    <div>
      <ThemedButton theme={theme}></ThemedButton>
    </div>
  )
}

export default ToolBar