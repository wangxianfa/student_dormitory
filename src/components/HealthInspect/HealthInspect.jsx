import React from 'react';
import './HealthInspect.css';
import { Link } from "react-router";
import { ajax } from '../../../server/ajax.js';


class HealthInspect extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "healthdetail" : [],
            "currentPage" : 1,
            "pageSize" : 20

        };
        this.fetchData = this.fetchData.bind(this);
        this.fetchPrevPage = this.fetchPrevPage.bind(this);
        this.fetchNextPage = this.fetchNextPage.bind(this);
    }

    componentDidMount() {
        
        const page = this.state.currentPage;
        const pageSize = this.state.pageSize;
        this.fetchData(page, pageSize);

    }

    fetchData(page, pageSize){

        ajax({"url": `http://localhost:3000/health?page=${page}&pageSize=${pageSize}`})
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
    
    fetchPrevPage(){
        const page = this.state.currentPage;
        if (page > 1) {
            this.setState({
                "currentPage" : page-1
            },() => {

                //重新发送ajax请求
                const page = this.state.currentPage;
                const pageSize = this.state.pageSize;
                this.fetchData(page, pageSize);

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

                const page = this.state.currentPage;
                const pageSize = this.state.pageSize;
                this.fetchData(page, pageSize);

            })
        }
    }

    render() {

        const { healthdetail , pageSize, currentPage, totalPage} = this.state;

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

        return (
            <div className="InOutDetail healthdetail">
                <h3>宿舍检查详情</h3>
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