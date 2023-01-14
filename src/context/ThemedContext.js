import React, {useState} from "react"

const ThemeContext = React.createContext()

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState({
    color: "blue"
  })

  const changeTheme = (newColor) => {
    setTheme({
      color: newColor
    })
  }

  console.log("render")

  return (
    <ThemeContext.Provider value={{
      theme,
      changeColor: changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

console.log(ThemeContext, "themeContext")