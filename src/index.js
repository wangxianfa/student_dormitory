import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

// 项目主页
import Home from './components/Home/Home';

// 内部主页
import StudentDormitory from './components/Student_dormitory/Student_dormitory';

// 认证
import Login from './components/Certification/Login/Login';

// 内部主页
import SDHome from './components/StuDormHome/SDHome/SDHome';

// 学生信息管理
import StudentMsg from './components/StuInfoManage/StudentMsg/StudentMsg';
import StudentMsgSearch from './components/StuInfoManage/StudentMsgSearch/StudentMsgSearch';
import LateManage from './components/StuInfoManage/LateManage/LateManage';
import LateRegistration from './components/StuInfoManage/LateRegistration/LateRegistration';
import AddStudentMsg from './components/StuInfoManage/AddStudentMsg/AddStudentMsg.jsx';
import AddCheckinMsg from './components/StuInfoManage/AddCheckinMsg/AddCheckinMsg.jsx';
import StudentsFilter from './components/StuInfoManage/StudentsFilter/StudentsFilter';
import StudentDormMsg from './components/StuInfoManage/StudentDormMsg/StudentDormMsg';
import CheckManage from './components/StuInfoManage/CheckManage/CheckManage';
import PersonalMsg from './components/StuInfoManage/PersonalMsg/PersonalMsg';

// 公物报修
import DormRepair from './components/RepairService/DormRepair/DormRepair';

// 宿舍信息
import DormRoom from './components/DormInfo/DormRoom/DormRoom';
import RoomDetail from './components/DormInfo/RoomDetail/RoomDetail';
import ElectricityPayment from './components/DormInfo/ElectricityPayment/ElectricityPayment';
import RoomMseeageSearch from './components/DormInfo/RoomMseeageSearch/RoomMseeageSearch';
import RoomFee from './components/DormInfo/RoomFee/RoomFee';

// 员工信息
import DormEmployee from './components/StaffsInfo/DormEmployee/DormEmployee';
import EmployeeMsg from './components/StaffsInfo/EmployeeMsg/EmployeeMsg';

// 楼栋信息
import BuildingMsg from './components/BuildingInfo/BuildingMsg/BuildingMsg';
import DormDetail from './components/BuildingInfo/DormDetail/DormDetail';

// 贵重物品出入
import InOut from './components/Valuables/InOut/InOut';
import InOutForm from './components/Valuables/InOutForm/InOutForm';
import InOutDetail from './components/Valuables/InOutDetail/InOutDetail';

// 宿舍卫生
import HealthManage from './components/DormitoryHygiene/HealthManage/HealthManage';
import IndoorScene from './components/DormitoryHygiene/IndoorScene/IndoorScene';
import HealthInspect from './components/DormitoryHygiene/HealthInspect/HealthInspect';

//通知公告
import Announcement from './components/NoticeAndAnnouncement/Announcement/Announcement';
import SchoolNews from './components/NoticeAndAnnouncement/SchoolNews/SchoolNews';
import NewsDetail from './components/NoticeAndAnnouncement/NewsDetail/NewsDetail';


//外来人员来访
import OutsidersVisit from './components/VisitorsManage/OutsidersVisit/OutsidersVisit';
import OutsidersRg from './components/VisitorsManage/OutsidersRg/OutsidersRg';
import OutsidersRecords from './components/VisitorsManage/OutsidersRecords/OutsidersRecords';

//个人中心
import PersonCenter from './components/PersonCenter/PersonCenter';

// 没有权限访问
import NoPermission from './components/PublicComp/No_Permission/No_Permission';


//引入子路由

// import { home, studentDormitory, sdHome, dormEmployee, buildingMsg } from './requireChunks.jsx';


function requireCredentials(nextState, replace, next) {
    console.log("路由权限控制");
    console.log(nextState)
    if (false) {
        fetch("")
            .then(
                () => next(), //通过next()成功跳转
                () => {
                    replace('/home') //重定向
                    next()
                }
            )
    } else {
        replace('/login')
        next()
    }
}


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path='studentDormitory' component={StudentDormitory}>
            <IndexRoute component={SDHome} />
            <Route path='sdHome' component={SDHome} />
            <Route path='dormEmployee' component={DormEmployee} />
            <Route path="buildingMsg" component={BuildingMsg} />
        </Route>
        <Route path='dormDetail' component={DormDetail} />
        <Route path='employeeMsg' component={EmployeeMsg} />
        <Route path='dormRoom' component={DormRoom}>
            <IndexRoute component={RoomMseeageSearch} />
            <Route path="roomsearch" component={RoomMseeageSearch} />
            <Route path="roomDetail" component={RoomDetail} />
            <Route path="roomfee" component={RoomFee} />
            <Route path="electricityPay" component={ElectricityPayment} />
        </Route>
        <Route path='studentMsg' component={StudentMsg}>
            <IndexRoute component={StudentMsgSearch} />
            <Route path="checkManage" component={CheckManage} />
            <Route path="lateManage" component={LateManage} />
            <Route path="stumsgSearch" component={StudentMsgSearch} />
            <Route path="addstuMsg" component={AddStudentMsg} />
            <Route path="addcheckinMsg" component={AddCheckinMsg} />
            <Route path="lateRg" component={LateRegistration} />
            <Route path="stusFilter" component={StudentsFilter} />
            <Route path="StuDormMsg" component={StudentDormMsg} />
        </Route>
        <Route path='personalMsg' component={PersonalMsg} />
        <Route path='dormRepair' component={DormRepair} />
        <Route path='health' component={HealthManage} >
            <IndexRoute component={HealthInspect} />
            <Route path='inspect' component={HealthInspect} />
            <Route path='indoorscene' component={IndoorScene} />
        </Route>
        <Route path='inOut' component={InOut}>
            <IndexRoute component={InOutForm} />
            <Route path='inoutform' component={InOutForm} />
            <Route path='inoutdetail' component={InOutDetail} />
        </Route>
        <Route path='login' component={Login} />
        {/* onEnter={requireCredentials} */}
        <Route path='personcenter' component={PersonCenter} onEnter={requireCredentials} />
        <Route path='announcement' component={Announcement} >
            <IndexRoute component={SchoolNews} />
            <Route path="schoolNews" component={SchoolNews} />
            <Route path="newsDetail" component={NewsDetail} />
        </Route>
        <Route path="outsiders" component={OutsidersVisit}>
            <IndexRoute component={OutsidersRg} />
            <Route path="outsidersRg" component={OutsidersRg} />
            <Route path="outsidersRecords" component={OutsidersRecords} />
        </Route>
        <Route path='nopermission' component={NoPermission} />
    </Router>
), document.getElementById('root'));