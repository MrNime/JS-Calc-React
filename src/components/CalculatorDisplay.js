import React from 'react';

export default class CalculatorDisplay extends React.Component {
  componentDidMount() {
    console.log('from CalculatorDisplay');
  }
  render() {
    const { value } = this.props;
    return (
      <div className="calculator-display">
        <p>{value}</p>
      </div>
    );
  }
}
