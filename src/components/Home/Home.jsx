import React from 'react';
import {Link} from 'react-router';
import './Home.css';
import log from '../../../src/images/log.png';
import arowRight from '../../../src/images/arrow_right.png';
import dormitory from '../../../src/images/dormitory.png';
import notice from '../../../src/images/notice.png';


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "dormnews" : [
                {
                    "dnid" : 1,
                    "ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
                    "datetime" : "2015-01-06 17:54:17"
                },
                {
                    "dnid" : 2,
                    "ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
                    "datetime" : "2015-01-06 17:54:17"
                }
            ],
            "schoolnews" : [
                {
                    "snid" : 3,
                    "ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知"
                },
                {
                    "snid" : 4,
                    "ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知"
                }
            ]
        }
    }

    render() {

        const { dormnews , schoolnews } = this.state;
        const dormnewsList = dormnews.map((elem,index) =>{
            return (
                <li key={index}>
                    <Link to={{
                        "pathname" : "/announcement/newsDetail",
                        "query" : { "newid" : elem.dnid}
                    }}>
                        <span>{elem.ntitle}</span>
                    </Link>
                    <time>{elem.datetime}</time>
                </li>
            )
        })

        const schoolnewsList = schoolnews.map((elem,index) =>{
            return (
                <li key={index}>
                    <Link to={{
                        "pathname" : "/announcement/newsDetail",
                        "query" : { "newid" : elem.snid}
                    }}>
                        <span>关于2015届春季毕业生离校和办理延期延派住宿手续的通知</span>
                    </Link>
                </li>
            )
        })

        return (
            <div className="Home">
                <div className="container">
                    <p className="important"><span>重要通知：</span><marquee>这里文字是重要通知</marquee></p>
                    <header>
                        <div className="headContent">
                            <span><img src={log} alt="log"/></span>
                            <h1>学生宿舍管理系统</h1>
                            <span className="help">
                                <em>帮助</em>
                                <em>关于</em>
                            </span>
                        </div>
                    </header>
                    <div id="homeMain">
                        <ul className="navTabs">
                            <Link to="/">
                                <li>首页 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                            <Link to='/studentDormitory'>
                                <li>学生宿舍信息管理 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                            <Link to="/inOut">
                                <li>贵重物品出入 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                            <Link to="/outsiders">
                                <li>访客信息管理 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                            <Link to="/health">
                                <li>宿舍卫生 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                            <Link to="/announcement">
                                <li>公告通知 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                            <Link to='/personcenter'>
                                <li>用户个人 <span><img src={arowRight} alt="右箭头" /></span></li>
                            </Link>
                        </ul>
                        <div className="pics">
                            <span><img src={dormitory} alt="图片墙" /></span>
                        </div>
                    </div>
                    <div id="bottom">
                        <div className="tongZhi">
                            <div className="tongzhiHead">
                                <span><img src={notice} alt="通知" /><em>宿舍公告</em></span>
                                <Link to={{
                                    "pathname" : "/announcement/schoolNews",
                                    "query" : {"selected" : 2}
                                }}>
                                    <span>More >></span>
                                </Link>
                            </div>
                            <div className="neirong">{dormnewsList}</div>
                        </div>
                        <div className="news">
                            <div className="tongzhiHead">
                                <span><img src={notice} alt="通知" /><em>学校要闻</em></span>
                                <Link to={{
                                    "pathname" : "/announcement/schoolNews",
                                    "query" : {"selected" : 1}
                                }}>
                                    <span>More >></span>
                                </Link>
                            </div>
                            <div className="neirong">{schoolnewsList}</div>
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

export default Home;