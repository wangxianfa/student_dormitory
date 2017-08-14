import React, { Component } from 'react';
import './Success.scss'

class Success extends Component {
  render() {
    return (
      <div id="success">{this.props.successMsg}</div>
    );
  }
}

export default Success;