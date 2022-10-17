import { useState } from "react";
import Operator from "./components/Operator";
import Operand from "./components/Operand";

function App() {
  const [firstOperand, setFirstOperand] = useState();
  const [currentOperator, setCurrentOperator] = useState();
  const [secondOperand, setSecondOperand] = useState();

  return (
    <form>
      <header>
        <label>
          <input/>
        </label>
      </header>

      <main>
        <Operator value="AC"/>
        <Operator value="+/-"/>
        <Operator value="%"/>
        <Operator currentOperator= {currentOperator} setCurrentOperator={setCurrentOperator} value="/"/>
        <Operand value="7"/>
        <Operand value="8"/>
        <Operand value="9"/>
        <Operator currentOperator= {currentOperator} setCurrentOperator={setCurrentOperator} value="*"/>
        <Operand value="4"/>
        <Operand value="5"/>
        <Operand value="6"/>
        <Operator currentOperator= {currentOperator} setCurrentOperator={setCurrentOperator} value="-"/>
        <Operand value="1"/>
        <Operand value="2"/>
        <Operand value="3"/>
        <Operator currentOperator= {currentOperator} setCurrentOperator={setCurrentOperator} value="+"/>
        <Operand value="0"/>
        <Operator currentOperator= {currentOperator} setCurrentOperator={setCurrentOperator} value="."/>
        <Operator currentOperator= {currentOperator} setCurrentOperator={setCurrentOperator} value="="/>
      </main>
    </form>
  );
}

export default App;
