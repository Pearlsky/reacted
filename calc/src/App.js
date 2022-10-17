import { useState } from "react";
import InputButton from "./components/InputButton";
import CalcScreen from "./components/CalcScreen";


function App() {
  const [memory, setMemory] = useState();
  const [operand, setOperand] = useState();
  const [screenValue, setScreenValue] = useState(0);

  const handleNumClick = (e) => {
    screenValue === 0
    ? setScreenValue((prev) => prev = e.target.value)
    : setScreenValue((prev) => prev += e.target.value)
  };

  const handleOpClick = (e) => {
    setScreenValue((prev) => prev = "");
  }

  return(
    <div>
      <form>
        <header>
          <CalcScreen onChange={(e) => {setOperand((prev => prev = e.target.value))}} value={screenValue}/>
        </header>

        <main>
          <InputButton value="AC"/>
          <InputButton value="+/-" onClick={handleOpClick}/>
          <InputButton value="%"/>
          <InputButton value="/"/>
          <InputButton value="7" onClick={handleNumClick}/>
          <InputButton value="8"/>
          <InputButton value="9"/>
          <InputButton value="*"/>
          <InputButton value="4"/>
          <InputButton value="5"/>
          <InputButton value="6"/>
          <InputButton value="-"/>
          <InputButton value="1"/>
          <InputButton value="2"/>
          <InputButton value="3"/>
          <InputButton value="+"/>
          <InputButton value="0"/>
          <InputButton value="."/>
          <InputButton value="="/>
        </main>
      </form>
    </div>
  );
}

export default App;

/*
Calc Algorithm

- memory state, current state.
- user enters first input 
- 

*/ 