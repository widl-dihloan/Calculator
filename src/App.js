import React, { useState } from "react";
import "./styles.css";

/*
1. Display a calculator
  - Show a display window
  - Show all buttons

2. Capture input from said calculator
2.a. Update the display from input
2.b. Process the input

*/
function App() {
  const [inputs, setInputs] = useState("");
  const [storedInput, setStoredInput] = useState("");
  const [storedOperator, setStoredOperator] = useState("");
  var calculatedValue = "";

  function updateInput(event) {
    const { value } = event.target;
    setInputs(inputs + value);
  }

  function clearInput(event) {
    setInputs("");
    setStoredInput("");
    setStoredOperator("");
  }

  function updateOperator(event) {
    const { value } = event.target;
    setStoredInput(inputs);
    setStoredOperator(value);
    setInputs("");
  }

  function updateCalculate() {
    switch (storedOperator) {
      case "/":
        calculatedValue = (parseInt(storedInput, 10) / parseInt(inputs, 10)).toString();
        break;
      case "*":
        calculatedValue = (parseInt(storedInput, 10) * parseInt(inputs, 10)).toString();
        break;
      case "-":
        calculatedValue = (parseInt(storedInput, 10) - parseInt(inputs, 10)).toString();
        break;
      case "+":
        calculatedValue = (parseInt(storedInput, 10) + parseInt(inputs, 10)).toString();
        break;
      default:
        calculatedValue = inputs;
    }

    setInputs(calculatedValue);    
    setStoredInput(calculatedValue);
    setStoredOperator("");
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <input class="input-calcdisplay form-control" type="text" value={inputs} disabled/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="7" onClick={updateInput}>7</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="8" onClick={updateInput}>8</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="9" onClick={updateInput}>9</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success btn-sizing" value="/" onClick={updateOperator}>/</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="4" onClick={updateInput}>4</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="5" onClick={updateInput}>5</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="6" onClick={updateInput}>6</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success btn-sizing" value="*" onClick={updateOperator}>*</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="1" onClick={updateInput}>1</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="2" onClick={updateInput}>2</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="3" onClick={updateInput}>3</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success btn-sizing" value="-" onClick={updateOperator}>-</button>
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button type="button" class="btn btn-primary btn-sizing" value="0" onClick={updateInput}>0</button>
        </div>
        <div class="col">
          
        </div>
        <div class="col">
          <button type="button" class="btn btn-success btn-sizing" value="+" onClick={updateOperator}>+</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-secondary btn-sizing" onClick={clearInput}>CLEAR</button>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-success btn-sizing" value="=" onClick={updateCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
