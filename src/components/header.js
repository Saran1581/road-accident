import React, { useState } from "react";
import Logo from '../images/road1.avif';
import Logo2 from '../images/road2.jpg';
import Logo3 from '../images/road3.jpg';
import Logo4 from '../images/road4.jpg';
import Road from '../images/road5.jpg';
import Report1 from '../images/report1.png';
import Report2 from '../images/report2.jpg';
import Report3 from '../images/report3.jpeg';
import Report4 from '../images/report4.jpg';
import RAvideo from '../images/video1.mp4';
import RAvideo2 from '../images/video.mp4';
import RAvideo3 from '../images/video3.mp4';

import './header.css';

import { Button, Carousel, Card } from 'antd';
const contentStyle = {
  height: '800px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
    
return(
    <div>   
        <header>
            <nav>
            <ul>
                <h2>ROAD ACCIDENT</h2>
            </ul>
            </nav>
            
        </header>
  <Carousel autoplay className="carosuel">
    <div>
      <h3 style={contentStyle}>
        <img src={Logo} style = {{width : '100%'}}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src={Logo2} style = {{width : '100%'}} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={Logo3} style = {{width : '100%'}} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={Logo4} style = {{width : '100%'}} />
      </h3>
    </div>
  </Carousel>
  <div className="top-class">
    <h1><u>ACCIDENT</u></h1>
    <p>
    An accident is an unintended, normally unwanted event that was not directly caused by humans. The term<br />
    accident implies that nobody should be blamed, but the event may have been caused by unrecognized or<br />
    unaddressed risks. Most researchers who study unintentional injury avoid using the term accident and focus<br /> 
    on factors that increase risk of severe injury and that reduce injury incidence and severity. For example,<br /> 
    when a tree falls down during a wind storm, its fall may not have been caused by humans, but the tree's type,size,<br /> 
    health, location, or improper maintenance may have contributed to the result. Most car wrecks are not true accidents;however <br /> 
    English speakers started using that word in the mid-20th century as a result of media manipulation by the US automobile industry.
    </p>
    <img src={Road} className='report1'/>
  {/* <hr></hr> */}
    <>
    <h1><u>ACCIDENT ANALYSIS</u></h1>
    <p>Accident analysis is carried out in order to determine the cause or causes of an accident (that can result in single <br />
    or multiple outcomes) so as to prevent further accidents of a similar kind. It is part of accident investigation or<br /> 
    incident investigation . These analyses may be performed by a range of experts, including forensic scientists,<br/>
     forensic engineers or health and safety advisers. Accident investigators, particularly those in the aircraft industry,<br /> 
     are colloquially known as "tin-kickers".[1] Health and safety and patient safety professionals prefer using the term<br /> 
     "incident" in place of the term "accident". Its retrospective nature means that accident analysis is primarily an<br /> 
     exercise of directed explanation; conducted using the theories or methods the analyst has to hand, which directs<br />
     the way in which the events, aspects, or features of accident phenomena are highlighted and explained</p>
     <br /><br />
     <img src={Report1} className='report1'/>
     {/* <hr></hr> */}
    
    </>
    <div className="second-class">
        <h1><u>COMMON CAUSES</u></h1>
        <p>
        Poisons, vehicle collisions and falls are the most common causes of fatal injuries. According to a 2005 survey<br />
        of injuries sustained at home, which used data from the National Vital Statistics System of the United States National<br /> 
        Center for Health Statistics, falls, poisoning, and fire/burn injuries are the most common causes of death.<br />
        The United States also collects statistically valid injury data (sampled from 100 hospitals) through the National Electronic<br /> 
        Injury Surveillance System administered by the Consumer Product Safety Commission. This program was revised in 2000 to include<br /> 
        all injuries rather than just injuries involving products. Data on emergency department visits is also collected through the <br />
        National Health Interview Survey. In The U.S. the Bureau of Labor Statistics has available on their website extensive statistics<br /> 
        on workplace accidents.
        </p>
        <img src={Report2} className= "report2"/><br />
        
    </div><br /><br />
    <div className="third-class">
        <br />
        <Card className="card">
        <video autoPlay loop muted className="video1">
            <source src={RAvideo} />
        </video>
        </Card><br />
        <Card className="card">
        <video autoPlay loop muted className="video1">
            <source src={RAvideo2} />
        </video>
        </Card><br />
        <Card className="card">
        <video autoPlay loop muted className="video1">
            <source src={RAvideo3} />
        </video>
        </Card><br />
    </div>
    <br /><br />
    <span className="fade-in"><h1>FOLLOW TRAFFIC RULES</h1></span><br /><br />
    <Button onClick={() => {
        window.location.href = '/form'
    }} style={{marginLeft: '47%'}} type="primary">Next</Button><br/><br />
    </div>
   
    </div>

    
    )
};
export default App;