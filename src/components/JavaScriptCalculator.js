import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';
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
      const {
        displayValue, operator, value, waitingForOperand,
      } = prevState;
      const nextValue = parseFloat(displayValue, 10);
      let updaterObj = {};
      if (value === null) {
        updaterObj = { value: nextValue };
      } else if (operator && !waitingForOperand) {
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
            <CalculatorKeypad
              inputDigit={this.inputDigit}
              inputDot={this.inputDot}
              delKey={this.delKey}
              performOperation={this.performOperation}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
