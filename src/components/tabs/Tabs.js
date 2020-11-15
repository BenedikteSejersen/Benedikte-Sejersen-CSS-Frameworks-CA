import React from 'react'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import image from "../../images/tab-image.jpg";

export default function HomeAccordion() {
    return (
        <div>
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="tab d-none d-md-flex"> 
              <Tab eventKey="first" title="First" className="tab__box d-md-flex flex-md-row">
                <img src={image} alt="old TV" className="tab__img"/>
                <div>
                <p className="mx-5 mt-3">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                  Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                  Sed condimentum mattis rhoncus. 
                </p>
                <div className="tab__icon-container d-flex mx-5 mt-5">
                    <a href="#" className="tab__link mx-2">Share</a>
                    <a href="#"><img src={twitter} alt="twitter" className="tab__icon mx-2" /></a>
                    <a href="#"><img src={facebook} alt="facebook" className="tab__icon mx-2" /></a>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="second" title="Second" className="tab__box d-md-flex flex-md-row">
              </Tab>
              <Tab eventKey="third" title="Third" className="tab__box d-md-flex flex-md-row">
              </Tab>
            </Tabs>

            <Accordion defaultActiveKey="0" className="accordion shadow d-md-none my-5">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    First
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                  <p className="my-2">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                    Sed condimentum mattis rhoncus. 
                  </p>
                  <img src={image} alt="old TV" className="tab__img my-5 mx-auto d-block"/>
                  <div className="tab__icon-container d-flex justify-content-center">
                    <a  className="tab__link mx-2">Share</a>
                    <a href="#"><img src={twitter} alt="twitter" className="tab__icon mx-2" /></a>
                    <a href="#"><img src={facebook} alt="facebook" className="tab__icon mx-2" /></a>
                  </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Second
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Third
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </div>
    )
}
