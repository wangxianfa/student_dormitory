import React from 'react';
import './Student_dormitory.scss';
import {Link} from 'react-router';

import Header from '../PublicComp/Header/Header';
import Footer from '../PublicComp/Footer/Footer';
import QrImage from '../PublicComp/QrImage/QrImage';

class StudentDormitory extends React.Component {
    render() {
        return (
            <div id="StudentDormitory">
                <Header showSecondLevelMenu='0' />
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
                                <span className="searchImg"><img src='/images/search.png' alt="搜索" /></span>
                            </p>
                            <div className="Link">
                                <h4>友情链接</h4>
                                <p>保卫处电话：027-25486897</p>
                                <p>校医院电话：027-25486897</p>
                                <p>
                                    <em>学校官方宿舍管理官方群：</em>
                                    <QrImage />
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
                                {/* <Link  activeClassName="active" to="/studentDormitory/dormEmployee">
                                    <li>员工信息</li>
                                </Link> */}
                                <Link  activeClassName="active" to="/studentDormitory/buildingMsg">
                                    <li>楼栋信息</li>
                                </Link>
                            </ul>
                            <div className="pics">
                                <span><img src='/images/dormitory.png' alt="学生宿舍" /></span>
                            </div>
                            {this.props.children}
                        </div>
                    </nav>
                </div>
                <Footer />
            </div>
        );
    }
}

export default StudentDormitory;