import React from 'react';
import {Row, Col, Progress, Input, Button, Container} from 'reactstrap';


export default function Over (){
    return(
        <div>
            <Row>
                <Col sm={2}></Col>
                <Col sm={7}>
                <h2 style={{textAlign:'center', color:'blue', paddingTop:'20mm'}}>Look Your Data<br/>
from Different Perspectives</h2><br/>
        <p style={{textAlign:'center', color:'blue', paddingBottom:'20mm'}}>You can slice your data from many perspective. We do grouping
operations <br/>for you which is mostly better than any human ability.</p>
        
                </Col>
                <Col sm={3}>
                    <Row>
                        <p>Competitors</p>
                    </Row>
                    <Row>
                       <Col sm={2}></Col>
                       <Col sm={6}><Progress value="75" color="pink"></Progress></Col>
                       <Col sm={4}></Col>
                    </Row><br/>
                    <Row>
                       <Col sm={2}><img></img></Col>
                       <Col sm={6}><Progress value="25" color="danger"></Progress></Col>
                       <Col sm={4}></Col>
                    </Row><br/>
                    <Row>
                       <Col sm={2}><img></img></Col>
                       <Col sm={6}><Progress value="55" color="warning"></Progress></Col>
                       <Col sm={4}></Col>
                    </Row>
                </Col>
            </Row><br/>
            <div > <Container style={{backgroundColor:'blue'}}>
            <h2 style={{textAlign:'center', fontSize:'20mm', color:'white'}}>Data Science <br/> Meets SEO</h2><br/>
        <p style={{textAlign:'center', color:'white'}}>Find all the SEO secrets of your competitors and track them <br/>daily without hours of boring keyword research & grouping</p>
      <br/><Row>
        <Col sm={4}></Col>
        <Col sm={4}><div class='inputWithButton'>
  <Input type="text" placeholder="Enter your Domain"/>
  <Button>Start Instant Demo</Button><br/> {' '}
  <p style={{fontSize:'4mm'}}>• 14 Days Free Trial {' '} <br/>• Free Historical Data Migration for All Accounts</p>
</div></Col>
        <Col sm={4}></Col>
      </Row>
      </Container>
            </div>
            <br/><br/>
            <h2 style={{textAlign:'center', fontSize:'15mm', color:'blue'}}>New Metrics:<br/>Time to Change Paradigms</h2>
            <br/><br/>
            <p style={{textAlign:'center', color:'blue'}}>The industry is backed by hard-coded metrics, not estimations.<br/>
We believe data science to fix this.</p>
        </div>
    );
}