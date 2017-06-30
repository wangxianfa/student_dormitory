import React from 'react';
import './IndoorScene.css';
import room from '../../../src/images/room.png';


class IndoorScene extends React.Component {

    render() {
        return (
                <div>
                    <div className="InOutDetail indoorDetail">
                        <h3>宿舍内景一览</h3>
                        <div className="indoorDetail">
                            <span><img src={room} alt="宿舍内景" /><em>图一</em></span>
                            <span><img src={room} alt="宿舍内景" /><em>图二</em></span>
                            <span><img src={room} alt="宿舍内景" /><em>图三</em></span>
                            <span><img src={room} alt="宿舍内景" /><em>图四</em></span>
                        </div>
                        <div className="evaluate">
                            <h3>检查情况：</h3>
                            <ol>
                                <li>这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况</li>
                                <li>这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况</li>
                                <li>这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况这是检查情况</li>
                            </ol>
                        </div>
                    </div>
                </div>
        );
    }
}

export default IndoorScene;