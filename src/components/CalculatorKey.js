import React from 'react';

export default class CalculatorKey extends React.Component {
  componentDidMount() {
    console.log('from key');
  }
  render() {
    return (
      <div>
        <button>{this.props.children && this.props.children}</button>
      </div>
    );
  }
}
