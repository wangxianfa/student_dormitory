import React from 'react';
import './SchoolNews.css';
import { Link } from "react-router";
// import stuManage from '../../../src/images/stuMessage.png';
import notice from '../../../src/images/notice.png';

export default class SchoolNews extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			"news":[
				{
					"nid" : 1,
					"ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
					"datetime" : "2015-01-06 09:54:17"
				},
				{
					"nid" : 2,
					"ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
					"datetime" : "2015-01-06 09:54:17"
				},
				{
					"nid" : 3,
					"ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
					"datetime" : "2015-01-06 09:54:17"
				},
				{
					"nid" : 4,
					"ntitle" : "关于2015届春季毕业生离校和办理延期延派住宿手续的通知",
					"datetime" : "2015-01-06 09:54:17"
				}
			],
			"selected" : 1
		};

		this.setSelected = this.setSelected.bind(this);
	}

	componentDidMount() {
		const selected = this.props.location.query.selected || 1;
		this.setState({
			"page" : this.refs.page.value
		},()=>{
			this.setSelected(selected)
		})
	}

	setSelected(index){

		this.setState({
			"selected" : parseInt(index,10)
		},()=>{
			//发送请求，获得数据
			console.log(index);
		})
	}

  render() {

	const { news , selected , page} = this.state;
	const newsList = news.map((elem,index) => {
		return (
			<Link key={index} to={{
				"pathname" : "/announcement/newsDetail",
				"query" : { "newid" : elem.nid}
			}}>
				<li><span><em></em>{elem.ntitle}</span><time>{elem.datetime}</time></li>
			</Link>
		)
	});
	const myselected = selected === 1 ? "学校要闻" : selected === 2 ? "宿舍公告" : selected === 3 ? "学校公告" : "" ;

    return (
    	<div>
            <nav id="nav">
                <ul>
                	<li onClick={this.setSelected.bind(this,1)}>学校要闻</li>
                	<li onClick={this.setSelected.bind(this,2)}>宿舍公告</li>
                	<li onClick={this.setSelected.bind(this,3)}>学校公告</li>
                </ul>
            </nav>
	      	<div className="health">
	            <div className="repTopbar">
	                <span><img src={notice} alt="通知图标" /><em>>>{myselected}</em></span>
	            </div>
	            <div>
					<ul>
						{newsList}
					</ul>
					<div className="topage">
						<em>&lt;&lt;&lt; {page} &gt;&gt;&gt;</em>
						<span>
							<em>跳至</em>
							<select ref="page" defaultValue="1" onChange={(e)=>{
								this.setState({
									"page" : e.target.value
								},()=>{
									//发送ajax请求，获得相应数据
								})
							}}>
								<option value="1">第 1 页</option>
								<option value="2">第 2 页</option>
								<option value="3">第 3 页</option>
								<option value="4">第 4 页</option>
							</select>
							<em>页</em>
						</span>
					</div>
	            </div>
	        </div>
    	</div>
    );
  }
}
