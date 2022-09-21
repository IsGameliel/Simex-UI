import React from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";


function Resources(){
    return(
        <Container>
            <div className="resources">
                <img src="img/square.png" className="square" alt="line circle" />
                <img src="img/semi.png" className="semi" alt="semi"/>
                <div className="pink_header">
                    <p>Latest news</p>
                </div>
                <h2 className="service_caption">Useful materials for you</h2>
                <div class='player'>
                    <video className="video-screen" preload='auto' src="video/2.mp4" type='video/mp4' msallowfullscreen webkitallowfullscreen mozallowfullscreen allowfullscreen>
                            Sorry, your browser doesn't support HTML5 video playback.
                    </video>
                    <div className='controls active'>
                        <button className='play start'></button>
                    <input type="range" className='volume-bar' value='70' min='0' max='100' />
                    <input type="range" className='time-bar' value='0' min='0' max='' />
                    <time className='time'>N/A</time>
                    <div className='speed'>
                        <select>
                        <option value='.25'>.25</option>
                        <option value='.5' >.5</option>
                        <option value='.75'>.75</option>
                        <option value='1' selected>1</option>
                        <option value='1.25'>1.25</option>
                        <option value='1.5' >1.5</option>
                        <option value='1.75'>1.75</option>
                        <option value='2'>2</option>
                        </select>
                        speed
                    </div>
                    <button className='fullscreen-button'></button>
                    </div>
                    {/* <input className='file-chooser' type='file' /> */}
                </div>
                <div className="posts">
                <Carousel fade>
                    <Carousel.Item>
                        <Row>
                            <Col sm={6}>
                                <div className="singlepost">
                                    <div className="postdetails">
                                        <img className="d-block" src="img/post.jpg" alt="postimg" />
                                        <h3 className="header justify-content-center">Machine Learning</h3>
                                        <p>Allows icons to be subsetted, optimizing your final bundle.</p>
                                    </div>
                                    <div className="extras">
                                        <p>Eugene</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mobile_post">
                                <div className="singlepost">
                                    <div className="postdetails">
                                        <img className="d-block" src="img/post.jpg" alt="postimg" />
                                        <h3 className="header justify-content-center">Machine Learning</h3>
                                        <p>Allows icons to be subsetted, optimizing your final bundle.</p>
                                    </div>
                                    <div className="extras">
                                        <p>Eugene</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    {/* next item */}

                    <Carousel.Item>
                        <Row>
                            <Col sm={6}>
                                <div className="singlepost">
                                    <div className="postdetails">
                                        <img className="d-block" src="img/post1.jpg" alt="postimg" />
                                        <h3 className="header justify-content-center">Machine Learning</h3>
                                        <p>Allows icons to be subsetted, optimizing your final bundle.</p>
                                    </div>
                                    <div className="extras">
                                        <p>Eugene</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mobile_post">
                                <div className="singlepost">
                                    <div className="postdetails">
                                        <img className="d-block" src="img/post1.jpg" alt="postimg" />
                                        <h3 className="header justify-content-center">Machine Learning</h3>
                                        <p>Allows icons to be subsetted, optimizing your final bundle.</p>
                                    </div>
                                    <div className="extras">
                                        <p>Eugene</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row>
                            <Col sm={6}>
                                <div className="singlepost">
                                    <div className="postdetails">
                                        <img className="d-block" src="img/post 3.jpg" alt="postimg" />
                                        <h3 className="header justify-content-center">Machine Learning</h3>
                                        <p>Allows icons to be subsetted, optimizing your final bundle.</p>
                                    </div>
                                    <div className="extras">
                                        <p>Eugene</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mobile_post">
                                <div className="singlepost">
                                    <div className="postdetails">
                                        <img className="d-block" src="img/post 3.jpg" alt="postimg" />
                                        <h3 className="header justify-content-center">Machine Learning</h3>
                                        <p>Allows icons to be subsetted, optimizing your final bundle.</p>
                                    </div>
                                    <div className="extras">
                                        <p>Eugene</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </Container>
    );
}

export default Resources;