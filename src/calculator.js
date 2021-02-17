import React, { useState } from "react";

export function performOperation(operator, leftOperand, rightOperand) {
  if (operator == "+") {
    return parseFloat(leftOperand) + parseFloat(rightOperand);
  } else if (operator == "-") {
    return parseFloat(leftOperand) - parseFloat(rightOperand);
  } else if (operator == "/") {
    return parseFloat(leftOperand) / parseFloat(rightOperand);
  } else if (operator == "*") {
    return parseFloat(leftOperand) * parseFloat(rightOperand);
  } else {
    return leftOperand;
  }
}

export function performCalculation(calculation) {
  // *pretending eval() doesn't exist*
  if (calculation.length > 0) {
    let leftOperand = "";
    let rightOperand = "";
    let operator;

    calculation.forEach(el => {
      if (el == "+" || el == "-" || el == "/" || el == "*") {
        if (rightOperand) {
          leftOperand = performOperation(operator, leftOperand, rightOperand);
          rightOperand = "";
        }
        operator = el;
      } else if (parseFloat(el) || el == "0") {
        if (rightOperand != "") {
          rightOperand = rightOperand += el;
        } else if (operator && rightOperand == "") {
          rightOperand = el;
        } else if (operator == null) {
          leftOperand += el;
        }
      }
    });
    return performOperation(operator, leftOperand, rightOperand);
  } else {
    return "Nothing to calculate";
  }
}

export default function Calculator() {
  const [calculation, setCalculation] = useState([]);
  const [result, setResult] = useState();
  const buttonLabels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "*"
  ];

  function pushInput(e) {
    setCalculation([...calculation, e]);
  }

  function clearCache() {
    setResult("");
    setCalculation([]);
  }

  function showResult() {
    setResult(performCalculation(calculation));
  }

  // function performCalculation() {
  //   // *pretending eval() doesn't exist*
  //   if (calculation.length > 0) {
  //     let leftOperand = "";
  //     let rightOperand = "";
  //     let operator;

  //     calculation.forEach(el => {
  //       if (el == "+" || el == "-" || el == "/" || el == "*") {
  //         if (rightOperand) {
  //           leftOperand = performOperation(operator, leftOperand, rightOperand);
  //           rightOperand = "";
  //         }
  //         operator = el;
  //       } else if (parseFloat(el) || el == "0") {
  //         if (rightOperand != "") {
  //           rightOperand = rightOperand += el;
  //         } else if (operator && rightOperand == "") {
  //           rightOperand = el;
  //         } else if (operator == null) {
  //           leftOperand += el;
  //         }
  //       }
  //     });
  //     setResult(performOperation(operator, leftOperand, rightOperand));
  //   } else {
  //     setResult("Nothing to calculate");
  //   }
  // }

  function renderButtonLabels() {
    return buttonLabels.map((label, index) => {
      let element;

      if (index % 3 == 2) {
        element = <br />;
      } else {
        element = "";
      }

      return (
        <span>
          <button onClick={() => pushInput(label)}>{label}</button>
          {element}
        </span>
      );
    });
  }

  return (
    <div>
      {renderButtonLabels()}
      <div>
        <button onClick={() => pushInput("-")}>-</button>
        <button onClick={() => pushInput("/")}>/</button>
        <button onClick={showResult}>=</button>
      </div>
      <div>
        <button onClick={clearCache}>Clear</button>
      </div>
      <div>Current expression: {calculation}</div>
      <div>Result: {result}</div>
    </div>
  );
}
