import React from 'react';
import './HealthInspect.css';
import { Link } from "react-router";
import { ajax } from '../../../server/ajax.js';


class HealthInspect extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "dorm" : [],
            "room" : [],
            "healthdetail" : [],
            "currentPage" : 1,
            "pageSize" : 20,
            "orderBy" : "dorm",
            "dorm_filter" : "all",
            "room_filter" : "all"

        };

        this.fetchData = this.fetchData.bind(this);
        this.fetchPrevPage = this.fetchPrevPage.bind(this);
        this.fetchNextPage = this.fetchNextPage.bind(this);
        this.fetchDorm = this.fetchDorm.bind(this);
        this.fetchRoom = this.fetchRoom.bind(this);
    }

    componentDidMount() {
        
        this.fetchData();
        this.fetchDorm();
        this.fetchRoom();

    }

    fetchData(){

        const page = this.state.currentPage;
        const pageSize = this.state.pageSize;
        const orderBy = this.state.orderBy;
        const dorm_filter = this.state.dorm_filter;
        const room_filter = this.state.room_filter;

        ajax({"url": `http://localhost:3000/health?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&dorm_filter=${dorm_filter}&room_filter=${room_filter}`})
        .then((result) => {
            //成功
            var data = JSON.parse(result).data;
            var count = JSON.parse(result).count;


            this.setState({
                "healthdetail" : data,
                "totalPage" : Math.ceil(count/this.state.pageSize)
            })


        }, (err) => {
            //出错
            console.log(err);

        })
    }

    //获取楼栋
    fetchDorm(){
        ajax({"url": `http://localhost:3000/health/fetchdorm`})
        .then((result) => {
            //成功
            var data = JSON.parse(result);
            var dorm = [];

            for (var i = 0; i < data.length; i++) {
                //console.log(data[i])
                dorm.push(data[i].dorm);
            }

            this.setState({
                "dorm" : Array.from(new Set(dorm))
            })

        }, (err) => {
            //出错
            console.log(err);

        })
    }
    
    //获取宿舍
    fetchRoom(){
        const dorm = this.state.dorm_filter;
        ajax({"url": `http://localhost:3000/health/fetchroom?dorm=${dorm}`})
        .then((result) => {
            //成功
            var data = JSON.parse(result);
            var room = [];

            for (var i = 0; i < data.length; i++) {
                //console.log(data[i])
                room.push(data[i].room);
            }

            this.setState({
                "room" : Array.from(new Set(room))
            })

        }, (err) => {
            //出错
            console.log(err);

        })
    }
    
    fetchPrevPage(){

        const page = this.state.currentPage;

        if (page > 1) {
            this.setState({

                "currentPage" : page-1

            },() => {

                //重新发送ajax请求
                this.fetchData();

            })
        }
    }

    fetchNextPage(){

        const page = this.state.currentPage;
        const totalPage = this.state.totalPage;

        if (page < totalPage) {
            this.setState({

                "currentPage" : page + 1

            }, () => {

                this.fetchData();

            })
        }
    }

    render() {

        const { dorm, room, healthdetail , pageSize, currentPage, totalPage} = this.state;

        //console.log(healthdetail)
        const healthdetailList = healthdetail.map((elem, index) => {
            return (
                <tr key={index}>
                    <td>{elem.dorm}</td>
                    <td>{elem.room}</td>
                    <td>{elem.score}</td>
                    <td>卫生状况详情</td>
                    <td><Link to={{
                        "pathname":"/health/indoorscene",
                        "query":{"buidid":elem.bid, "roomid":elem.rid}
                    }}>查看</Link></td>
                    <td>{elem.date_time}</td>
                </tr>
            );
        })

        const dormList = dorm.map((elem, index) => {
            return(
                <option key={index} value={elem}>------{elem}栋------</option>
            )
        })

        const roomList = room.map((elem, index) => {
            return(
                <option key={index} value={elem}>------{elem}------</option>
            )
        })

        return (
            <div className="InOutDetail healthdetail">
                <h3>宿舍检查详情</h3>
                <div className="InoutFilter">
                    <p>
                        <span>显示排序：</span>
                        <select onChange={(e) => {
                            this.setState({
                                "orderBy" : e.target.value
                            }, () => {
                                this.fetchData();
                            })
                        }}>
                            <option value="dorm">------按楼栋------</option>
                            <option value="score">------按得分------</option>
                        </select>
                    </p>
                    <p>
                        <span>楼栋筛选：</span>
                        <select onChange={(e) => {
                            this.setState({
                                "dorm_filter" : e.target.value
                            }, () => {
                                this.fetchData();
                                this.fetchRoom();
                            })
                        }}>
                            <option value="all">------显示所有------</option>
                            {dormList}
                        </select>
                    </p>
                    <p>
                        <span>宿舍筛选：</span>
                        <select onChange={(e) => {
                            this.setState({
                                "room_filter" : e.target.value
                            }, () => {
                                this.fetchData();
                            })
                        }}>
                            <option value="all">------显示所有------</option>
                            {roomList}
                        </select>
                    </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>楼栋号</td>
                            <td>宿舍号</td>
                            <td>整体打分/分</td>
                            <td>备注（扣分点）</td>
                            <td>内景查看</td>
                            <td>时间</td>
                        </tr>
                    </thead>
                    <tbody>{healthdetailList}</tbody>
                </table>
                <ul className="page">
                    <li onClick={this.fetchPrevPage}>前一页</li>
                    <li>{currentPage + ' 页 / ' + totalPage + ' 页 ' }</li>
                    <li onClick={this.fetchNextPage}>后一页</li>
                </ul>
            </div>
        );
    }
}

export default HealthInspect;