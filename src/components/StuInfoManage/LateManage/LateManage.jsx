import React from 'react';
import './LateManage.scss';
import { Link } from "react-router";


class LateManage extends React.Component {
    render() {
        return (
            <div className="smContent">
                <div className="smdiv">
                    <h3>学生晚归登记</h3>
                    <div className="checkForm">
                        <p>
                            <span><em>学生学号：</em><input type="text"></input></span>
                            <span><em>学生姓名：</em><input type="text"></input></span>
                            <span><em>专业：</em><input type="text"></input></span>
                            <span>
                                <em>楼栋：</em>
                                <select name="dorm">
                                    <option value="1">1栋</option>
                                    <option value="2">2栋</option>
                                </select>
                            </span>
                            <span><em>晚归说明：</em><textarea></textarea></span>
                        </p>
                        <div className="doBtn">
                            <div className="save">
                                <span></span>
                                <em>保存</em>
                            </div>
                            <Link to="/studentMsg/lateRg">
                                <button>查看所有</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LateManage;