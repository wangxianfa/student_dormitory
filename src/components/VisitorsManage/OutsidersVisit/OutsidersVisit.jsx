import React from 'react';
import './OutsidersVisit.scss';

import Footer from '../../PublicComp/Footer/Footer';

export default class OutsidersVisit extends React.Component {

  render() {
    return (
      <div id="outsidersVisit">
  		<div id="sdhead">
                <div className="wrap">
                    <span><img src='/images/stuMessage.png' alt="学生宿舍管理log" /></span>
                    <span>学生宿舍管理平台<em>----来访管理</em></span>
                </div>
            </div>
            <div className="health" id="outsidersRg">
	            <div className="repTopbar">
	                <span><img src='/images/notice.png' alt="来访图标" /><em>外来人员来访登记</em></span>
	            </div>
            	{this.props.children}
            </div>
            <Footer />
      </div>
    );
  }
}
