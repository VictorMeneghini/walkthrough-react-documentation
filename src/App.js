import {lazy, Suspense, useRef, useEffect} from "react"
import { Link } from "react-router-dom";

import ControlledComponentForm from "./components/forms/controlled-component-form";
import Calculator from "./components/lifting-state-up/Calculator";
import InputComponent from "./components/input/InputComponent"

import { ThemeContextProvider } from "./context/ThemedContext";

const ToolBar = lazy(() => import("./components/tool-bar/ToolBar"))

function App() {
  const inputRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.turnVisible(true)
    }, 3003);
    console.log(inputRef.current, "ref")
  }, [])

  console.log("render")
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={`contact/victor`}>Go to contact</Link>
          </li>
        </ul>
      </nav>
      <h1>Controlled Form component</h1>
      <ControlledComponentForm> </ControlledComponentForm>
      <h1>Lifting State Up!</h1>
      <Calculator/>

      {/* <input ref={inputRef} /> */}
      <InputComponent ref={inputRef}/>

      <ThemeContextProvider >
        <Suspense>
          <ToolBar></ToolBar>
        </Suspense>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
