import React from 'react';
import './Announcement.css';
// import { Link } from "react-router";
import stuManage from '../../../src/images/stuMessage.png';
// import notice from '../../../src/images/notice.png';

export default class Announcement extends React.Component {

  render() {

    return (
      <div className="announcement">
        	<div id="sdhead">
                <div className="wrap">
                    <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                    <span>学生宿舍管理平台<em>----公告通知</em></span>
                </div>
            </div>
            {this.props.children}
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
      </div>
    );
  }
}
