import React from 'react';
import './PersonCenter.scss';
import 'font-awesome/scss/font-awesome.scss';

import Header from '../PublicComp/Header/Header';
// import Footer from '../PublicComp/Footer/Footer';


class PersonCenter extends React.Component {

  render() {
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
                    <article className='wrap_l'></article>
                    <article className='wrap_r'></article>
                </div>
           </div>
       </div>
    );
  }
}

export default PersonCenter;