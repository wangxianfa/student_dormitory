import React from 'react';
import './DormRepair.scss';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

class DormRepair extends React.Component {
    render() {
        return (
            <div className="DormRepair">
                <Header showSecondLevelMenu='1' secondLevelMenu='公物维修' />
                <div id="repairMain">
                    <div className="repTopbar">
                        <span><img src='/images/repair.png' alt="维修图标" /><em>报修系统</em></span>
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
                <Footer />
            </div>
        );
    }
}

export default DormRepair;