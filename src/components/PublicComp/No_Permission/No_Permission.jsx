import React, { Component } from 'react';
import './No_Permission.scss';

class No_Permission extends Component {
  constructor(props){
    super(props)
    this.state = {
      'left_seconds': 5
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        'left_seconds': this.state.left_seconds > 0 ? this.state.left_seconds - 1 : 0
      })
    }, 1000)
  }

  render() {
    const { left_seconds } = this.state;
    return (
      <div id='no_permission'>
        <div className="permission_wrap">
          {/* <span><img src="/icons/no_permission.png" alt="no permission" /></span> */}
          <p>对不起，你没有权限访问该页面，<span>{left_seconds}S</span>后自动返回</p>
        </div>
      </div>
    );
  }
}

export default No_Permission;