import logo from "./logo.svg";
import "./App.css";
import Counter1 from "./Counter1";
import { useState } from "react";
import GlobalContext from "./Context";

const useMyCustomHook = () => {
  const [state, setState] = useState({ showCounter: true, initicalCounter: {count: 100, message: "hello"} });
  const showHide = () => {
    setState({ ...state, showCounter: !state.showCounter });
  };
  
  return [state, setState, showHide];
}

function App() {
  const [state, setState, showHide] = useMyCustomHook();

  return (
    <GlobalContext.Provider value={{state, setState}}>
      <div className="App">
        {state.showCounter && <Counter1 />}
        <hr />
        <button onClick={showHide}>Show/Hide</button>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
