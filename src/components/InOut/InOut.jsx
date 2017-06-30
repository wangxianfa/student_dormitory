import React from 'react';
import './InOut.css';
import stuManage from '../../../src/images/stuMessage.png';
import repair from '../../../src/images/repair.png';


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

export default InOut;