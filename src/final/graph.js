import React, { useState } from "react";
import {Card} from 'antd';
import { Line } from '@ant-design/charts'

    const Page = () => {
        const data = [
          { damage: 'YOUR SPEED', speed: 20 },
          { damage: 'alternate speed1', speed: 40 },
          { damage: 'alternate speed2', speed: 70 },
          { damage: 'alternate speed3', speed: 90 },
          { damage: 'alternate speed4', speed: 120 },
          { damage: 'alternate speed5', speed: 50 },
          { damage: 'alternate speed6', speed: 80 },
          { damage: 'alternate speed7', speed: 30 },
          { damage: 'alternate speed8', speed: 100 },
        ];
      
        const config = {
          data,
          outerWidth : 100,
          height: 300,
          width : 200,
          xField: 'damage',
          yField: 'speed',
          point: {
            size: 5,
            shape : 'circle',
          },
        };

    return(
        <div className="graphs">
            <Line {...config} />;
        </div>
    );
};

export default Page;