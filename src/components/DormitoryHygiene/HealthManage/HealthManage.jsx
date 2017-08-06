import React from 'react';
import './HealthManage.css';
import stuManage from '../../../../src/images/stuMessage.png';
import repair from '../../../../src/images/repair.png';
// import Loading from '../Loading/Loading.jsx';

import Footer from '../../PublicComp/Footer/Footer';

class HealthManage extends React.Component {

    render() {
        return (
            <div id="HealthManage">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----宿舍卫生管理</em></span>
                    </div>
                </div>
                <p className="important"><span>重要通知：</span><marquee>这里文字是重要通知</marquee></p>
                <div className="health">
                    <div className="repTopbar">
                        <span><img src={repair} alt="维修图标" /><em>宿舍卫生管理</em></span>
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