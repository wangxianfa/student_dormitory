import React from 'react';
import './StudentMsg.scss';
import {Link} from 'react-router';

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

class StudentMsg extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showShadowDiv : false
        }
    }

    render() {
        return (
            <div className="StudentMsg">
                <Header showSecondLevelMenu='1' secondLevelMenu='学生信息管理' />
                <div id="smWrap">
                    <nav>
                        <ul>
                            <Link to="/StudentMsg/stumsgSearch">
                                <li>学生信息管理</li>
                            </Link>
                            <Link to="/StudentMsg/checkManage">
                                <li>学生入住管理</li>
                            </Link>
                            <Link to="/StudentMsg/lateManage">
                                <li>学生晚归登记</li>
                            </Link>
                        </ul>
                    </nav>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default StudentMsg;