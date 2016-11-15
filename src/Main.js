import React from 'react';
import {Link} from 'react-router'

class Main extends React.Component {
  render () {
    return(
      <div>
        <nav style={{width:"200px",height:"100vh",float:"left"}}>
          <ul>
            <li><Link to="/a" activeStyle={{background:"rgb(100, 191, 250)"}}>aaa</Link></li>
            <li><Link to="/b" activeStyle={{background:"rgb(100, 191, 250)"}}>bbb</Link></li>
            <li><Link to="/c" activeStyle={{background:"rgb(100, 191, 250)"}}>ccc</Link></li>
            <li><Link to="/d" activeStyle={{background:"rgb(100, 191, 250)"}}>ddd</Link></li>
            <li><Link to="/items" activeStyle={{background:"rgb(100, 191, 250)"}}>items</Link></li>
          </ul>
        </nav>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

export default Main;
