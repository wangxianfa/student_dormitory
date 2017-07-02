import React from 'react';
import './StudentMsg.css';
import {Link} from 'react-router';
import stuManage from '../../../src/images/stuMessage.png';


class StudentMsg extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showShadowDiv : false
        }
    }

    render() {
        return (
            <div className="StudentMsg">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----学生信息管理</em></span>
                    </div>
                </div>
                <div id="smWrap">
                    <nav>
                        <ul>
                            <Link to="/StudentMsg/stumsgSearch">
                                <li>学生信息管理</li>
                            </Link>
                            <Link to="/StudentMsg/checkManage">
                                <li>学生入住管理</li>
                            </Link>
                            <Link to="/StudentMsg/lateManage">
                                <li>学生晚归登记</li>
                            </Link>
                        </ul>
                    </nav>
                    {this.props.children}
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

export default StudentMsg;