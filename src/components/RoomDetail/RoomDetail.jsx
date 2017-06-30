import React from 'react';
import './RoomDetail.css';
import room from '../../../src/images/room.png';


class RoomDetail extends React.Component {
    render() {
        return (
            <div id="RoomDetail">
                <div className="roommessage">
                    <h3>宿舍信息详情</h3>
                    <div className="roomdetail">
                        <p><span>楼栋号：</span><em>22栋</em></p>
                        <p><span>门牌号：</span><em>515</em></p>
                        <p><span>可住人数：</span><em>6人</em></p>
                        <p><span>实住人数：</span><em>6人</em></p>
                        <p><span>住宿费用/年：</span><em>1200元</em></p>
                        <p><span>联系电话：</span><em>12345678901</em></p>
                        <p><span>宿舍口号：</span><em>宿舍口号宿舍口号宿舍口号宿舍口号</em></p>
                        <p><span>宿舍内景：</span></p>
                        <span><img src={room} alt="宿舍内景" /><em>图(1)</em></span>
                        <span><img src={room} alt="宿舍内景" /><em>图(2)</em></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomDetail;