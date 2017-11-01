import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import Footer from './Footer';

export default class JavaScriptCalculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    waitingForOperand: false,
    operator: null,
  };

  inputDot = () => {
    this.setState((prevState) => {
      let updaterObj;
      const { displayValue, waitingForOperand } = prevState;
      if (waitingForOperand) {
        updaterObj = {
          displayValue: '0.',
          waitingForOperand: false,
        };
      } else if (displayValue.indexOf('.') === -1) {
        updaterObj = {
          displayValue: `${displayValue}.`,
          waitingForOperand: false,
        };
      }
      return updaterObj;
    });
  };

  inputDigit = (digit) => {
    this.setState((prevState) => {
      let updaterObj;
      const { displayValue, waitingForOperand } = prevState;
      if (waitingForOperand) {
        updaterObj = {
          displayValue: String(digit),
          waitingForOperand: false,
        };
      } else {
        updaterObj = { displayValue: displayValue === '0' ? String(digit) : displayValue + digit };
      }
      return updaterObj;
    });
  };

  delKey = () => {
    this.setState(() => ({
      displayValue: '0',
    }));
  };

  performOperation = (nextOperator) => {
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue,
    };

    this.setState((prevState) => {
      const { displayValue, operator, value } = prevState;
      const nextValue = parseFloat(displayValue);
      let updaterObj;
      if (value === null) {
        updaterObj = { value: nextValue };
      } else if (operator) {
        const currentValue = value || 0;
        const computedValue = operations[operator](currentValue, nextValue);
        updaterObj = {
          value: computedValue,
          displayValue: String(computedValue),
        };
      }
      return {
        waitingForOperand: true,
        operator: nextOperator,
        ...updaterObj,
      };
    });
  };

  render() {
    const { displayValue } = this.state;
    return (
      <div className="wrapper">
        <main className="site-content">
          <div className="calculator">
            <CalculatorDisplay value={displayValue} />
            <div className="calculator-keypad">
              <div className="keys-left">
                <button className="key-dot" onClick={() => this.inputDot()}>
                  ●
                </button>
                <button className="key-0" onClick={() => this.inputDigit(0)}>
                  0
                </button>
                <button className="key-equals" onClick={() => this.performOperation('=')}>
                  =
                </button>
                <button className="key-1" onClick={() => this.inputDigit(1)}>
                  1
                </button>
                <button className="key-2" onClick={() => this.inputDigit(2)}>
                  2
                </button>
                <button className="key-3" onClick={() => this.inputDigit(3)}>
                  3
                </button>
                <button className="key-4" onClick={() => this.inputDigit(4)}>
                  4
                </button>
                <button className="key-5" onClick={() => this.inputDigit(5)}>
                  5
                </button>
                <button className="key-6" onClick={() => this.inputDigit(6)}>
                  6
                </button>
                <button className="key-7" onClick={() => this.inputDigit(7)}>
                  7
                </button>
                <button className="key-8" onClick={() => this.inputDigit(8)}>
                  8
                </button>
                <button className="key-9" onClick={() => this.inputDigit(9)}>
                  9
                </button>
              </div>
              <div className="keys-right">
                <button className="key-delete" onClick={() => this.delKey()}>
                  del
                </button>
                <button className="key-divide" onClick={() => this.performOperation('/')}>
                  ÷
                </button>
                <button className="key-multiply" onClick={() => this.performOperation('*')}>
                  ×
                </button>
                <button className="key-subtract" onClick={() => this.performOperation('-')}>
                  −
                </button>
                <button className="key-add" onClick={() => this.performOperation('+')}>
                  +
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
