import React from 'react';
import './Login.scss';


class Login extends React.Component {
    render() {
        return (
            <div id="Login">
                <div className="loginDiv box-reflect">
                    <h3>宿舍管理系统统一认证</h3>
                    <label>
                        <input type="text" placeholder="校园卡卡号"></input>
                    </label>
                    <label>
                        <input type="password" placeholder="密码"></input>
                    </label>
                    <span>忘记密码？</span>
                    <p>
                        <input type="button" value="登录"></input>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;