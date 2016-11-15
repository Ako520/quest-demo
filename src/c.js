import React, { PropTypes } from 'react'

class C extends React.Component {
  render () {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return(
      <div>
        <h1>c页面</h1>
        <h2>
          <p>
            Clicked: {counter} times
            {' '}
            <button onClick={increment}>+</button>
            {' '}
            <button onClick={decrement}>-</button>
            {' '}
            <button onClick={incrementIfOdd}>Increment if odd</button>
            {' '}
            <button onClick={() => incrementAsync()}>Increment async</button>
          </p>
        </h2>
      </div>
    )
  }
}

export default C;
