import React from 'react';
import './IndoorScene.css';
import { ajax } from '../../../../server/ajax.js';


class IndoorScene extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "images" : [],
            "records" : [],
            "norecords" : false
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        
        const dorm = this.props.location.query.dorm;
        const room = this.props.location.query.room;

        this.setState({
            "dorm" : dorm,
            "room" : room
        }, () => {

            this.fetchData();

        })

    }

    fetchData(){
        const dorm = this.state.dorm;
        const room = this.state.room;
        
        ajax({"url" : `http://localhost:3000/indoorScene?dorm=${dorm}&room=${room}`})
        .then((result) => {
            //成功
            var result_data = JSON.parse(result)
            console.log(result_data)
            if(result_data.length >= 1){
                this.setState({
                    "images" : result_data[0].contents.img,
                    "records" : result_data[0].contents.records
                })
            }else{
                this.setState({
                    "norecords" : true
                })
            }

        }, (err) => {
            //出错
            console.log(err)

        })

    }

    render() {

        const { images, records, norecords } = this.state;
        const imagesList = images.map((elem, index) => {
            return (
                <span key={index}><img src={elem} alt="宿舍内景" /><em>图{index + 1}</em></span>
            )
        })  
        
        const recordsList = records.map((elem, index) => {
            return(
                <li key={index}>{elem}</li>
            )
        })
        return (
            <div>
                <div className="InOutDetail indoorDetail">
                    <h3>宿舍内景一览</h3>
                    <div className="indoorDetail">{imagesList}</div>

                    {
                        records.length >0 ? 
                        <div className="evaluate">
                            <h3>检查情况：</h3>
                            <ol>{recordsList}</ol>
                        </div> : ''
                    }
                    {
                        norecords ?
                        <div className='norecords'>
                            <span><img src="/icons/empty.png" alt="内容为空"/></span>
                            <p>该宿舍暂无相关材料记录...</p>
                        </div> : ''
                    }
                </div>
            </div>
        );
    }
}

export default IndoorScene;