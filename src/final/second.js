import React, {useState} from "react";
import './second.css';
import {Card} from 'antd';
import { Line } from '@ant-design/charts';
import ReactSpeedometer from 'react-d3-speedometer';

const Transition = () => {
    const [boom, setBoom] = useState('');
    var values = boom;


    console.log(values);
    const data = [
        { damage: 'alternate speed  ', speed: 10 },
        { damage: 'alternate speed1', speed: 40 },
        { damage: 'alternate speed2', speed: 70 },
        { damage: 'alternate speed3', speed: 90 },
        { damage: 'alternate speed4', speed: 20 },
        { damage: 'alternate speed5', speed: 50 },
        { damage: 'alternate speed6', speed: 80 },
        { damage: 'alternate speed7', speed: 130 },
        { damage: 'MY SPEED', speed: values },
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

    return(
        <div className="second-center">
            <input type='number' placeholder="enter your speed" value={boom} onChange={(e) => setBoom(e.target.value)} />
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
                <h1>ALERT</h1>
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