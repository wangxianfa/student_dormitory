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
            'dorm': '',
            'inORout': '',
            'message': ''
        }
        this.saveRecords = this.saveRecords.bind(this)
    }

    saveRecords(){
        const {student, sno, itemName, dorm, inORout, message} = this.state
        axios({
            method: 'POST',
            url: serverConfig.serverType + '://' + serverConfig.host + ':' + serverConfig.port + '/saveinoutrecord',
            data: {
                student: student,
                sno: sno,
                itemName: itemName,
                dorm: dorm,
                inORout: inORout,
                message: message
            }
        }).then((response) => {
            console.log(response)
        })
    }

    render() {
        const {student, sno, itemName, dorm, inORout, message} = this.state
        return (
            <div className="InOutForm">
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
                        <select value={dorm} 
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
                        <span className="radioStyl">
                            <input type="radio" name="inout" value="1" onClick={(e) => {
                                this.setState({'inORout': e.target.value})
                            }} />带入
                            <input type="radio" name="inout" value="-1" onClick={(e) => {
                                this.setState({'inORout': e.target.value})
                            }} />带出
                        </span>
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
                        <input onClick={() => {this.saveRecords}} type="button" value="保存" />
                        <Link to='/inOut/inoutdetail'>
                            <input type="button" value="查看出入记录" />
                        </Link>
                    </p>
                </div>

            </div>
        );
    }
}

export default InOutForm;