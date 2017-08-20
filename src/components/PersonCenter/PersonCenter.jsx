import React from 'react';
import './PersonCenter.scss';
import 'font-awesome/scss/font-awesome.scss';

// import Header from '../PublicComp/Header/Header';
// import Footer from '../PublicComp/Footer/Footer';


class PersonCenter extends React.Component {

  render() {
    return (
       <div id="personCenter">
           <div className="topbar">
               <div className="topl">
                    <span>欢迎你！王先发同学</span>
                    <span>安全退出</span>
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

           </header>
       </div>
    );
  }
}

export default PersonCenter;