import React from "react";
import {Container, Button, Row, Col} from "react-bootstrap";

function Services(){
    return(
        <Container>
            <div className="services">
                <img src="img/g.png" className="stars" alt="design"/>
                <div className="pink_header">
                    <p>Excellent offers</p>
                </div>
                <h2 className="service_caption">How our service works?</h2>
            </div>
            <Row>
                <Col sm={6}>
                    <div className="group active">
                        <div className="index content"><p>1</p></div>
                        <div className="content content_text">
                            <h2 className="header_text">Create Account now</h2>
                            <p className="para">our customers get the best contacts, information, business management <br/> 
                            and marketing talent, which they need to become more profitable, better informed <br/>
                            and competitive for all their business cycle.</p>
                            <Button variant={'outline-success'} className="acti" >Read more</Button>
                        </div>
                    </div>
                    <div className="group">
                        <div className="index content"><p>2</p></div>
                        <div className="content content_text">
                            <h2 className="header_text">Search for card</h2>
                            <p className="para">our customers get the best contacts, information, business management <br/> 
                            and marketing talent, which they need to become more profitable, better informed <br/>
                            and competitive for all their business cycle.</p>
                            <Button variant={'outline-success'}>Read more</Button>
                        </div>
                    </div>
                    <hr className="horizontal"/>
                    <div className="group">
                        <div className="index content"><p>3</p></div>
                        <div className="content content_text">
                            <h2 className="header_text">Transact card</h2>
                            <p className="para">our customers get the best contacts, information, business management <br/> 
                            and marketing talent, which they need to become more profitable, better informed <br/>
                            and competitive for all their business cycle.</p>
                            <Button variant={'outline-success'}>Read more</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <img src="img/sandra.png" className="sandra" alt="sandra"/>
                    <span className="first_circle"></span>
                    <span className="second_circle"></span>
                    <span className="third_circle"></span>
                </Col>
                <img src="img/half.png" className="half" alt="half"/>
            </Row>
        </Container>
    );
}

export default Services