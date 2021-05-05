import React,{useState} from 'react';
import {Button, Row, Col, Collapse, Card, CardBody, CardTitle} from 'reactstrap';

export default function Colap (){
   const[open,setOpen] = useState(true);
  const toggle2 =()=> setOpen (!open);

  const[open1,setOpen1] = useState(false);
  const toggle3 =()=> setOpen1 (!open1);

  return(
    <div>
      
     <div><center>
    <Button onClick={toggle2}>Industry Features</Button>
    <Button onClick={toggle3}>Our Differences</Button></center>
    <Collapse isOpen={open} style={{transition:'fade'}}>
      <Row style={{padding:'10mm'}}>
          <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">AI-Based
Keyword Discovery</CardTitle>
          <CardBody>
          We have trained our models by using the power of deep learning to find the most relevant keywords.
          </CardBody>
          </Card></Col>
        <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">Fully-Automated
Keyword Discovery</CardTitle>
          <CardBody>
          You don't need to group keywords. Our smart algorithms are classifying keywords by their categories.</CardBody>
        </Card></Col>
        <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">Faster Than
The Fastest Competitor</CardTitle>
          <CardBody>
          Performance is our core value. We have tired of years of experience on slow rank trackers.</CardBody>
        </Card></Col>
        <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">Free Migration
from 40+ Tools</CardTitle>
          <CardBody>
          Losing data is not acceptable. Eventhough it has API access or not, we will migrate your data.</CardBody>
        </Card></Col>
       
      </Row>
        
      </Collapse>
      <Collapse isOpen={open1} style={{transition:'fade'}}>
      <Row style={{padding:'10mm'}}>
          <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">Keyword-Specific
CTR Calculation</CardTitle>
          <CardBody>
          Most of our competitors calculate traffic by fixed CTRs. Technical SEOs know that this is wrong.</CardBody>
          </Card></Col>
        <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">Better Insights
with Pixel Rank</CardTitle>
          <CardBody>
          Tracking only ranks is not acceptable for 2020's SEO approaches.</CardBody>
        </Card></Col>
        <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">All Metrics Weighted
</CardTitle>
          <CardBody>
          Taking an average of two metrics is not correct. We calculate the weighted average.</CardBody>
        </Card></Col>
        <Col sm={3}><Card className="cardstyle">
          <CardTitle tag="h2" className="m-2">Insights Backed by Average</CardTitle>
          <CardBody>
          Continuous crawl is the most important part of our data culture.We collecting data.</CardBody>
        </Card></Col>
     </Row>
  </Collapse>
     </div>
    </div>
  );

}