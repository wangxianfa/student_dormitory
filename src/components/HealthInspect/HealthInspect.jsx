import React from 'react';
import './HealthInspect.css';
import { Link } from "react-router";


class HealthInspect extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "healthdetail" : [
                {
                    "bid" : 22,
                    "rid" : 515,
                    "score" : 9.5,
                    "remarks" : "这是备注这是备注这是备注",
                    "datetime" : "2017-4-1 17:23:45"
                },
                {
                    "bid" : 21,
                    "rid" : 515,
                    "score" : 9.5,
                    "remarks" : "这是备注这是备注这是备注",
                    "datetime" : "2017-4-1 17:23:45"
                },
                {
                    "bid" : 20,
                    "rid" : 515,
                    "score" : 9.5,
                    "remarks" : "这是备注这是备注这是备注",
                    "datetime" : "2017-4-1 17:23:45"
                },
                {
                    "bid" : 23,
                    "rid" : 515,
                    "score" : 9.5,
                    "remarks" : "这是备注这是备注这是备注",
                    "datetime" : "2017-4-1 17:23:45"
                }
            ]
        }
    }

    render() {

        const { healthdetail } = this.state;
        const healthdetailList = healthdetail.map((elem, index) => {
            return (
                <tr key={index}>
                    <td>{elem.bid}</td>
                    <td>{elem.rid}</td>
                    <td>{elem.score}</td>
                    <td>{elem.remarks}</td>
                    <td><Link to={{
                        "pathname":"/health/indoorscene",
                        "query":{"buidid":elem.bid, "roomid":elem.rid}
                    }}>查看</Link></td>
                    <td>{elem.datetime}</td>
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
                    <li>前一页</li>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>后一页</li>
                </ul>
            </div>
        );
    }
}

export default HealthInspect;