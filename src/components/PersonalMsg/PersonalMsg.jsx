import React from 'react';
import './PersonalMsg.css';
import stuManage from '../../../src/images/stuMessage.png';
import touxiang from '../../../src/images/touxiang.png';
import { Link } from 'react-router';

export default class PersonalMsg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stumessage : {
            	"img" : "../../../images/touxiang.png",
            	"name": "王先发",
	            "sno": "201421092075",
	            "sex": "男",
	            "age": "46",
	            "grade": "2014级",
	            "class": "4班",
	            "academy": "计算机科学学院",
	            "major": "软件工程",
	            "political_status": "预备党员",
	            "counsellor" : "王珩",
	            "phone" : "13014789562",
	            "dormitory" : "22栋515",
	            "dorm_phone" : "027-8845-6542"
            }
        }
    }

  render() {
    const { stumessage } = this.state;
    return (
      <div className="personalMsg">
			<div id="sdhead">
                <div className="wrap">
                    <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                    <span>学生信息管理平台<em></em></span>
                </div>
            </div>
            <div className="detailmsg">
                <div id="pmsgleft">
                    <span className="personalPicture">
                        <img src={touxiang} alt="头像"/>
                    </span>
                    <div id="pintro">
                        <span>个人介绍：</span>
                        <p>本人性格开朗、稳重、有活力，待人热情、真诚。工作认真负责，积极主动，能吃苦耐劳;喜欢思考，虚心与人交流,以取长补短。有较强的组织能力、实际动手能力和团体协作精神，能迅速的适应各种环境，并融合其中。在实习期间善于把检验结果与病人具体病情结合分析;社会责任感强,踏实肯干,主动争取锻炼机会</p>
                    </div>
                </div>

                <div id="pmsgright">

                    <div className="sdhead">
                        <span>&gt;&gt; 基本信息</span>
                    </div>
                    <div className="basemsg">
                        <p>
                            <span>姓名：</span>
                            <em>{stumessage.name}</em>
                        </p>
                        <p>
                            <span>学号：</span>
                            <em>{stumessage.sno}</em>
                        </p>
                        <p>
                            <span>性别：</span>
                            <em>{stumessage.sex}</em>
                        </p>
                        <p>
                            <span>年龄：</span>
                            <em>{stumessage.age}</em>
                        </p>
                        <p>
                            <span>年级：</span>
                            <em>{stumessage.grade}</em>
                        </p>
                        <p>
                            <span>班级：</span>
                            <em>{stumessage.class}</em>
                        </p>
                        <p>
                            <span>学院：</span>
                            <em>{stumessage.academy}</em>
                        </p>
                        <p>
                            <span>专业：</span>
                            <em>{stumessage.major}</em>
                        </p>
                        <p>
                            <span>政治面貌：</span>
                            <em>{stumessage.political_status}</em>
                        </p>
                        <p>
                            <span>辅导员：</span>
                            <em>{stumessage.counsellor}</em>
                        </p>
                        <p>
                            <span>联系电话：</span>
                            <em>{stumessage.phone}</em>
                        </p>
                    </div>

                    <div className="sdhead">
                        <span>&gt;&gt; 晚归记录</span>
                    </div>
                    <div className="lateRc">
                    
                    </div>

                    <div className="sdhead">
                        <span>&gt;&gt; 物品出入记录</span>
                    </div>
                    <div className="inoutRc">

                    </div>
                </div>

                <div className="clearfix"></div>
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
