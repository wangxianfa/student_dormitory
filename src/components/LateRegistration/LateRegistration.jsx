import React from 'react';
import './LateRegistration.css';
import search from '../../../src/images/search.png';

export default class LateRegistration extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			"lateRegistration" : [
				{
					"sid" : 1,
					"sno" : "201421092075",
					"name" : "王先发",
					"major" : "软件工程",
					"dorm" : "22栋",
					"remarks" : "这是备注这是备注这是备注",
					"datetime" : "2017-4-1 17:23:45"
				},
				{
					"sid" : 2,
					"sno" : "201421092075",
					"name" : "王先发",
					"major" : "软件工程",
					"dorm" : "22栋",
					"remarks" : "这是备注这是备注这是备注",
					"datetime" : "2017-4-1 17:23:45"
				},
				{
					"sid" : 3,
					"sno" : "201421092075",
					"name" : "王先发",
					"major" : "软件工程",
					"dorm" : "22栋",
					"remarks" : "这是备注这是备注这是备注",
					"datetime" : "2017-4-1 17:23:45"
				},
				{
					"sid" : 4,
					"sno" : "201421092075",
					"name" : "王先发",
					"major" : "软件工程",
					"dorm" : "22栋",
					"remarks" : "这是备注这是备注这是备注",
					"datetime" : "2017-4-1 17:23:45"
				}
			]
		}
	}

  render() {

	const { lateRegistration } = this.state;
	const lateRegistrationList = lateRegistration.map((elem,index) =>{
		return (
            <tr key={index}>
                <td>{elem.sno}</td>
                <td>{elem.name}</td>
                <td>{elem.major}</td>
                <td>{elem.dorm}</td>
                <td>{elem.remarks}</td>
                <td>{elem.datetime}</td>
            </tr>
		)
	})

    return (
		<div className="lateRg">
			<h3>晚归情况登记详情</h3>
		    <div className="InoutFilter">
		        <p>
		            <span>显示排序：</span>
		            <select>
		                <option value="time">------按时间------</option>
		                <option value="no">------按学号------</option>
		            </select>
		        </p>
		        <p>
		            <span>显示筛选：</span>
		            <select>
		                <option value="all">------显示所有------</option>
		                <option value="in">------只显示2014级------</option>
		                <option value="out">------只显示2015级------</option>
		            </select>
		        </p>
		        <p>
		            <input type="text" placeholder="要查询的条件" />
		            <span><img src={search} alt="搜索" /></span>
		        </p>
		    </div>
		    <table>
		        <thead>
		            <tr>
		                <td>学号</td>
		                <td>姓名</td>
		                <td>专业</td>
		                <td>楼栋</td>
		                <td>晚归说明</td>
		                <td>时间</td>
		            </tr>
		        </thead>
		        <tbody>{lateRegistrationList}</tbody>
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
