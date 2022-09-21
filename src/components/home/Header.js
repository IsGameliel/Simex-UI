import React from "react";
import {Container, Button, Row, Col} from "react-bootstrap";


function Header(){
    return(
            <div className="barnner">
                <div className="sec_barnner">
                <Container>
                    <Row>
                        <Col sm={6}>
                        <div className="bold-text">
                            <h2><span className="xyzcode">simvic</span> - service for <br/>promotion in social <br/> networks</h2>
                        </div>
                        <div className="text">
                            <p>This project was to rebuild the entire UI of oosi and alson develop content for <br/>the company alson develop content for</p>
                            <Button className="button" variant="primary">
                                Join for free
                            </Button>
                        </div>
                        </Col>
                        <Col sm={6}>
                            <div className="final_content">
                                <span className="sec_barnner"></span>
                            </div>
                        </Col>
                        <span className="icons"></span>
                        <span className="circle"></span>
                        <span className="times"></span>
                    </Row>
                </Container>
                </div>
            </div>
    );
}

export default Header;