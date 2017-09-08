import React from 'react';
import './Login.scss';
import axios from 'axios';
import { browserHistory } from 'react-router';
import serverConfig from '../../../../config/serverConfig.js';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'stu_no': '',
            'password': '',
            'stu_noMsg': '',
            'passdMsg': '',
            'passdfocus': false
        }
        this.loginClick = this.loginClick.bind(this)
        this.transiformPass = this.transiformPass.bind(this)
    }

    loginClick() {
        if (!this.state.stu_no) {
            this.setState({
                'stu_noMsg': '请先输入登录账号'
            })
        } else if (!this.state.password) {
            this.setState({
                'passdMsg': '请输入密码'
            })
        } else {

            axios.post(serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/login', {
                    'username': this.state.stu_no,
                    'password': this.state.password
                }).then((response) => {
                console.log(response)

                if (JSON.parse(JSON.stringify(response.data)).content) {
                    sessionStorage.setItem('token', JSON.parse(JSON.stringify(response.data)).content)
                    browserHistory.push({
                        'pathname': '/'
                    })
                } else {
                    alert('验证失败')
                }
            })

        }

    }

    transiformPass() {

        let total = '';
        this.state.password.split('').reduce((element) => {
            total += '*'
        }, '')

        this.setState({
            'transferedPsw': total
        })
    }

    render() {
        const { stu_no, password, stu_noMsg, passdMsg, transferedPsw } = this.state;
        return (
            <div id="Login">
                <div className="loginDiv box-reflect">
                    <h3>宿舍管理系统统一认证</h3>
                    <label>
                        <input
                            value={stu_no}
                            onChange={(e) => {
                                this.setState({
                                    'stu_no': e.target.value,
                                    'stu_noMsg': ''
                                })
                            }}
                            type="text"
                            placeholder="校园卡卡号"
                        ></input>
                    </label>
                    {
                        stu_noMsg ?
                            <p>{stu_noMsg}</p> : ''
                    }
                    <label>
                        <input
                            type="password"
                            placeholder="密码"
                            value={password}
                            onChange={(e) => {
                                this.setState({
                                    'password': e.target.value,
                                    'passdMsg': ''
                                }, () => {
                                    this.transiformPass()
                                })
                            }}
                        ></input>
                    </label>
                    {
                        passdMsg ?
                            <p>{passdMsg}</p> : ''
                    }
                    <span>忘记密码？</span>
                    <p>
                        <input
                            type="button"
                            onClick={this.loginClick}
                            value="登录"></input>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;