import React from 'react';
import {Container, Row, Col, Card, CardBody, CardText} from 'reactstrap';


export default function Car (){
    return(
        <Container style={{backgroundColor:'blue'}}>
        <h2 style={{textAlign:'center', color:'white', paddingTop:'20mm'}}>Bigger Data = Better Trained Models</h2><br/>
        <p style={{textAlign:'center', color:'white', paddingBottom:'20mm'}}>We have great competitors that can provide you with data. Our main focus is not only providing data <br/>but also insights extracted from them. To create better machine learning models, we're collecting more data.</p>
        <Row>
            <Col sm={1}></Col>
            <Col sm={5}>
                <Card><center>
                    <CardBody>Keywords</CardBody>
                    <CardText tag="h5" style={{color:'blue'}}>4.598.319.973</CardText><br/>
                    <p>87 Countries {' '} 38 Languages</p></center>
                 
                </Card>
                </Col>{' '}
            <Col sm={5}> <Card><center>
                   
                    <CardBody>Search Volume</CardBody>
                    <CardText tag="h5" style={{color:'blue'}}>247,3 Billion</CardText><br/>
                    <p>4+ Billion Keywords {' '} 34TB Data</p></center>
                </Card></Col>
            <Col sm={1}></Col>
        </Row>
        </Container>
        
    );
}