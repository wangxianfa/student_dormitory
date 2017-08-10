import React from 'react';
import {Link} from 'react-router';
import './DormRoom.scss';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

class DormRoom extends React.Component {
    render() {
        return (
            <div className="DormRoom">
                <Header showSecondLevelMenu='1' secondLevelMenu='宿舍信息' />
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