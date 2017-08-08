import React from 'react';
import './InOut.scss';

import Footer from '../../PublicComp/Footer/Footer';

class InOut extends React.Component {
    render() {
        return (
            <div className="InOut">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src='/images/stuMessage.png' alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----出入管理</em></span>
                    </div>
                </div>
                <div id="inOut">
                    <div className="repTopbar">
                        <span><img src='/images/repair.png' alt="维修图标" /><em>物品出入管理</em></span>
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