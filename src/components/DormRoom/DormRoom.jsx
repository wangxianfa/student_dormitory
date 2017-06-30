import React from 'react';
import {Link} from 'react-router';
import './DormRoom.css';
import stuManage from '../../../src/images/stuMessage.png';


class DormRoom extends React.Component {
    render() {
        return (
            <div className="DormRoom">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----宿舍信息</em></span>
                    </div>
                </div>
                <div id="roomMain">
                    <nav>
                        <ul>
                            <Link to="/dormRoom/roomsearch">
                                <li>宿舍信息管理</li>
                            </Link>
                            <Link to="/dormRoom/roomfee">
                                <li>学生宿舍缴费</li>
                            </Link>
                        </ul>
                    </nav>
                    <div className="roomContent">
                        <span className="light1"></span>
                        <span className="light2"></span>
                        <div className="room">
                            {this.props.children}
                        </div>
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

export default DormRoom;