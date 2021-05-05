import React from 'react';
import {Card, CardBody, CardText, Row, Col, CardTitle} from 'reactstrap';

export default function Over1 (){
    return(
        <div>
            <h2 style={{textAlign:'center', fontSize:'15mm', color:'blue'}}>Our Revolutionary Approach</h2>
            <br/>
            <br/>
             <br/>
            <Row>
                <Col sm={6}>
                    <Card className="cardstyle2">
                        <CardBody tag="h2" style={{color:'blue'}}>Keyword Specific <br/>CTR Calculations</CardBody>
                        <CardText tag="h5" style={{color:'blue', padding:'5px'}}>Most of the rank trackers use fixed CTRs for traffic & visibility. It could be misleading in 2020.</CardText>
                        <div className="overlay">
                        <CardBody tag="h2" style={{color:'white'}}>Keyword Specific <br/>CTR Calculations</CardBody>
                        <CardText tag="h5" style={{color:'white', padding:'5px'}}>Most of the rank trackers use fixed CTRs for traffic & visibility. It could be misleading in 2020.</CardText>
                        <Row>
                            <Col sm={8}>
                                <p style={{color:'white', fontSize:'4mm'}}>We train our ML model by using your Search Analytics data, so it's a very correct way to go.</p></Col>
                        <Col sm={4}>
                            <Card>
                                <CardTitle tag="h3" style={{color:'blue'}}>Fluctuations</CardTitle>
                                <CardBody tag="h6" style={{color:'blue'}}>analyzing changes help a lot to understand Google’s behaviors.</CardBody>
                            </Card>
                        </Col>
                        </Row>

                        </div>

                    </Card>
                </Col>
                <Col sm={6}>
                <Card className="cardstyle2">
                        <CardBody tag="h2" style={{color:'blue'}}>Calculate Keyword / Group
Based SERP Changes</CardBody>
                        <CardText tag="h5" style={{color:'blue', padding:'5px'}}>Find the keywords impacted by Google’s SERP changes most and analyze the impact of those changes.</CardText>
                        <div className="overlay">
                        <CardBody tag="h2" style={{color:'white'}}>Calculate Keyword / Group
Based SERP Changes</CardBody>
                        <CardText tag="h5" style={{color:'white', padding:'5px'}}>Find the keywords impacted by Google’s SERP changes most and analyze the impact of those changes.</CardText>
                        <Row>
                            <Col sm={8}>
                                <p style={{color:'white', fontSize:'4mm'}}>We train our ML model by using your Search Analytics data, so it's a very correct way to go.</p></Col>
                        <Col sm={4}>
                            <Card>
                                <CardTitle tag="h3" style={{color:'blue'}}>Fluctuations</CardTitle>
                                <CardBody tag="h6" style={{color:'blue'}}>analyzing changes help a lot to understand Google’s behaviors.</CardBody>
                            </Card>
                        </Col>
                        </Row>

                        </div>

                    </Card>
                </Col>
            </Row>
        </div>
    );
}