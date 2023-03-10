import React, {useState} from "react";
import './second.css';
import {Card} from 'antd';
import { Line } from '@ant-design/charts';
import ReactSpeedometer from 'react-d3-speedometer';
import axios from "axios";
import Register from '../components/form';

const Transition = ({Vehicle_movement}) => {
    console.log('userData',Vehicle_movement);
    const [boom, setBoom] = useState(0);
    const [msg, setMsg] = useState('');
    var values = parseInt(boom);
    // var result = Math.floor(Math.random() * 3 );
    // console.log(result);
    // if(result == '0') {
    //     setMsg('fatel');
    // } else if(result == '1') {
    //     setMsg('heavy injury');
    // } else if (result == '2') {
    //     setMsg('slight injury');
    // }

    console.log('values',values);
    const data = [
        { damage: 'alternate speed  ', speed: 10 },
        { damage: 'alternate speed1', speed: 40 },
        { damage: 'alternate speed2', speed: 70 },
        { damage: 'alternate speed3', speed: 90 },
        { damage: 'alternate speed4', speed: 20 },
        { damage: 'alternate speed5', speed: 50 },
        { damage: 'alternate speed6', speed: 80 },
        { damage: 'alternate speed7', speed: 130 },
        { damage: 'MY SPEED', speed: Vehicle_movement },
      ];
    
      const config = {
        data,
        height: 40,
        xField: 'damage',
        yField: 'speed',
        point: {
          size: 5,
          shape : 'circle',
        },
      };
      axios.get('localhost:5001/predict') 
        .then((data) => {
          const res =data.json()  
          setMsg(res)
          console.log(res);       
        })
        .catch((e) => console.log(e))
 
        

      
    return(
        <div className="second-center">
            <input type='number' placeholder="enter your speed" value={boom} min={0} max={140} onChange={(e) => setBoom(e.target.value)} />
            <br />
        <div className="speedometer">
        <ReactSpeedometer 
            width={550}
            maxValue={140}
            minValue= {0}
            value={values}
            needleColor={'white'}
            segments={7} 
            needleTransitionDuration={3000}
            currentValueText = {'PREDICTION'}

            segmentColors = {
                [
                'darkgreen',
                'green',
                'yellow',
                'orange',
                'darkorange',
                'red',
                'darkred'
                ]
            }
            />
        </div>
            {/* <Card className="boom-card"> */}
            <div className="boom">
                <h1>{msg}</h1>
            </div>
            {/* </Card> */}
            {/* <Card>            */}
            <div className="graphical-rep">
                <Line {...config}/>
           </div><br /><br />
           {/* </Card> */}
        </div>
        
    )
}

export default Transition;  