import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <div id="sdhead">
          <div className="wrap">
              <span><img src='/images/stuMessage.png' alt="学生宿舍管理log" /></span>
              <span>学生宿舍管理平台{this.props.showSecondLevelMenu === '1' ? <em>---- {this.props.secondLevelMenu} </em> : ""}</span>
          </div>
      </div>
    );
  }
}

export default Header;