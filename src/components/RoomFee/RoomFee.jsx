import React from 'react';
import './RoomFee.css';
import { Link } from "react-router";

import Loading from '../../Loading/Loading';


class RoomFee extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showLoading : false
        }
    }

    render() {
        return (
            <div className="RoomFee">
                <div className="roommessage">
                    <h3>电费信息查看</h3>
                    <div className="feeMessage">
                        <p><span>楼栋：</span><em>22栋</em></p>
                        <p><span>寝室：</span><em>515</em></p>
                        <p><span>本月至今用电：</span><em>64度</em></p>
                        <p><span>电价：</span><em>1.5元/度</em></p>
                        <p><span>本月应交：</span><em>0.00元</em></p>
                        <p>
                            <button onClick={()=>{
                                this.setState({
                                    showLoading:true
                                })
                            }}>缴费</button>
                            <Link to="/dormRoom/electricityPay">
                                <button>缴费记录</button>
                            </Link>
                        </p>
                        <p>缴费日期为每月的1~5日，逾期不缴的作停电处理...</p>
                    </div>
                </div>
                {
                    this.state.showLoading ?
                    <Loading /> : ""
                }
            </div>
        );
    }
}

export default RoomFee;