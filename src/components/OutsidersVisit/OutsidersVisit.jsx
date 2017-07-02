import React from 'react';
import './OutsidersVisit.css';
import stuManage from '../../../src/images/stuMessage.png';
import outsiders from '../../../src/images/outsiders.jpg';

export default class OutsidersVisit extends React.Component {

  render() {
    return (
      <div id="outsidersVisit">
  		<div id="sdhead">
                <div className="wrap">
                    <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                    <span>学生宿舍管理平台<em>----来访管理</em></span>
                </div>
            </div>
            <div className="health" id="outsidersRg">
	            <div className="repTopbar">
	                <span><img src={outsiders} alt="来访图标" /><em>外来人员来访登记</em></span>
	            </div>
            	{this.props.children}
            </div>
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
