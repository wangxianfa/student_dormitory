import React from 'react';
import './EmployeeMsg.scss';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

class EmployeeMsg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                        "name": "王先发",
                        "staffNo": "201421092075",
                        "position": "楼栋管理员",
                        "sex": "男",
                        "age": "46",
                        "whichDorm": "22栋",
                        "whichFloor": "1、2、3层",
                        "id": "012************567",
                        "phone": "01234567890",
                        "address": "武汉市洪山区中南民族大学武汉市洪山区中南民族大学"
                    }
    }
    componentDidMount() {
        const jobNom = window.location.search.split("=")[1];
        fetch('http://localhost/student_dormitory/public/dbFile/getEmployeeMsg.php',{
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: 'jobNom=' + jobNom
            })
            .then(
                (response) => {
                    console.log(response.headers.get('Content-Type'));
                    console.log(response.headers.get('Date'));
                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.type);
                    console.log(response.url);
                    return response.json()
                }
            )
            .then(
                (data) => {
                    this.setState(data)
                }
            )


    }
    render() {
        return (
            <div className="EmployeeMsg">
                <Header showSecondLevelMenu='1' secondLevelMenu='员工详情'/>
                <div className="employeeDetail">
                    <span className="touxiang"><img src='/images/touxiang.png' alt="头像" /><em>{this.state.name}</em></span>
                    <div className="EmployeeMsgl">
                        <h3>员工信息</h3>
                        <p><span>姓名：</span><em>{this.state.name}</em></p>
                        <p><span>职工号：</span><em>{this.state.staffNo}</em></p>
                        <p><span>职位：</span><em>{this.state.position}</em></p>
                        <p><span>性别：</span><em>{this.state.sex}</em></p>
                        <p><span>年龄：</span><em>{this.state.age}</em></p>
                    </div>
                    <div className="EmployeeMsgb">
                        <p><span>负责楼栋：</span><em>{this.state.whichDorm}</em></p>
                        <p><span>负责楼层：</span><em>{this.state.whichFloor}</em></p>
                        <p><span>身份证号：</span><em>{this.state.id}</em></p>
                        <p><span>联系电话：</span><em>{this.state.phone}</em></p>
                        <p><span>家庭住址：</span><em>{this.state.address}</em></p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default EmployeeMsg;