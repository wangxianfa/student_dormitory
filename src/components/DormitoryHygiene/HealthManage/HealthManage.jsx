import React from 'react';
import './HealthManage.scss';
// import Loading from '../Loading/Loading.jsx';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

class HealthManage extends React.Component {

    render() {
        return (
            <div id="HealthManage">
                <Header showSecondLevelMenu='1' secondLevelMenu='卫生管理' />
                <p className="important"><span>重要通知：</span><marquee>这里文字是重要通知</marquee></p>
                <div className="health">
                    <div className="repTopbar">
                        <span><img src='/images/repair.png' alt="维修图标" /><em>宿舍卫生管理</em></span>
                    </div>
                    <div>{this.props.children}</div>
                </div>
                <Footer />
                {/*{this.state.loading ? <Loading /> : ""}*/}
            </div>
        );
    }
}

export default HealthManage;