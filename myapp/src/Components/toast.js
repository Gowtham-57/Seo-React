import React from 'react';
import {Toast, ToastBody, Row, Col} from 'reactstrap';

export default function Toas (){
    return(
        <div>
            <Row>
                <Col sm={4}><h2 style={{color:'blue', padding:'20px'}}>Trusted by the World's Best Companies</h2></Col>
                <Col sm={8}>
                    <Row>
                        <Col sm={4} >
                            <Toast className="toaststyle">
                                <ToastBody>PESPSICO</ToastBody>
                            </Toast>
                        </Col>
                        <Col sm={4}> <Toast className="toaststyle">
                                <ToastBody>RedBull</ToastBody>
                            </Toast></Col>
                        <Col sm={4}><Toast className="toaststyle">
                                <ToastBody>Weber</ToastBody>
                            </Toast></Col>
                    </Row><br/><br/>
                    <Row>
                        <Col sm={4}>
                            <Toast className="toaststyle">
                                <ToastBody>BEKCO</ToastBody>
                            </Toast>
                        </Col>
                        <Col sm={4}><Toast className="toaststyle">
                                <ToastBody>YVES ROCHER</ToastBody>
                            </Toast></Col>
                        <Col sm={4}><Toast className="toaststyle">
                                <ToastBody>GrandVision</ToastBody>
                            </Toast></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}