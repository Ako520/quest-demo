import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class itemList extends React.Component {
  render () {
    return(
      <div>
        <ul>
            <li><Link to="/items/1">item1</Link></li>
            <li><Link to="/items/2">item2</Link></li>
            <li><Link to="/items/3">item3</Link></li>
            <li><Link to="/items/4">item4</Link></li>
        </ul>
        {this.props.children}
  </div>
    )
  }
}

export default itemList;
