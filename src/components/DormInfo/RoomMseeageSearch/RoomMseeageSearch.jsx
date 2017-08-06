import React from 'react';
import {Link} from 'react-router';
import './RoomMseeageSearch.css';


class RoomMseeageSearch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dormid : null
        }
    }
    
    componentDidMount() {
        this.setState({
            dormid : this.refs.dormid.value
        })
    }

    render() {
        return (
            <div className="RoomMseeageSearch">
                <div className="roommessage">
                    <h3>宿舍信息查询</h3>
                    <div className="roomfilter">
                        <p>
                            <span>楼栋号：</span>
                            <select defaultValue="1" ref="dormid" onChange={(e)=>{
                                this.setState({
                                    dormid : e.target.value
                                })
                            }}>
                                <option value="1">----1栋</option>
                                <option value="2">----2栋</option>
                            </select>
                        </p>
                        <p>
                            <span>宿舍号：</span>
                            <input type="text" />
                        </p>
                    </div>
                    <Link to={{
                        pathname:'/dormRoom/roomDetail',
                        query:{dormid:this.state.dormid,roomid:1}
                    }}>
                        <div className='btn'>
                            <span></span>
                            <em>搜索</em>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default RoomMseeageSearch;