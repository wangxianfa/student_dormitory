import React, { Component } from 'react';
import './QrImage.scss';

import svgpath from 'svgpath';
import qr from 'qr-image';

class QrImage extends Component {

  constructor(props){
    super(props)
    this.state = {
      path: null
    }
  }

  componentDidMount() {
    const originPath = qr.svgObject('https://www.baidu.com/').path; //  获得二维码的绘制路径
    const scaledPath = svgpath(originPath).scale(4, 4).toString();
    this.setState({path: scaledPath});
  }


  render() {
    return (
      <span>
        <svg ref={(ref) => this._qrcodeSVG = ref}>
          <path d={this.state.path ? this.state.path : null}/>
        </svg>
      </span>
    );
  }
}

export default QrImage;