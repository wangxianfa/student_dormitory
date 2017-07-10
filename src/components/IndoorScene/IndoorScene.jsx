import React from 'react';
import './IndoorScene.css';
import { ajax } from '../../../server/ajax.js';


class IndoorScene extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "images" : [],
            "records" : []
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
            console.log(result)

        }, (err) => {
            //出错
            console.log(err)

        })

    }

    render() {

        const { images, records } = this.state;
        const imagesList = images.map((elem, index) => {
            return (
                <span key={index}><img src={require(elem)} alt="宿舍内景" /><em>图{index + 1}</em></span>
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
                        <div className="evaluate">
                            <h3>检查情况：</h3>
                            <ol>{recordsList}</ol>
                        </div>
                    </div>
                </div>
        );
    }
}

export default IndoorScene;