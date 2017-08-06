import React from 'react';
import './NewsDetail.css';
import { Link } from "react-router";

export default class NewsDetail extends React.Component {

	componentDidMount() {
		this.setState({
			"newid" : this.props.location.query.newid
		},()=>{
			//发送ajax请求，获得数据
			const newid = this.state.newid;
		})
	}

  render() {
    return (
    	<div>
			<nav id="nav">
			    <ul>
			    	<Link to={{
			    		"pathname" : "/announcement/schoolNews",
			    		"query" : {"selected" : 1}
			    	}}>
			    		<li>学校要闻</li>
			    	</Link>
			    	<Link to={{
			    		"pathname" : "/announcement/schoolNews",
			    		"query" : {"selected" : 2}
			    	}}>
			    		<li>宿舍公告</li>
			    	</Link>
			    	<Link to={{
			    		"pathname" : "/announcement/schoolNews",
			    		"query" : {"selected" : 3}
			    	}}>
			    		<li>学校公告</li>
			    	</Link>
			    </ul>
			</nav>
			<div className="NewsDetail clearfix">
				<h3>关于2015届春季毕业生离校和办理延期延派住宿手续的通知</h3>
				<p><time>2015-01-06 09:54:17</time></p>
				<div className="newContent">
					<p>各位2015届春季毕业生同学：</p>
					<p>1月20日毕业典礼后学校将组织集中派遣，因毕业生主要为2012级两年半学制硕士生，上半年部分宿舍闲置，出于人性化考虑，学校为延期答辩和因后续课题补充工作、找工作等延派学生提供临时住宿，但考虑到管理问题和节约成本要在离校进行适当整合安排。
请已在学院辅导员处登记申请延期、延派住宿的同学按照以下流程及时间进行办理：</p>
					<p>1月14日（周三）上午8：30——1月16日（周五）下午5：30期间在网上交费，具体操作流程请访问http://www.twt.edu.cn/suguan在“通知通告”中下载《天津大学网上缴费系统使用说明》，交费确认后，持研究生证于1月19日（周一）——1月21日（周三）到宿舍管理科（2教212）领取住宿通知单。</p>
					<p>已办理延期、延派临时住宿的同学领导住宿通知单后如涉及搬迁青提前与原住宿同学的沟通，1月23日搬至所集中安排的宿舍，搬迁过程注意提前尽量避免产生摩擦。未办理住宿的毕业生请于1月23日中午前将床位腾出，钥匙交至所在楼值班室，按时离校。1月24日将对未安排住宿人员毕业生宿舍进行清理。</p>
					<p>祝各位毕业生同学前程似锦！</p>
					<div className="footer">
						<div className="from">学工部  园区中心
						<time>2014-1-6</time></div>
					</div>
				</div>          
			</div>
    	</div>
    );
  }
}
