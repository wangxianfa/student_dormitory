import React from 'react';
import './PersonalMsg.css';
import stuManage from '../../../src/images/stuMessage.png';
import touxiang from '../../../src/images/touxiang.png';

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
    return (
      <div className="personalMsg">
			<div id="sdhead">
                <div className="wrap">
                    <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                    <span>学生信息管理平台<em></em></span>
                </div>
            </div>
            <div className="detailmsg">
            	
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
