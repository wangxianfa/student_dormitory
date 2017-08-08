import React from 'react';
import './AddCheckinMsg.scss';

class AddCheckinMsg extends React.Component {

    render() {
        return (

            <div className="smContent">
                <div className="smdiv">
                    <h3>学生入住信息添加</h3>
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
                            <p>
                                <span>年级：</span>
                                <select>
                                    <option>------2014级------</option>
                                    <option>------2015级------</option>
                                    <option>------2016级------</option>
                                </select>
                            </p>
                            <p>
                                <span>楼栋：</span>
                                <select>
                                    <option>------20栋------</option>
                                    <option>------21栋------</option>
                                    <option>------22栋------</option>
                                </select>
                            </p>
                            <p>
                                <span>宿舍：</span>
                                <select>
                                    <option>------515------</option>
                                    <option>------428------</option>
                                    <option>------419------</option>
                                </select>
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

export default AddCheckinMsg;