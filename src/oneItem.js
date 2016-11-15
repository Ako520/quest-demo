import React, { PropTypes } from 'react'

class oneItem extends React.Component {
  render () {
    return(
      <h2>
        这是{this.props.params.id}的详情
      </h2>
    )
  }
}

export default oneItem;
