import React from 'react';
import './OutsidersVisit.scss';
import stuManage from '../../../../src/images/stuMessage.png';
import notice from '../../../../src/images/notice.png';
// import outsiders from '../../../src/images/outsiders.jpg';

import Footer from '../../PublicComp/Footer/Footer';

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
	                <span><img src={notice} alt="来访图标" /><em>外来人员来访登记</em></span>
	            </div>
            	{this.props.children}
            </div>
            <Footer />
      </div>
    );
  }
}
