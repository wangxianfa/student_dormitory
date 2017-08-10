import React from 'react';
import './OutsidersVisit.scss';
import '../../../common/styles/RepTopbar.scss';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

export default class OutsidersVisit extends React.Component {

  render() {
    return (
      <div id="outsidersVisit">
          <Header showSecondLevelMenu='1' secondLevelMenu='访客管理'/>
          <div className="health">
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
