import React from 'react';
import './PersonCenter.css';
import personLog from '../../../src/images/personcenter.png';
import messageLog from '../../../src/images/message.png';
import lyf from '../../../src/images/lyf.png';
import set from '../../../src/images/set.png';
import repair from '../../../src/images/repair.png';
import notice from '../../../src/images/notice.png';
import greenlog from '../../../src/images/greenLog.png';


class PersonCenter extends React.Component {

  render() {
    return (
       <div id="personCenter">
            <div id="personHead">
                <div className="topbar">
                    <div className="topLeft">
                        <span>
                            <img src={personLog} alt="个人中心图标" />
                        </span>
                        <ul className="clearfix">
                            <li className="active">个人中心</li>
                            <li>系统首页</li>
                            <li>个人中心</li>
                        </ul>
                    </div>
                    <div className="topRight">
                        <div className="fucList">
                            <span>
                                <img src={messageLog} alt="消息图标" />
                                <b>3</b>
                            </span>
                        </div>
                        <div className="userList">
                            <span>
                                <img src={lyf} alt="people" />
                            </span>
                            <span>欢迎您！王先发</span>
                            <span className="set">
                                <img src={set} alt="set" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main">
                <div className="maintop">
                    <div>
                        <span><img src={notice} alt="个人中心" /></span>
                        <span>个人中心</span>
                    </div>
                    <div>
                        <span><img src={repair} alt="当前位置" /></span>
                        <span>
                            当前位置：
                            <em>首页 > 个人中心</em>
                        </span>
                    </div>
                </div>
                <div className="maincontent clearfix">
                    <div className="mainleft">
                        <span>
                            <img src={lyf} alt="people" />
                        </span>
                        <div className="basemsg">
                            <span><img src={greenlog} alt="people" />基本信息</span>
                            <span><img src={greenlog} alt="people" />个人消息</span>
                        </div>
                    </div>
                    <div className="mainright">
                        
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

export default PersonCenter;