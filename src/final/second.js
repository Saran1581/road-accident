import React, {useState} from "react";
import './second.css';
import {Card} from 'antd';

const Transition = () => {
    const [boom, setBoom] = useState('');

    return(
        <div className="second-center">
            {/* <Card className="boom-card"> */}
            <div className="boom">
                <h1>ALERT</h1>
            </div>
            {/* </Card> */}
        </div>
    )
}

export default Transition;  