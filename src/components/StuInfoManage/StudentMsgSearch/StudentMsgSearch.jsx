import React from 'react';
import './StudentMsgSearch.scss';
import { Link } from 'react-router';

class StudentMsgSearch extends React.Component {

    render() {
        return (
            <div className="smContent">
                <div className="CheckManage">
                    <div className="smdiv">
                        <h3>学生信息查询</h3>
                        <div className="sdsearch">
                            <p>
                                <span>按专业：<select name="stuSearh">
                                    <option value="-1">默认</option>
                                    <option value="1">软件工程</option>
                                    <option value="2">电信专业</option>
                                </select></span>
                                <span>按年级：<select name="stuSearh">
                                    <option value="-1">默认</option>
                                    <option value="1">2014级</option>
                                    <option value="2">2015级</option>
                                </select></span>
                            </p>
                        </div>
                        <p>
                            <Link to={{
                                        "pathname" : "/studentMsg/stusFilter",
                                        "query" : {}
                                    }}>
                                <span className="btn">
                                    <span><img src='/images/search.png' alt="搜索" /></span>
                                    <em>查询</em>
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentMsgSearch;