import React from 'react';
import './InOut.css';
import stuManage from '../../../../src/images/stuMessage.png';
import repair from '../../../../src/images/repair.png';

import Footer from '../../PublicComp/Footer/Footer';

class InOut extends React.Component {
    render() {
        return (
            <div className="InOut">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----出入管理</em></span>
                    </div>
                </div>
                <div id="inOut">
                    <div className="repTopbar">
                        <span><img src={repair} alt="维修图标" /><em>物品出入管理</em></span>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default InOut;