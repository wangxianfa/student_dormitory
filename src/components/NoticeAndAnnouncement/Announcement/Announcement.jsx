import React from 'react';
import './Announcement.css';
// import { Link } from "react-router";
import stuManage from '../../../../src/images/stuMessage.png';
// import notice from '../../../src/images/notice.png';

import Footer from '../../PublicComp/Footer/Footer';

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
            <Footer />
      </div>
    );
  }
}
