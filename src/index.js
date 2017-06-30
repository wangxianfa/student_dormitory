import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Home from './components/Home/Home';
import StudentDormitory from './components/Student_dormitory/Student_dormitory';
import SDHome from './components/SDHome/SDHome';
import BuildingMsg from './components/BuildingMsg/BuildingMsg';
import StudentMsg from './components/StudentMsg/StudentMsg';
import AddStudentMsg from './components/AddStudentMsg/AddStudentMsg.jsx';
import AddCheckinMsg from './components/AddCheckinMsg/AddCheckinMsg.jsx';
import DormRepair from './components/DormRepair/DormRepair';
import DormEmployee from './components/DormEmployee/DormEmployee';
import DormRoom from './components/DormRoom/DormRoom';
import CheckManage from './components/CheckManage/CheckManage';
import LateManage from './components/LateManage/LateManage';
import Login from './components/Login/Login';
import RoomMseeageSearch from './components/RoomMseeageSearch/RoomMseeageSearch';
import RoomFee from './components/RoomFee/RoomFee';
import DormDetail from './components/DormDetail/DormDetail';
import EmployeeMsg from './components/EmployeeMsg/EmployeeMsg';
import InOut from './components/InOut/InOut';
import HealthManage from './components/HealthManage/HealthManage';
import InOutForm from './components/InOutForm/InOutForm';
import InOutDetail from './components/InOutDetail/InOutDetail';
import RoomDetail from './components/RoomDetail/RoomDetail';
import HealthInspect from './components/HealthInspect/HealthInspect';
import IndoorScene from './components/IndoorScene/IndoorScene';
import StudentMsgSearch from './components/StudentMsgSearch/StudentMsgSearch';
import LateRegistration from './components/LateRegistration/LateRegistration';
import ElectricityPayment from './components/ElectricityPayment/ElectricityPayment';

//个人中心
import PersonCenter from './components/PersonCenter/PersonCenter';


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
        </Route>
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
        <Route path='personcenter' component={PersonCenter} onEnter={requireCredentials}/>

    </Router>
), document.getElementById('root'));