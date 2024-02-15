import React from 'react';
import { useState } from 'react';
import {Collapse, Card} from 'react-bootstrap';

function ExperienceCollapse(props) {
    const [open, setOpen] = useState(false);
    let iconName = open ? "expand_less" : "expand_more";
  
    return (
      <>
        <Card className='myCard' style={{marginBottom: 30}}>
          <Card.Body>
            <div onClick={() => setOpen(!open)} aria-expanded={open}>
              <div className="flex-container"> 
                <div className="flex-item"> {props.expData.title} </div>
                <div className="flex-item-tairlling"> {props.expData.period} </div>
              </div>
              <div className="flex-container"> 
                <div className="flex-item"> {props.expData.comp} </div>
                <i className="material-icons myIcon flex-item-tairlling">{iconName}</i>
              </div>
            </div>
            <Collapse in={open}>
              <Card.Text style={{paddingTop: 20}}>
                <div>{props.expData.detail}</div>
                <div style={{paddingTop: 20}}>
                  {props.expData.bulletPoints.map((point, i) => { 
                    return (<div style={{paddingTop: 10}} key={point}>{point}</div>)
                  })}
                </div>
              </Card.Text>
            </Collapse>
        </Card.Body>
        </Card>
      </>
    );
  }
  
  export default ExperienceCollapse;