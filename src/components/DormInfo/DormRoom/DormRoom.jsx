import React from 'react';
import {Link} from 'react-router';
import './DormRoom.css';
import stuManage from '../../../../src/images/stuMessage.png';

import Footer from '../../PublicComp/Footer/Footer';

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
                <Footer />
            </div>
        );
    }
}

export default DormRoom;