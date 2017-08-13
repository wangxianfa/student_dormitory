import React from 'react';
import './OutsidersRecords.scss';
import axios from 'axios';
import serverConfig from '../../../../config/serverConfig.js'

export default class OutsidersRecords extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			"inOutDetail" : [],
			"filterdorm": '',
			'filterroom': '',
			'orderBy': 'default',
			'page': 1,
			'limit': 20
		};
		this.getRecords = this.getRecords.bind(this)
	}

	componentDidMount() {
		this.getRecords()
	}

	getRecords () {

		axios({
			method: 'GET',
			url: serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/visitor/getrecords',
			params: {
				'dorm': this.state.filterdorm,
				'room': this.state.filterroom,
				'page': this.state.page,
				'limit': this.state.limit,
				'orderBy': this.state.orderBy
			}
		}).then((response) => {
			console.log(response)
			this.setState({
				"inOutDetail": response.data
			})
		})

	}
	

  render() {

  	const { inOutDetail } = this.state;
    const inOutDetailList = inOutDetail.map((elem, index) => {
        return (
            <tr key={index}>
                <td>{elem.visitor}</td>
                <td>{elem.dorm}</td>
                <td>{elem.room}</td>
                <td>{elem.student}</td>
                <td>{elem.sno}</td>
                <td>{elem.inTime}</td>
                <td>{elem.outTime ? "是" : "未离开或未登记"}</td>
                <td>{elem.outTime || "暂无"}</td>
            </tr>
        );
    })

    return (
		<div id="outsidersRecords" className="InOutDetail">
		    <h3>来访记录</h3>
		    <div className="InoutFilter">
		        <p>
		            <span>显示排序：</span>
		            <select onChange={(e) => {
						this.setState({
							'orderBy': e.target.value
						}, () => {
							this.getRecords()
						})	
					}}>
		                <option value="default">------默认------</option>
		                <option value="inTime">------按时间------</option>
		            </select>
		        </p>
		        <p>
		            <span>宿舍筛选：</span>
		            <select onChange={(e) => {
						this.setState({
							'filterdorm': e.target.value
						}, () => {
							this.getRecords()
						})	
					}}>
		                <option value="">------显示所有------</option>
		                <option value="515">------515------</option>
		                <option value="123">------123------</option>
		            </select>
		        </p>
		        <p>
		            <span>楼栋筛选：</span>
		            <select onChange={(e) => {
						this.setState({
							'filterroom': e.target.value
						}, () => {
							this.getRecords()
						})	
					}}>
		                <option value="">------显示所有------</option>
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
