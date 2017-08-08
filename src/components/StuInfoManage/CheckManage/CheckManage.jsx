import React from 'react';
import './CheckManage.scss';
import { Link } from "react-router";


class CheckManage extends React.Component {
    render() {
        return (

            <div className="smContent">
                <div className="smdiv">
                    <h3>学生入住查询</h3>
                    <div className="sdsearch">
                        <p>
                            <span>按专业：<select name="stuSearh">
                                <option value="-1">不限</option>
                                <option value="1">软件工程</option>
                                <option value="2">电信专业</option>
                            </select></span>
                            <span>按年级：<select name="stuSearh">
                                <option value="-1">不限</option>
                                <option value="1">2014级</option>
                                <option value="2">2015级</option>
                            </select></span>
                            <Link to={{
                                "pathname" : "/studentMsg/StuDormMsg",
                                "query" : {}
                            }}>
                                <span className="btn">
                                    <span><img src='/images/search.png' alt="搜索" /></span>
                                    <em>查询</em>
                                </span>
                            </Link>
                        </p>
                    </div>
                    <p>
                        <Link to="/StudentMsg/addcheckinMsg">
                            <span><img src='/images/edit.png' alt="学生宿舍管理log" /></span>
                            <em>添加入住信息</em>
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default CheckManage;