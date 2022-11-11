import "./App.css";
import { useReducer } from "react";
import Reducer from "./Reducer";

function App() {
  const initState = {
    count: 0,
    value: ""
  };

  const [state, dispatch] = useReducer(Reducer, initState);

  function changeValue(e) {
    dispatch({
      type: "input",
      payload: e.target.value
    });
  }

  function increment() {
    dispatch({
      type: "inc",
    });
  }

  function decrement() {
    dispatch( {
      type: "dec"
    } );
  }

  function set() {
    dispatch({
      type: "set"
    });
  }

  function reset() {
    dispatch({
      type: "reset"
    });
  }

  return (
    <>
      <div>
        <p>Current value: {state.count}</p>
        <label htmlFor="count-input">
          <input
            type="text"
            id="count-input"
            onChange={(e) => {
              changeValue(e);
            }}
          />
        </label>

        <div>
          <button
            onClick={(e) => {
              increment();
            }}
          >
            increment
          </button>
          <button
            onClick={(e) => {
              decrement();
            }}
          >
            decrement
          </button>
          <button
            onClick={(e) => {
              set();
            }}
          >
            set
          </button>
          <button
            onClick={(e) => {
              reset();
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
