import React from 'react';
import './LateManage.css';
import { Link } from "react-router";


class LateManage extends React.Component {
    render() {
        return (
            <div className="LateManage">
                <div className="smdiv">
                    <h3>学生晚归登记</h3>
                    <div className="checkForm">
                        <p>
                            <span>学生学号：<input type="text"></input></span>
                            <span>学生姓名：<input type="text"></input></span>
                            <span>晚归说明：<textarea></textarea></span>
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