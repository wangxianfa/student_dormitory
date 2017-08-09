import React from 'react';
import './SDHome.scss';
import { Link } from 'react-router';

class SDHome extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "schoolnews" : [
                {
                    "snid" : "1",
                    "ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
                    "datetime" : "2015-01-06 17:54:17"
                },
                {
                    "snid" : "2",
                    "ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
                    "datetime" : "2015-01-06 17:54:17"
                }
            ]
        }   
    }

    render() {

        const { schoolnews } = this.state;
        const schoolnewsList = schoolnews.map((elem,index)=>{
            return (
                <li key={index}>
                    <Link to={{
                        "pathname" : "/announcement/newsDetail",
                        "query" : {"newid" : elem.snid}
                    }}>
                        <span className="glyphicon glyphicon-triangle-right">{elem.ntitle}</span>
                    </Link>
                    <time>{elem.datetime}</time>
                </li>
            )
        });

        return (
            <div className="SDHome">
                <div className="sdTongzhi">
                    <div className="sdhead">
                        <span>&gt; 通知公告</span>
                        <Link to={{
                            "pathname" : "/announcement/schoolNews",
                            "query" : {"selected" : 3}
                        }}>
                            <span>更多 &gt;&gt;</span>
                        </Link>
                    </div>
                    <div className="neirong">{schoolnewsList}</div>
                </div>
                <div className="shortIntroduce">
                    <div className="introHead">
                        <span>&gt; 平台简介</span>
                    </div>
                    <div className="introMain">
                        <p>
                            <span>
                            中南民族大学是一所直属国家民族事务委员会的综合性普通高等院校，坐落于白云黄鹤的故乡——武汉南湖之滨。学校前身为中南民族学院，创建于1951年，2002年3月更名为中南民族大学。建校以来，学校始终坚持社会主义办学方向，贯彻落实党的教育方针和民族政策，始终坚持党的民族工作规律与高等教育规律相结合，民族高等教育的特殊性与普通高等教育的普遍性相结合，遵循高等教育的普遍规律，尊重民族高等教育的特殊性，努力探索办好民族院校的新路子，学校的各项事业获得了快速发展。
                            </span>
                            <span className="image"><img src='/images/sdImage.png' alt="iamge" /></span>
                            <span>
                            中南民族大学是一所直属国家民族事务委员会的综合性普通高等院校，坐落于白云黄鹤的故乡——武汉南湖之滨。学校前身为中南民族学院，创建于1951年，2002年3月更名为中南民族大学。建校以来，学校始终坚持社会主义办学方向，贯彻落实党的教育方针和民族政策，始终坚持党的民族工作规律与高等教育规律相结合，民族高等教育的特殊性与普通高等教育的普遍性相结合，遵循高等教育的普遍规律，尊重民族高等教育的特殊性，努力探索办好民族院校的新路子，学校的各项事业获得了快速发展。
                            </span>
                            <span>
                            中南民族大学是一所直属国家民族事务委员会的综合性普通高等院校，坐落于白云黄鹤的故乡——武汉南湖之滨。学校前身为中南民族学院，创建于1951年，2002年3月更名为中南民族大学。建校以来，学校始终坚持社会主义办学方向，贯彻落实党的教育方针和民族政策，始终坚持党的民族工作规律与高等教育规律相结合，民族高等教育的特殊性与普通高等教育的普遍性相结合，遵循高等教育的普遍规律，尊重民族高等教育的特殊性，努力探索办好民族院校的新路子，学校的各项事业获得了快速发展。
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SDHome;