function Operator({
  value,
  className,
  memoryOperand,
  setMemoryOperand,
  currentOperand,
  setCurrentOperand,
  setScreenValue,
  operator,
  setOperator,
  func,
}) {
  const handleOperClick = () => {
    const operFunc =
      operator === "" 
      ? setOperator((prev) => (prev = func)) 
      : operator;

    const memoryValue =
      memoryOperand === ""
        ? currentOperand
        : operFunc(Number(memoryOperand), Number(currentOperand));

    setMemoryOperand((prev) => (prev = memoryValue));
    setScreenValue((prev) => (prev = memoryValue));
    setCurrentOperand((prev) => (prev = ""));
    setOperator((prev) => (prev = func));
  };

  return <input className={`btn btn-operator ${className}`} type="button" value={value} onClick={handleOperClick} />;
}

function Operand({ value, onClick, className }) {
  return <input className={`btn btn-operand ${className}`} type="button" value={value} onClick={onClick} />;
}

function Operations({ value, onClick, className}) {
  return <input className={`btn ${className}`} type="button" value={value} onClick={onClick} />;
}

export { Operator, Operand, Operations };