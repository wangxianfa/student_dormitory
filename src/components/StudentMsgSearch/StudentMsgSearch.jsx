import React from 'react';
import './StudentMsgSearch.css';
import search from '../../../src/images/search.png';
import edit from '../../../src/images/edit.png';
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
                                <span>按学号查找：<input type="text"></input></span>
                                <span className="btn">
                                    <span><img src={search} alt="搜索" /></span>
                                    <em>查询</em>
                                </span>
                            </p>
                        </div>
                        <p>
                            <Link to="/StudentMsg/addstuMsg">
                                <span><img src={edit} alt="学生添加" /></span>
                                <em>学生信息添加</em>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentMsgSearch;