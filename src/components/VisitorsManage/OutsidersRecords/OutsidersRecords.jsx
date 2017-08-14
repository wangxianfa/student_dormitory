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
			'limit': 20,
			'dorm': [],
			'room': []
		};
		this.getRecords = this.getRecords.bind(this);
		this.getRoomByDorm = this.getRoomByDorm.bind(this);
		this.getDorm = this.getDorm.bind(this);
	}

	componentDidMount() {
		this.getRecords()
		this.getDorm()
		this.getRoomByDorm()
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
			// console.log(response)
			this.setState({
				"inOutDetail": response.data
			})
		})

	}

	getRoomByDorm () {
		axios({
			method: 'GET',
			url: serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/visitor/getroombydorm',
			params: {
				dorm: this.state.filterdorm
			}
		}).then((response) => {
			// console.log(response)
			let room = []
			for (var index = 0; index < response.data.length; index++) {
				room.push(response.data[index].room)
			}
			// console.log(room)
			this.setState({'room': Array.from(new Set(room))},() => {
				this.getRecords()
			})
		})
	}

	getDorm () {
		axios({
			method: 'GET',
			url: serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/visitor/getdorm',
		}).then((response) => {
			// console.log(response)
			let dorm = []
			for (var index = 0; index < response.data.length; index++) {
				dorm.push(response.data[index].dorm)
			}
			// console.log(dorm)
			this.setState({
				'dorm': Array.from(new Set(dorm))
			},() => {
				this.getRecords()
			})
		})
	}
	

  render() {

	const { inOutDetail, dorm, room, filterdorm, filterroom } = this.state;
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
	
	const dormList = dorm.map((elem, index) => {
		return (
			<option key={index} value={elem}>{'------' + elem + '栋------'}</option>
		)
	})

	const roomList = room.map((elem, index) => {
		return (
			<option key={index} value={elem}>{'------' + elem + '------'}</option>
		)
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
		                <option value="dorm">------按楼栋------</option>
		                <option value="room">------按宿舍------</option>
		            </select>
		        </p>
		        <p>
		            <span>楼栋筛选：</span>
		            <select value={filterdorm} onChange={(e) => {
						this.setState({
							'filterdorm': e.target.value,
							'filterroom': ''
						}, () => {
							this.getRoomByDorm()
						})	
					}}>
		                <option value="">------显示所有------</option>
		                {dormList}
		            </select>
		        </p>
		        <p>
		            <span>宿舍筛选：</span>
		            <select value={filterroom} onChange={(e) => {
						this.setState({
							'filterroom': e.target.value
						}, () => {
							this.getRecords()
						})	
					}}>
		                <option value="">------显示所有------</option>
		                {roomList}
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
