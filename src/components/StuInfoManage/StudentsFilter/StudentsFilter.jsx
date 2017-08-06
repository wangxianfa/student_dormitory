import React from 'react';
import './StudentsFilter.css';
import search from '../../../../src/images/search.png';
import { Link } from 'react-router';

export default class StudentsFilter extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			"studentMessage" : [
				{
					"sid" : 1,
					"sno" : "201421092075",
					"name" : "王先发",
					"sex" : "男",
					"grade" : "2014级",
					"major" : "软件工程"
				},
				{
					"sid" : 2,
					"sno" : "201421092075",
					"name" : "王先发",
					"sex" : "男",
					"grade" : "2014级",
					"major" : "软件工程"
				},
				{
					"sid" : 3,
					"sno" : "201421092075",
					"name" : "王先发",
					"sex" : "男",
					"grade" : "2014级",
					"major" : "软件工程"
				},
				{
					"sid" : 4,
					"sno" : "201421092075",
					"name" : "王先发",
					"sex" : "男",
					"grade" : "2014级",
					"major" : "软件工程"
				}
			]
		}
	}

  render() {

	const { studentMessage } = this.state;
	const studentMessageList = studentMessage.map((elem,index) =>{
		return (
            <tr key={index}>
                <td>{elem.sno}</td>
                <td>{elem.name}</td>
                <td>{elem.sex}</td>
                <td>{elem.grade}</td>
                <td>{elem.major}</td>
                <td>
	                <Link to={{
	                	"pathname" : "/personalMsg",
	                	"query" : {"sno" : elem.sno}
	                }}>查看
	                </Link>
                </td>
            </tr>
		)
	})

    return (
		<div className="smContent">
			<div className="lateRg">
				<h3>学生基本信息</h3>
			    <div className="InoutFilter">
			        <p>
			            <span>显示排序：</span>
			            <select>
			                <option value="time">------按年级------</option>
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
			                <td>性别</td>
			                <td>年级</td>
			                <td>专业</td>
			                <td>操作</td>
			            </tr>
			        </thead>
			        <tbody>{studentMessageList}</tbody>
			    </table>
			    <ul className="page">
			        <li>前一页</li>
			        <li className="active">1</li>
			        <li>2</li>
			        <li>后一页</li>
			    </ul>
			</div>
		</div>
    );
  }
}
