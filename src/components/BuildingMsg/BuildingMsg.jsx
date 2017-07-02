import React from 'react';
import './BuildingMsg.css';
import {Link} from 'react-router';
import search from '../../../src/images/search.png';


class BuildingMsg extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            buildingMsg : [
                {
                    "bid": 22,
                    "sex": "男"
                },
                {
                    "bid": 21,
                    "sex": "女"
                }
            ]
        }
    }

    render() {

        const { buildingMsg } = this.state;

        const buildingMsgList = buildingMsg.map((elem,index)=>{
            return (
                <tr key={elem.bid}>
                    <td>{elem.bid}</td>
                    <td>{elem.sex}</td>
                    <td><Link to={{
                        "pathname":"/dormDetail",
                        "query":{"buildid":elem.bid}
                    }}>查看</Link></td>
                </tr>
            )
        })

        return (
            <div className="BuildingMsg">
                <div className="breadNav">
                    <span>当前位置：</span>
                    <ol>
                        <li>学生宿舍管理平台</li>
                        <em>&gt;</em>
                        <li>楼栋信息</li>
                    </ol>
                </div>
                <div className="buildingMsg">
                    <div className="sdhead">
                        <span>&gt; 楼栋信息</span>
                        <span>更多 &gt;&gt;</span>
                    </div>
                    <div className="buildingMain">
                        <div className="buildSearch">
                            <div className="filter">
                                <div className="buildName">
                                    <span>楼栋查询：</span>
                                    <form>
                                        <select >
                                            <option value="1">----1栋</option>
                                            <option value="22">----22栋</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="btn">
                                    <span><img src={search} alt="搜索" /></span>
                                    <em>查询</em>
                                </div>
                            </div>
                        </div>
                        <div className="searchResult">
                            <div className="sdhead">
                                <span>&gt; 查询结果</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>查询楼栋</td>
                                        <td>居住性别</td>
                                        <td>楼栋介绍</td>
                                    </tr>
                                </thead>
                                <tbody>{buildingMsgList}</tbody>
                            </table>
                            <div className="page">
                                <span data-page="0">首页</span>
                                <span data-page="0">上一页</span>
                                <span className="active" data-page="0">1</span>
                                <span data-page="0">2</span>
                                <span data-page="0">下一页</span>
                                <span data-page="0">末页</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuildingMsg;