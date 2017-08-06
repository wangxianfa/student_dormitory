import React from 'react';
import './DormDetail.css';
import stuManage from '../../../../src/images/stuMessage.png';
import build from '../../../../src/images/buildLog.png';
import room from '../../../../src/images/room.png';

import Footer from '../../PublicComp/Footer/Footer';

class DormDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "dormIntro":"中南民族大学（英文：South-Central University for Nationalities，缩写：SCUEC、SCUN），简称“中南民大”，是国家民族事务委员会直属的综合性民族大学。学校前身为中南民族学院，创建于1951年，2002年3月更名为中南民族大学。以“笃信好学、自然宽和”为校训。学校位于武汉市洪山区南湖之滨，横跨民族大道，位于武汉“光谷”腹地。占地1446亩，现代化校舍面积68.94万平米，校园内绿树成荫、花香四季，具有浓郁民族特色的现代建筑鳞次栉比、错落有致，湖光山色与人文景观交相辉映。校馆藏图书237.6万册，拥有全国高校第一家民族学博物馆。湖光山色与人文景观交相辉映。校馆藏图书237.6万册，拥有全国高校第一家民族学博物馆。",
            "dormDetail":{
                "whichDorm":"22栋",
                "whichFloor":"7",
                "sex":"男",
                "whoLive":"14级计科男生、15级计科男生",
                "administrators":"王先发",
                "phone":"15677846937"
            }
        }
    }
    render() {
        return (
            <div className="DormDetail">
                <div id="sdhead">
                    <div className="wrap">
                        <span><img src={stuManage} alt="学生宿舍管理log" /></span>
                        <span>学生宿舍管理平台<em>----楼栋详情</em></span>
                    </div>
                </div>
                <div className="ddMain clearfix">
                    <span><img src={build} alt="楼栋" /></span>
                    <div className="dormintro">
                        <h3>&gt; 楼栋介绍</h3>
                        <p>
                            <span>{this.state.dormIntro}</span>
                            <span><img src={room} alt="宿舍内况" /></span>
                        </p>
                    </div>
                    <div className="dormabout">
                        <h3>&gt; 楼栋情况</h3>
                        <p><span>楼栋：</span><em>{this.state.dormDetail.whichDorm}</em></p>
                        <p><span>楼层：</span><em>{this.state.dormDetail.whichFloor}</em></p>
                        <p><span>居住性别：</span><em>{this.state.dormDetail.sex}</em></p>
                        <p><span>居住人员：</span><em>{this.state.dormDetail.whoLive}</em></p>
                        <p><span>楼栋管理员：</span><em>{this.state.dormDetail.administrators}</em></p>
                        <p><span>楼栋电话：</span><em>{this.state.dormDetail.phone}</em></p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DormDetail;