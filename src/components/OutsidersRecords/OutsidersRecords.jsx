import React from 'react';
import './OutsidersRecords.css';
import search from '../../../src/images/search.png';

export default class OutsidersRecords extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		    "inOutDetail" : [
		        {
		            "vid" : 1,
		            "visit_name" : "王小军",
		            "dorm" : "22栋",
		            "room" : "515",
		            "stu_name" : "王先发",
		            "sno" : "201421092075",
		            "datetime" : "2017-4-1 17:23:45",
		            "leave" : false,
		            "leave_datatime" : "2017-4-1 17:23:45"
		        },
		        {
		            "vid" : 2,
		            "visit_name" : "王小军",
		            "dorm" : "22栋",
		            "room" : "515",
		            "stu_name" : "王先发",
		            "sno" : "201421092075",
		            "datetime" : "2017-4-1 17:23:45",
		            "leave" : true,
		            "leave_datatime" : "2017-4-1 17:23:45"
		        },
		        {
		            "vid" : 3,
		            "visit_name" : "王小军",
		            "dorm" : "22栋",
		            "room" : "515",
		            "stu_name" : "王先发",
		            "sno" : "201421092075",
		            "datetime" : "2017-4-1 17:23:45",
		            "leave" : true,
		            "leave_datatime" : "2017-4-1 17:23:45"
		        }
	 		]
 		}
	}

  render() {

  	const { inOutDetail } = this.state;
    const inOutDetailList = inOutDetail.map((elem, index) => {
        return (
            <tr key={index}>
                <td>{elem.visit_name}</td>
                <td>{elem.dorm}</td>
                <td>{elem.room}</td>
                <td>{elem.stu_name}</td>
                <td>{elem.sno}</td>
                <td>{elem.datetime}</td>
                <td>{elem.leave ? "是" : "未离开或未登记"}</td>
                <td>{elem.leave_datatime}</td>
            </tr>
        );
    })

    return (
		<div id="outsidersRecords" className="InOutDetail">
		    <h3>来访记录</h3>
		    <div className="InoutFilter">
		        <p>
		            <span>显示排序：</span>
		            <select>
		                <option value="time">------默认------</option>
		                <option value="time">------按时间------</option>
		            </select>
		        </p>
		        <p>
		            <span>楼栋筛选：</span>
		            <select>
		                <option value="all">------显示所有------</option>
		                <option value="in">------22栋------</option>
		                <option value="out">------21栋------</option>
		            </select>
		        </p>
		    </div>
		    <table>
		        <thead>
		            <tr>
		                <td>来访者姓名</td>
		                <td>楼栋</td>
		                <td>宿舍</td>
		                <td>接入学生</td>
		                <td>学生学号</td>
		                <td>进入时间</td>
		                <td>是否离开</td>
		                <td>离开时间</td>
		            </tr>
		        </thead>
		        <tbody>{inOutDetailList}</tbody>
		    </table>
		    <ul className="page">
		        <li>前一页</li>
		        <li className="active">1</li>
		        <li>2</li>
		        <li>后一页</li>
		    </ul>
		</div>
    );
  }
}
