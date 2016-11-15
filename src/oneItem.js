import React, { PropTypes } from 'react'

class oneItem extends React.Component {
  render () {
      const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return(
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
        <p>
          --------------1：上面是redux要确保redux可以正常运行才可以--------------------------------<br />
        --------------2：左边的导航在路由/items及/items:id下要有背景色--------------------------------<br />
      ---------------PS：不能计数是因为第二次使用的是this.props.children得不到this.props的值--------
        </p>

        <div>这是{this.props.params.id}的详情哦</div>
      </h2>
    )
  }
}

export default oneItem;
