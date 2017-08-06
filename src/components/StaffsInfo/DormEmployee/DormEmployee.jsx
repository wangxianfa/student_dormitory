import React from 'react';
import './DormEmployee.css';
import {Link} from 'react-router';
import search from '../../../../src/images/search.png';


class DormEmployee extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            employee:
            [
                {
                    jobNom:"201421092075",
                    name:"王先发",
                    sex:"男",
                    whichDorm:"22栋"
                },
                {
                    jobNom:"201421092076",
                    name:"王先发",
                    sex:"男",
                    whichDorm:"22栋"
                }
            ]
        }
    }
    render() {
        const {employee} = this.state;
        const employeeList = employee.map((elem) => {
            return(<tr key={elem.jobNom}><td>{elem.jobNom}</td><td>{elem.name}</td><td>{elem.sex}</td><td>{elem.whichDorm}</td><td><Link to={{pathname:'/employeeMsg',query:{jobNom:elem.jobNom}}}>查看</Link></td></tr>)
        })
        console.log(employeeList)
        return (
            <div className="DormEmployee">
                <div className="breadNav">
                    <span>当前位置：</span>
                    <ol>
                        <li>学生宿舍管理平台</li>
                        <em>&gt;</em>
                        <li>员工信息</li>
                    </ol>
                </div>
                <div className="buildingMsg">
                    <div className="sdhead">
                        <span>&gt; 员工信息</span>
                        <span>更多 &gt;&gt;</span>
                    </div>
                    <div className="buildingMain employeeMsg">
                        <div className="buildSearch employeeSearch">
                            <div className="filter">
                                <div className="buildName">
                                    <span>按楼栋查询：</span>
                                    <form>
                                        <select >
                                            <option value="1">----1栋</option>
                                            <option value="22">----22栋</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="buildName">
                                    <span>按工号查询：</span>
                                    <input type="text" placeholder="要查询的职工号" />
                                </div>
                            </div>
                            <div className="position">
                                <span>员工职位：</span>
                                <input type="radio" name="sex" />楼栋管理员
                                <input type="radio" name="sex" />楼栋清洁员
                            </div>
                            <div className="btn">
                                <span><img src={search} alt="搜索" /></span>
                                <em>查询</em>
                            </div>
                        </div>
                        <div className="searchResult">
                            <div className="sdhead">
                                <span>&gt; 查询结果</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>职工号</td>
                                        <td>姓名</td>
                                        <td>性别</td>
                                        <td>所属楼栋</td>
                                        <td>详情介绍</td>
                                    </tr>
                                </thead>
                                <tbody>{employeeList}</tbody>
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

export default DormEmployee;