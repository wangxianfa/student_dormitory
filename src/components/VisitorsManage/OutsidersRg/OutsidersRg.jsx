import React from 'react';
import './OutsidersRg.scss';
import { Link } from 'react-router';
import axios from 'axios';
import serverConfig from '../../../../config/serverConfig.js'

import Success from '../../PublicComp/Success/Success'
import Warning from '../../PublicComp/Warning/Warning'

export default class OutsidersRg extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			'visitor': '',
			'dorm': '-1',
			'room': '-1',
			'student': '',
			'sno': '',
			'warn' : false,
			'success': false
		};
		this.saveRecords = this.saveRecords.bind(this);
	}

	saveRecords () {

		const {visitor, dorm, room, student, sno} = this.state;

		if( visitor && dorm !== '-1' && room !== '-1' && student && sno ){

			axios({
				method: 'POST',
				url: serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/visitor/saverecords',
				data: {
					'visitor': visitor,
					'dorm': dorm,
					'room': room,
					'student': student,
					'sno': sno
				},
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then((response) => {
				console.log(response)
				this.setState({
					'visitor': '',
					'dorm': '-1',
					'room': '-1',
					'student': '',
					'sno': ''
				}, () => {
					this.setState({'success': true})
					setTimeout(() => {
						this.setState({
							'success': false
						})
					}, 3000)
				})
			})

		} else {

			this.setState({
				'warn' : true
			}, () => {

				setTimeout(() => {
					this.setState({
						'warn': false
					})
				}, 3000)

			})

		}

	}

  render() {
		const {visitor, dorm, room, student, sno, warn, success } = this.state;

    return (
        <div className="outsidersRg">
        	<h3>来访人员登记</h3>
					{
						warn ?
						<Warning warnmsg='请把信息填写完整...' /> : ''
					}
					{
						success ?
						<Success successMsg='数据保存成功...' /> : ''
					}
        	<p>
        		<span>来访者姓名：</span>
        		<input value={visitor} onChange={(e) => {
							this.setState({
								'visitor': e.target.value
							})
						}} type="text" />
        	</p>
        	<p>
        		<span>楼栋：</span>
        		<select value={dorm} onChange={(e) => {
							this.setState({
								'dorm': e.target.value
							})	
						}} name="dorm">
							<option value="-1">--------楼栋选择</option>
							<option value="1">--------1栋</option>
							<option value="2">--------2栋</option>
        		</select>
        	</p>
        	<p>
        		<span>来访宿舍：</span>
        		<select value={room} onChange={(e) => {
							this.setState({
								'room': e.target.value
							})	
						}} name="room">
							<option value="-1">--------宿舍选择</option>
							<option value="510">--------510</option>
							<option value="511">--------511</option>
        		</select>
        	</p>
        	<p>
        		<span>学生姓名：</span>
        		<input value={student} onChange={(e) => {
							this.setState({
								'student': e.target.value
							})	
						}} type="text" />
        	</p>
        	<p>
        		<span>学生学号：</span>
        		<input value={sno} onChange={(e) => {
							this.setState({
								'sno': e.target.value
							})	
						}} type="text" />
        	</p>
        	<p>
        		<button onClick={this.saveRecords}>保存</button>
        		<Link to="/outsiders/outsidersRecords">
        			<button>查看来访记录</button>
        		</Link>
        	</p>
        </div>
    );
  }
}
