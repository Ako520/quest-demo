import React from 'react';

class Main extends React.Component {
  render () {
    return(
      <div>
        <nav style={{width:"200px",height:"100vh",float:"left"}}>
          <ul>
            <li>这</li>
            <li>里</li>
            <li>是</li>
            <li>导</li>
            <li>航</li>
          </ul>
        </nav>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
export default Main;
