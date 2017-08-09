import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copyrighy">
            <h4>版权所有© 2016 中南民族大学<em></em>邮编 430074</h4>
            <p>
                <span>联系我们</span>
                <em>|</em>
                <span>旧版登录</span>
                <em>|</em>
                <span>技术支持</span>
            </p>
        </div>
      </footer>
    );
  }
}

export default Footer;