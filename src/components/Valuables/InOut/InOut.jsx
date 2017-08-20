import React from 'react';
import './InOut.scss';
import '../../../common/styles/RepTopbar.scss';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

class InOut extends React.Component {
    render() {
        return (
            <div className="InOut">
                <Header showSecondLevelMenu='1' secondLevelMenu='出入管理'/>
                <div id="inOut">
                    <div className="repTopbar">
                        <span><img src='/images/repair.png' alt="维修图标" /><em>物品出入管理</em></span>
                    </div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default InOut;