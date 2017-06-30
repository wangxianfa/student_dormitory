import React from 'react';
import './AddStudentMsg.css';

class AddStudentMsg extends React.Component {

    render() {
        return (
            <div className="AddStudentMsg">
                <div className="smdiv">
                    <h3>学生信息添加</h3>
                    <form action="POST">
                        <div className="message_wrap">
                            <p>
                                <span>学号：</span>
                                <input type="text" />
                            </p>
                            <p>
                                <span>姓名：</span>
                                <input type="text" />
                            </p>
                            <p className="sex">
                                <span>性别：</span>
                                <span>
                                    <input name="sex" type="radio" /> 男
                                    <input name="sex" type="radio" /> 女
                                </span>
                            </p>
                            <p>
                                <span>学院：</span>
                                <input type="text" />
                            </p>
                            <p>
                                <span>专业：</span>
                                <input type="text" />
                            </p>
                        </div>
                        <span>
                            <button>添加</button>
                            <button>重置</button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddStudentMsg;