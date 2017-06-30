import React from 'react';
import {Link} from 'react-router';
import './InOutForm.css';


class InOutForm extends React.Component {
    render() {
        return (
            <div className="InOutForm">

                <div className="admitForm">
                    <p><span>姓名：</span><input type="text" /></p>
                    <p><span>学号：</span><input type="text" /></p>
                    <p><span>物品名称：</span><input type="text" /></p>
                    <p><span>出/入楼栋：</span>
                        <select>
                            <option value="1">----1栋</option>
                            <option value="1">----1栋</option>
                        </select>
                    </p>
                    <p><span>出入：</span>
                        <em>
                            <input type="radio" name="inout" value="in"/>带入
                            <input type="radio" name="inout" value="out"/>带出
                        </em>
                    </p>
                    <p><span>备注：</span><textarea></textarea></p>
                    <p>
                        <input type="button" value="保存" />
                        <Link to='/inOut/inoutdetail'>
                            <input type="button" value="查看出入记录" />
                        </Link>
                    </p>
                </div>

            </div>
        );
    }
}

export default InOutForm;