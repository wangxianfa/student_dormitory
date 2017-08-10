import React from 'react';
import './Announcement.scss';
// import { Link } from "react-router";

import Header from '../../PublicComp/Header/Header';
import Footer from '../../PublicComp/Footer/Footer';

export default class Announcement extends React.Component {

  render() {

    return (
      <div className="announcement">
        	<Header showSecondLevelMenu='1' secondLevelMenu='通知公告' />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}
