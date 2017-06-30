import React from 'react';
import './DormRepair.css';
import stuManage from '../../../src/images/stuMessage.png';
import repair from '../../../src/images/repair.png';

class DormRepair extends React.Component {
    render() {
        return (
            <div className="DormRepair">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----公务维修</em></span>
                    </div>
                </div>
                <div id="repairMain">
                    <div className="repTopbar">
                        <span><img src={repair} alt="维修图标" /><em>报修系统</em></span>
                    </div>
                    <div className="repairForm">
                        <h3>请先填写报修表单</h3>
                        <div className="repairdetail clearfix">
                            <div className="formleft">
                                <p>
                                    <span>宿舍楼：</span>
                                    <select>
                                        <option value="1">----请选择----</option>
                                        <option value="1">----1栋</option>
                                        <option value="2">----22栋</option>
                                    </select>
                                </p>
                                <p>
                                    <span>房间号：</span>
                                    <input type="text" placeholder="阿拉伯数字" />
                                </p>
                                <p>
                                    <span>报修项目：</span>
                                    <select>
                                        <option value="1">----请选择----</option>
                                        <option value="1">----1栋</option>
                                        <option value="2">----22栋</option>
                                    </select>
                                </p>
                                <p>
                                    <span>学号：</span>
                                    <input type="text" />
                                </p>
                                <p>
                                    <span>姓名：</span>
                                    <input type="text" />
                                </p>
                                <p>
                                    <span>联系电话：</span>
                                    <input type="text" placeholder="联系电话" />
                                </p>
                            </div>
                            <div className="formright">
                                <p>
                                    <span>问题详情描述：</span>
                                    <textArea></textArea>
                                </p>
                                <p>
                                    <span>在宿舍时间：</span>
                                    <select>
                                        <option value="1">----请选择----</option>
                                        <option value="1">----1栋</option>
                                        <option value="2">----22栋</option>
                                    </select>
                                    <span>
                                        <label>
                                            <input type="checkbox" name="time" />8:00-10:00
                                        </label>
                                        <label>
                                            <input type="checkbox" name="time" />10:30-12:00
                                        </label>
                                        <label>
                                            <input type="checkbox" name="time" />14:00-16:00
                                        </label>
                                        <label>
                                            <input type="checkbox" name="time" />16:30-18:00
                                        </label>
                                    </span>
                                    <span>
                                        <em>--备注</em>
                                        <input type="text" />
                                    </span>
                                </p>
                            </div>
                            <p>
                                <button>提交</button>
                                <input type="reset" value="重置" />
                            </p>
                        </div>
                    </div>
                    <div className="repairs">
                        <h3>报修公示</h3>
                        <div className="repairContent">
                            <ul>
                                <li>
                                    <p>来自<span>鹏翔2斋</span><span>622</span>的<span>焦健</span>同学 报修了<span>电灯</span></p>
                                    <p>描述说：“<span>电灯脱落</span>”</p>
                                    <p>TA于<span>2016-10-09</span> 报修，<span>正在等待解决</span></p>
                                </li>
                                <li>
                                    <p>来自<span>鹏翔2斋</span><span>622</span>的<span>焦健</span>同学 报修了<span>电灯</span></p>
                                    <p>描述说：“<span>电灯脱落</span>”</p>
                                    <p>TA于<span>2016-10-09</span> 报修，<span>正在等待解决</span></p>
                                </li>
                            </ul>
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

export default DormRepair;