import React, { Component } from 'react';
import './Warning.scss';

class Warning extends Component {

  render() {
    return (
      <div id='warn'>{this.props.warnmsg}</div>
    );
  }
}

export default Warning;