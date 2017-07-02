import React from 'react';
import './OutsidersRg.css';
import { Link } from 'react-router';

export default class OutsidersRg extends React.Component {

  render() {
    return (
        <div className="outsidersRg">
        	<h3>来访人员登记</h3>
        	<p>
        		<span>来访者姓名：</span>
        		<input type="text"/>
        	</p>
        	<p>
        		<span>楼栋：</span>
        		<select name="dorm">
					<option value="1">--------1栋</option>
					<option value="2">--------2栋</option>
        		</select>
        	</p>
        	<p>
        		<span>来访宿舍：</span>
        		<select name="room">
					<option value="1">--------510</option>
					<option value="2">--------511</option>
        		</select>
        	</p>
        	<p>
        		<span>学生姓名：</span>
        		<input type="text"/>
        	</p>
        	<p>
        		<span>学生学号：</span>
        		<input type="text"/>
        	</p>
        	<p>
        		<button>保存</button>
        		<Link to="/outsiders/outsidersRecords">
        			<button>查看来访记录</button>
        		</Link>
        	</p>
        </div>
    );
  }
}
