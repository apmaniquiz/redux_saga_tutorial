/*eslint-disable no-unused-vars */
import React, { Component, PropTypes, useEffect } from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log('PREV PROPS ', prevProps);
    console.log('THIS PROPS ', this.props);
  }

  render() {
      return (
          <div>
            <button onClick={this.props.onIncrement}>
              Increment
            </button>
            {' '}
            <button onClick={this.props.onDecrement}>
              Decrement
            </button>
            {' '}
            <hr />
            <div>
              Clicked: {this.props.value} times
            </div>
          </div>
      );
    }
}

export default Counter