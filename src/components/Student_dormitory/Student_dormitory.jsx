import React from 'react';
import './Student_dormitory.css';
import {Link} from 'react-router';
import stuManage from '../../../src/images/stuMessage.png';
import dormitory from '../../../src/images/dormitory.png';
import erweima from '../../../src/images/二维码.png';
import search from '../../../src/images/search.png';

class StudentDormitory extends React.Component {
    render() {
        return (
            <div id="StudentDormitory">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台</span>
                    </div>
                </div>
                <div className="container">
                    <nav id="sdTop" className="clearfix">
                        <div className="left">
                            <span className="zhezhi"></span>
                            <div className="login">
                                <h4>用户登录</h4>
                                <form>
                                    <p>用户名：<input type="text" name="username" /></p>
                                    <p>密 &nbsp;&nbsp;&nbsp;码：<input type="password" name="psw" /></p>
                                    <Link to="#"><span>忘记密码？</span></Link>
                                    <input type="button" value="登录" />
                                </form>
                            </div>
                            <p className="search">
                                <em>站内搜索：</em>
                                <input type="text" placeholder="输入宿舍编号或名称" />
                                <span className="searchImg"><img src={search} alt="搜索" /></span>
                            </p>
                            <div className="Link">
                                <h4>友情链接</h4>
                                <p>保卫处电话：027-25486897</p>
                                <p>校医院电话：027-25486897</p>
                                <p>
                                    <em>学校官方宿舍管理微信：</em>
                                    <span><img src={erweima} alt="二维码" /></span>
                                    <em>扫码关注</em>
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <ul className="nav">
                                <Link  activeClassName="active" to="/studentDormitory/sdHome">
                                    <li>主页</li>
                                </Link>
                                <Link  activeClassName="active" to="/studentMsg">
                                    <li>学生信息管理</li>
                                </Link>
                                <Link  activeClassName="active" to="/dormRepair">
                                    <li>宿舍公务报修</li>
                                </Link>
                                <Link  activeClassName="active" to="/dormRoom">
                                    <li>宿舍信息</li>
                                </Link>
                                <Link  activeClassName="active" to="/studentDormitory/dormEmployee">
                                    <li>员工信息</li>
                                </Link>
                                <Link  activeClassName="active" to="/studentDormitory/buildingMsg">
                                    <li>楼栋信息</li>
                                </Link>
                            </ul>
                            <div className="pics">
                                <span><img src={dormitory} alt="学生宿舍" /></span>
                            </div>
                            {this.props.children}
                        </div>
                    </nav>
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

export default StudentDormitory;