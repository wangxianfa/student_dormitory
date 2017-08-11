import React from 'react';
import './ElectricityPayment.scss';


export default class ElectricityPayment extends React.Component {

  render() {
    return (
		<div className="electricityPayment">
			<h3>电费缴纳详情</h3>
		    <div className="InoutFilter">
		        <p>
		            <span>显示排序：</span>
		            <select>
		                <option value="time">------按楼栋------</option>
		                <option value="no">------按用电量------</option>
		            </select>
		        </p>
		        <p>
		            <span>年份：</span>
		            <select>
		                <option value="all">---显示所有</option>
		                <option value="in">---2014年度</option>
		                <option value="out">---2015年度</option>
		            </select>
		            <span>月份：</span>
		            <select>
		                <option value="all">----显示所有</option>
		                <option value="in">----1月份</option>
		                <option value="out">----2月份</option>
		            </select>
		        </p>
		        <p>
		            <input type="text" placeholder="要查询的条件" />
		            <span onClick={()=>{
		            	alert(1)
		            }}><img src='/images/search.png' alt="搜索" /></span>
		        </p>
		    </div>
		    <table>
		        <thead>
		            <tr>
		                <td>楼栋号</td>
		                <td>宿舍号</td>
		                <td>月份</td>
		                <td>用电量</td>
		                <td>电价/°</td>
		                <td>应缴电费</td>
		                <td>实缴电费</td>
		                <td>缴费人</td>
		            </tr>
		        </thead>
		        <tbody>
		            <tr>
		                <td>22栋</td>
		                <td>515</td>
		                <td>1月</td>
		                <td>100</td>
		                <td>0.5</td>
		                <td>50</td>
		                <td>50</td>
		                <td>王先发</td>
		            </tr>
		            <tr>
		                <td>22栋</td>
		                <td>515</td>
		                <td>1月</td>
		                <td>100</td>
		                <td>0.5</td>
		                <td>50</td>
		                <td>50</td>
		                <td>王先发</td>
		            </tr>
		            <tr>
		                <td>22栋</td>
		                <td>515</td>
		                <td>1月</td>
		                <td>100</td>
		                <td>0.5</td>
		                <td>50</td>
		                <td>50</td>
		                <td>王先发</td>
		            </tr>
		            <tr>
		                <td>22栋</td>
		                <td>515</td>
		                <td>1月</td>
		                <td>100</td>
		                <td>0.5</td>
		                <td>50</td>
		                <td>50</td>
		                <td>王先发</td>
		            </tr>
		            <tr>
		                <td>22栋</td>
		                <td>515</td>
		                <td>1月</td>
		                <td>100</td>
		                <td>0.5</td>
		                <td>50</td>
		                <td>50</td>
		                <td>王先发</td>
		            </tr>
		            <tr>
		                <td>22栋</td>
		                <td>515</td>
		                <td>1月</td>
		                <td>100</td>
		                <td>0.5</td>
		                <td>50</td>
		                <td>50</td>
		                <td>王先发</td>
		            </tr>
		        </tbody>
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
