import ControlledComponentForm from "./components/forms/controlled-component-form";
import Calculator from "./components/lifting-state-up/Calculator";

function App() {
  return (
    <div className="App">
      <h1>Controlled Form component</h1>
      <ControlledComponentForm> </ControlledComponentForm>
      <h1>Lifting State Up</h1>
      <Calculator />
    </div>
  );
}

export default App;
