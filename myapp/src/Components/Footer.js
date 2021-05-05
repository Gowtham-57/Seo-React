import React,{Component} from 'react';
import { Row, Col, ListGroup, ListGroupItem, Input, Button} from "reactstrap";

export default function App (){
  return(
      <div>
          <div>
         <h2 style={{textAlign:'center', fontSize:'20mm'}}>Data Science <br/> Meets SEO</h2><br/>
        <p style={{textAlign:'center'}}>Find all the SEO secrets of your competitors and track them <br/>daily without hours of boring keyword research & grouping</p>
      <br/><Row>
        <Col sm={4}></Col>
        <Col sm={4}><div class='inputWithButton'>
  <Input type="text" placeholder="Enter your Domain"/>
  <Button>Start Instant Demo</Button><br/> {' '}<p style={{fontSize:'4mm'}}>• No Credit Cards {' '} • Ready to Use in Few Minutes</p>
</div></Col>
        <Col sm={4}></Col>
      </Row>
      </div>
      <div style={{height:'50mm'}}>
          <Row>
              <Col sm={6} >    <ListGroup style={{backgroundColor:'blue', textAlign:'center'}}>
      <ListGroupItem tag="a" href="#">Home</ListGroupItem>
      <ListGroupItem tag="a" href="#">About</ListGroupItem>
      <ListGroupItem tag="a" href="#">Contact</ListGroupItem>
      <ListGroupItem tag="a" href="#">Gallery</ListGroupItem>
     
    </ListGroup>
</Col>
              <Col sm={6} style={{textAlign:'center', color:'skyblue'}}>
                  <h3>
                  hi@seo.do<br/>
0 (120) 463-7333<br/>
                  SEO DO OÜ<br/>
Sepapaja tn 6<br/>
15551, Tallinn Estonia
                  </h3>
              </Col>
          </Row>
      </div>
         
    </div>
   
  );
}

