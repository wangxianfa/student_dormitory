import React from 'react';
import './CheckManage.css';
import search from '../../../src/images/search.png';
import edit from '../../../src/images/edit.png';
import { Link } from "react-router";


class CheckManage extends React.Component {
    render() {
        return (
            <div className="CheckManage">
                <div className="smdiv">
                    <h3>学生入住查询</h3>
                    <div className="sdsearch">
                        <p>
                            <span>按学号查找：<input type="text"></input></span>
                            <span className="btn">
                                <span><img src={search} alt="搜索" /></span>
                                <em>查询</em>
                            </span>
                        </p>
                    </div>
                    <p>
                        <Link to="/StudentMsg/addcheckinMsg">
                            <span><img src={edit} alt="学生宿舍管理log" /></span>
                            <em>添加入住信息</em>
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default CheckManage;