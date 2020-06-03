/*eslint-disable no-unused-vars */
import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    // console.log('PREV PROPS ', prevProps);
    // console.log('THIS PROPS ', this.props);

    console.log('THIS PROPS retailToMailContent ', this.props.pageContent);
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
            <button onClick={this.props.getContent}>
              GET CONTENT
            </button>
          </div>
      );
    }
}

export default Counter