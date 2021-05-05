import React, {useState} from 'react';
import {Popover, Button, PopoverHeader, PopoverBody, Row, Col} from 'reactstrap';

function Select (){
  const[popoverOpen, setPopoverOpen] = useState(false);
  const toggle =()=> setPopoverOpen(!popoverOpen);

  const[popoverOpen1, setPopoverOpen1] = useState(false);
  const toggle1 =()=> setPopoverOpen1(!popoverOpen1);

  const[popoverOpen2, setPopoverOpen2] = useState(false);
  const toggle2 =()=> setPopoverOpen2(!popoverOpen2);

  return(
    <div>
        <Row>
            <Col sm={6}>
                <h2 style={{color:'blue'}}>Smart Keyword Label Analysis</h2><br/>
                <p style={{color:'lightgray'}}>We run different rules over your rank tracking index to find out the most popular issues and insights to take action.</p>
            </Col>
            <Col sm={6}>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}><Button id="PopoverFocus" type="button" style={{backgroundColor:'white',borderRadius:'3mm',color:'orange'}}>Top Season</Button>
      <Popover isOpen={popoverOpen} target="PopoverFocus" toggle={toggle} placement="bottom">
        <PopoverHeader>Full stack</PopoverHeader>
        <PopoverBody>
          It is the course for web development 
        </PopoverBody>

      </Popover></Col>
                </Row><br/>
                <Row>
                    <Col sm={4}><Button id="PopoverFocus1" type="button" style={{backgroundColor:'white',borderRadius:'3mm',color:'orange'}}>Season Approaching</Button>
      <Popover isOpen={popoverOpen1} target="PopoverFocus1" toggle={toggle1} placement="bottom">
        <PopoverHeader>Season Approaching</PopoverHeader>
        <PopoverBody>
        This keyword is about to be trendy in 3 months. You may want to prioritize this keyword in your current strategy.
        </PopoverBody>

      </Popover></Col>
                    <Col sm={4}></Col>
                    <Col sm={4}></Col>
                </Row><br/>
                <Row>
                <Col sm={4}></Col>
                    <Col sm={4}></Col>
                    <Col sm={4}><Button id="PopoverFocus2" type="button" style={{backgroundColor:'white',borderRadius:'3mm',color:'orange'}}>Best Rank</Button>
      <Popover isOpen={popoverOpen2} target="PopoverFocus2" toggle={toggle2} placement="bottom">
        <PopoverHeader>Best Rank</PopoverHeader>
        <PopoverBody>
        Your performance summary for the given keyword.
        </PopoverBody>

      </Popover></Col>
                    
                </Row>
            </Col>
        </Row>
      
    </div>
    
  );
}
export default Select;
