import React from "react";
import {Container, Row, Column, Col, Button} from "react-bootstrap";

function Process(){
    return(
        <div className="process">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="data_sheet">
                            <Container>
                               <h3 className="gift_header">Spread love with giftcard</h3>
                                <div className="cards">
                                    <img src="img/giftcards.png" alt="giftcards" />
                                </div>
                                <p className="gift_tag">Put a smile on your loved ones faces with Giftcards</p>
                                <ul>
                                    <li> Spread love without transaction hassles</li>
                                    <li> Give them a gift of numerous gifts through a Giftcard</li>
                                </ul>
                                <Button variant={'outline-success'}>Learn more</Button>
                            </Container>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <h3 className="exchange">Exchange your unused Giftcard for value</h3>
                        <p>Don't wait for that Giftcard to expire in your hands, exchange them for 
                            value the seamless and better way</p>
                        <ul className="listex">
                            <li> Seamless Giftcard Transactions</li>
                            <li>Mouthwatering Rates</li>
                            <li> 24/7 customer service</li>
                        </ul>
                        <Button className="giftstart" variant={'outline-success'}>Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Process;