import React from 'react';
import './PersonCenter.scss';
import 'font-awesome/scss/font-awesome.scss';

import Footer from '../PublicComp/Footer/Footer';


class PersonCenter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            'showIndex' : 1
        }
    }

  render() {

    const { showIndex } = this.state;

    return (
       <div id="personCenter">
           <div className="topbar">
               <div className="topl">
                    <span>欢迎你！王先发同学</span>
                    <span className='sign_out'>安全退出<i className="fa fa-sign-out" aria-hidden="true"></i></span>
               </div>
               <div className="topr">
                   <ul>
                       <li className='home'><i className="fa fa-home" aria-hidden="true"></i><span>首页</span></li>
                       <li className='favorites'><i className="fa fa-star-o" aria-hidden="true"></i><span>加入收藏</span></li>
                       <li className='help'><i className="fa fa-question-circle" aria-hidden="true"></i><span>帮助中心</span></li>
                   </ul>
               </div>
           </div>
           <header className="personalHead">
              <div className="head_wrap">
                <span><img src='/images/stuMessage.png' alt="学生宿舍管理log" /></span>
                <span><input type="text"placeholder='请输入搜索关键词' /><em>搜索</em></span>
              </div>
           </header>
           <div className="contwrap">
                <h3><span>位置：</span><em>个人中心</em></h3>
                <div className="main">
                    <article className='wrap_l'>
                        <div className="picwrap">
                            <span><img src="/images/1.png" alt="个人头像" /></span>
                            <p>王先发(201421092075)</p>
                        </div>
                        <ul>
                            <li><i className="fa fa-user-circle-o" aria-hidden="true"></i><span>个人中心</span></li>
                            <li><i className="fa fa-commenting-o" aria-hidden="true"></i><span>我的消息<em>8</em></span></li>
                            <li><i className="fa fa-graduation-cap" aria-hidden="true"></i><span>奖惩信息</span></li>
                        </ul>
                    </article>
                    <article className='wrap_r'>
                        <div className="tab">
                            <span onClick={() => {
                                    this.setState({
                                        'showIndex': 1
                                    })
                                }} className={showIndex === 1 ? 'active' : ''}>个人信息</span>
                            <span onClick={() => {
                                    this.setState({
                                        'showIndex': 2
                                    })
                                }} className={showIndex === 2 ? 'active' : ''}>密码修改</span>
                        </div>
                        <div className="r_main">
                            {
                                showIndex === 1 ?
                                <div className="messageCont">
                                    <p><span>学生姓名：</span><span>王先发</span></p>
                                    <p><span>学生学号：</span><span>201421092075</span></p>
                                    <p><span>学生性别：</span><span>男</span></p>
                                    <p><span>所在专业：</span><span>信息工程</span></p>
                                    <p><span>所在年级：</span><span>2014级</span></p>
                                    <p><span>所在宿舍：</span><span>22栋515</span></p>
                                    <p><span>联系电话：</span><span className='editable'>13345678901</span></p>
                                    <p><span>email：</span><span className='editable'>1270386187@qq.com</span></p>
                                    <p className='saveModify'><button>保存修改</button></p>
                                </div> : ''
                            }
                            {
                                showIndex === 2 ?
                                <div className="changePsw">
                                    <p><span>原密码：</span><span className='editable'>201421092075</span></p>
                                    <p><span>新密码：</span><span><input type="text" /></span></p>
                                    <p><span>密码确认：</span><span><input type="text" /></span></p>
                                    <p className='saveModify'><button>确认修改</button><button>取消</button></p>
                                </div> : ''
                            }
                        </div>
                    </article>
                </div>
           </div>
           <Footer />
       </div>
    );
  }
}

export default PersonCenter;