import React from 'react';
import './HealthManage.css';
import stuManage from '../../../src/images/stuMessage.png';
import repair from '../../../src/images/repair.png';
// import Loading from '../Loading/Loading.jsx';


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
                {/*{this.state.loading ? <Loading /> : ""}*/}
            </div>
        );
    }
}

export default HealthManage;