import React from 'react';

const CalculatorKeypad = (props) => {
  const {
    inputDot, inputDigit, performOperation, delKey,
  } = props;
  return (
    <div className="calculator-keypad">
      <div className="keys-left">
        <button className="key-dot" onClick={() => inputDot()}>
          ●
        </button>
        <button className="key-0" onClick={() => inputDigit(0)}>
          0
        </button>
        <button className="key-equals" onClick={() => performOperation('=')}>
          =
        </button>
        <button className="key-1" onClick={() => inputDigit(1)}>
          1
        </button>
        <button className="key-2" onClick={() => inputDigit(2)}>
          2
        </button>
        <button className="key-3" onClick={() => inputDigit(3)}>
          3
        </button>
        <button className="key-4" onClick={() => inputDigit(4)}>
          4
        </button>
        <button className="key-5" onClick={() => inputDigit(5)}>
          5
        </button>
        <button className="key-6" onClick={() => inputDigit(6)}>
          6
        </button>
        <button className="key-7" onClick={() => inputDigit(7)}>
          7
        </button>
        <button className="key-8" onClick={() => inputDigit(8)}>
          8
        </button>
        <button className="key-9" onClick={() => inputDigit(9)}>
          9
        </button>
      </div>
      <div className="keys-right">
        <button className="key-delete" onClick={() => delKey()}>
          del
        </button>
        <button className="key-divide" onClick={() => performOperation('/')}>
          ÷
        </button>
        <button className="key-multiply" onClick={() => performOperation('*')}>
          ×
        </button>
        <button className="key-subtract" onClick={() => performOperation('-')}>
          −
        </button>
        <button className="key-add" onClick={() => performOperation('+')}>
          +
        </button>
      </div>
    </div>
  );
};

export default CalculatorKeypad;
