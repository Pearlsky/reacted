import { useState } from "react";
import { Operator, Operand, Operations } from "./components/InputButton";
import CalcScreen from "./components/CalcScreen";
import "./App.css";

function App() {
  const [memoryOperand, setMemoryOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [screenValue, setScreenValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumClick = (e) => {
    if (screenValue && currentOperand) {
      setScreenValue((prev) => (prev += e.target.value));
      setCurrentOperand((prev) => (prev += e.target.value));
    } else {
      setScreenValue((prev) => (prev = e.target.value));
      setCurrentOperand((prev) => (prev = e.target.value));
    }
  };

  return (
    <div className="app">
      <form>
        <section className="calc">
          <header className="calc-head">
            <CalcScreen
              onChange={(e) => {
                setCurrentOperand((prev) => (prev = e.target.value));
              }}
              value={screenValue}
            />
          </header>

          <main className="calc-body">
            <Operations className={"btn-other"} value="AC" onClick={() => {setMemoryOperand(""); setScreenValue("");}}/>
            <Operations className={"btn-other"} value="+/-" />
            <Operations className={"btn-other"} value="%" />
            <Operator
              value="/"
              memoryOperand={memoryOperand}
              setMemoryOperand={setMemoryOperand}
              currentOperand={currentOperand}
              setCurrentOperand={setCurrentOperand}
              setScreenValue={setScreenValue}
              operator={operator}
              setOperator={setOperator}
              func={(a, b) => a / b}
            />
            <Operand value="7" onClick={handleNumClick} />
            <Operand value="8" onClick={handleNumClick} />
            <Operand value="9" onClick={handleNumClick} />
            <Operator
              value="x"
              memoryOperand={memoryOperand}
              setMemoryOperand={setMemoryOperand}
              currentOperand={currentOperand}
              setCurrentOperand={setCurrentOperand}
              setScreenValue={setScreenValue}
              operator={operator}
              setOperator={setOperator}
              func={(a, b) => a * b}
            />
            <Operand value="4" onClick={handleNumClick} />
            <Operand value="5" onClick={handleNumClick} />
            <Operand value="6" onClick={handleNumClick} />
            <Operator
              value="-"
              memoryOperand={memoryOperand}
              setMemoryOperand={setMemoryOperand}
              currentOperand={currentOperand}
              setCurrentOperand={setCurrentOperand}
              setScreenValue={setScreenValue}
              operator={operator}
              setOperator={setOperator}
              func={(a, b) => a - b}
            />
            <Operand value="1" onClick={handleNumClick} />
            <Operand value="2" onClick={handleNumClick} />
            <Operand value="3" onClick={handleNumClick} />
            <Operator
              value="+"
              memoryOperand={memoryOperand}
              setMemoryOperand={setMemoryOperand}
              currentOperand={currentOperand}
              setCurrentOperand={setCurrentOperand}
              setScreenValue={setScreenValue}
              operator={operator}
              setOperator={setOperator}
              func={(a, b) => a + b}
            />
            <Operand className="btn-zero" value="0" onClick={handleNumClick} />
            <Operand value="." />
            <Operations className="btn-equals" onClick={() => {setScreenValue(memoryOperand);}} value="="/>
          </main>
        </section>
      </form>
    </div>
  );
}

export default App;

/*
Calc Algorithm

- memory state: stores the total always.
- current state: stores the current input
- user enters first input 
- if he clicks an operator, first input goes to memory state
- 

*/
