import React from 'react';
import {Link} from 'react-router';
import './InOutForm.scss';
import axios from 'axios';
import serverConfig from '../../../../config/serverConfig.js'

import Warning from '../../PublicComp/Warning/Warning'
import Success from '../../PublicComp/Success/Success'


class InOutForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'student': '',
            'sno': '',
            'itemName': '',
            'dorm': '1',
            'inORout': '-1',
            'message': '',
            'warn': false,
            'success': false,
            'warnmsg': '数据保存出错，请重试...',
            'shadow': false
        }
        this.saveRecords = this.saveRecords.bind(this)
    }

    componentDidMount() {
        this.setState({
            'dorm': this.refs.dorm.value,
            'inORout': this.refs.inout.value
        })
    }


    saveRecords(){
        const {student, sno, itemName, dorm, inORout, message} = this.state

        if (student && sno && itemName && dorm && inORout) {
            axios({
                method: 'POST',
                url: serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/inout/saveinoutrecord',
                data: {
                    student: student,
                    sno: sno,
                    itemName: itemName,
                    dorm: dorm,
                    inORout: inORout,
                    message: message
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then((response) => {
                console.log(response)
                if (response.data === 1) {
                    this.setState({
                        'student': '',
                        'sno': '',
                        'itemName': '',
                        'dorm': this.refs.dorm.value,
                        'inORout': this.refs.inout.value,
                        'message': '',
                        'success': true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                'success': false
                            })
                        }, 3000)
                    })
                }
            })
        } else {
            this.setState({
                'warn': true,
                'warnmsg': '请将表单填写完整...'
            }, () => {
                setTimeout(() => {
                    this.setState({
                        'warn': false
                    })
                }, 3000)
            })
        }

    }

    render() {
        const {student, sno, itemName, dorm, inORout, message, warn, success, warnmsg, shadow} = this.state
        return (
            <div className="InOutForm">
                <h3>物品出入登记</h3>
                {
                    warn ?
                    <Warning warnmsg={warnmsg} /> : ''
                }
                {
                    success ?
                    <Success successMsg='数据保存成功！' /> : ''
                }
                <div className="admitForm">
                    <p><span>姓名：</span><input value={student} onChange={(e) => {
                        this.setState({'student': e.target.value})
                    }} type="text" /></p>
                    <p>
                        <span>学号：</span>
                        <input
                            value={sno}
                            onChange={(e) => {
                                this.setState({'sno': e.target.value})
                            }}
                            type="text" />
                    </p>
                    <p>
                        <span>物品名称：</span>
                        <input
                            value={itemName}
                            onChange={(e) => {
                                this.setState({'itemName': e.target.value})
                            }}
                            type="text" />
                    </p>
                    <p>
                        <span>楼栋：</span>
                        <select ref='dorm' value={dorm}
                                onChange={(e) => {
                                    this.setState({'dorm': e.target.value})
                                }}
                                >
                            <option value="1">----1栋</option>
                            <option value="2">----2栋</option>
                        </select>
                    </p>
                    <p>
                        <span>出入：</span>
                        <select ref='inout' value={inORout}
                                onChange={(e) => {
                                    this.setState({'inORout': e.target.value})
                                }}
                                >
                            <option value="-1">----带出</option>
                            <option value="1">----带入</option>
                        </select>
                    </p>
                    <p>
                        <span>备注：</span>
                        <textarea
                            value={message}
                            onChange={(e) => {
                                this.setState({'message': e.target.value})
                            }} >
                        </textarea>
                    </p>
                    <p>
                        <input onClick={this.saveRecords} type="button" value="保存" />
                        <Link to='/inOut/inoutdetail'>
                            <input type="button" value="查看出入记录" />
                        </Link>
                    </p>
                </div>

                {
                    shadow ?
                    <div ref='shadow' id="shadow">
                        <div className="vertify">
                            <h4>你确认保存如下信息？</h4>
                            <div className="vertifyCont">
                                <p><em>姓名：</em><span>王先发</span></p>
                                <p><em>学号：</em><span>201421092075</span></p>
                                <p><em>物品名称：</em><span>电脑</span></p>
                                <p><em>楼栋：</em><span>22栋</span></p>
                                <p><em>出入：</em><span>带出</span></p>
                                <div>
                                    <em>备注：</em>
                                    <p>备注信息备注信息备注信息备注信息</p>
                                </div>
                            </div>
                            <p>
                                <button>确认</button>
                                <button>取消</button>
                            </p>
                        </div>
                    </div> : ''
                }
            </div>
        );
    }
}

export default InOutForm;