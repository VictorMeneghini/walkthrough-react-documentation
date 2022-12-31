import ControlledComponentForm from "./components/forms/controlled-component-form";
import Calculator from "./components/lifting-state-up/Calculator";

import { ThemeContextProvider } from "./context/ThemedContext";
import ToolBar from "./components/tool-bar/ToolBar"

function App() {
  return (
    <div className="App">
      <h1>Controlled Form component</h1>
      <ControlledComponentForm> </ControlledComponentForm>
      <h1>Lifting State Up</h1>
      <Calculator/>

      <ThemeContextProvider >
        <ToolBar></ToolBar>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
