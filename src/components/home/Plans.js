import React from "react";
import { Button, Container, Carousel, Row, Col, Table } from "react-bootstrap";

function Plans(){
    return(
        <div className="plans third_bg">
            
            <Container>
                <div className="pink_header_plans">
                    <p>Not long left</p>
                </div>
                <h2 className="service_caption">Our rates and plans</h2>
                <img className="dotimg" src="img/dot.png" alt="dot"/>
                <div className="card-content">
                    <div className="card-body">
                        <div className="table-responsive">
                            <Table id="project-task-list" className="table table-white-space row-grouping display no-wrap icheck table-middle" variant="table table-borderless" >
                                <thead>
                                    <tr className="tablerow">
                                        <th className="head tag">Requirements</th>
                                        <th className="head center l1">Simple</th>
                                        <th className="head">Basic</th>
                                        <th className="head">Pro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" light tablerow">
                                        <td className="tag">Number of pages</td>
                                        <td className="l1">3</td>
                                        <td>5</td>
                                        <td>6+</td>
                                    </tr>
                                    <tr className="tablerow">
                                        <td className="tag">Number of plugins</td>
                                        <td className="l1">3</td>
                                        <td>5</td>
                                        <td>5+</td>
                                    </tr>
                                    <tr className=" light tablerow">
                                        <td className="tag">Admin Dashboard</td>
                                        <td className="l1">-</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className="tablerow">
                                        <td className="tag">Client Dashboard</td>
                                        <td className="l1">-</td>
                                        <td>-</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className=" light tablerow">
                                        <td className="tag">Chat</td>
                                        <td className="l1">-</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className="tablerow">
                                        <td className="tag">Review</td>
                                        <td className="l1">2</td>
                                        <td>5</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr className=" light tablerow">
                                        <td className="tag">Support</td>
                                        <td className="l1">4h/d</td>
                                        <td>8 h/d</td>
                                        <td>24/7</td>
                                    </tr>
                                    <tr className="tablerow">
                                        <td className="tag">Price</td>
                                        <td className="price l1">$</td>
                                        <td className="price">$$</td>
                                        <td className="price">$$$</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <img src="img/semi.png" className="semi" alt="semi"/>
                <div className="testimonial_section">
                    <div className="pink_header">
                        <p>Not long left</p>
                    </div>
                    <h2 className="service_caption">Our testimonials</h2>
                   <Carousel fade>
                    <Carousel.Item>
                        <div>
                            <p className="paragraph">A capital protection and crypto investment yield generator powered by AI,<br/> providing 60% APR on USDC to everyone looking for passive income.</p>
                            <div className="author">
                                <img className="d-block" src="img/c7.png" alt="First comment" />
                                <h3 className="header justify-content-center">Glory Chima<br/><span className="position">Designer</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <p className="paragraph">A capital protection and crypto investment yield generator powered by AI,<br/> providing 60% APR on USDC to everyone looking for passive income.</p>
                            <div className="author">
                                <img className="d-block" src="img/c9.png" alt="First comment" />
                                <h3 className="header justify-content-center">Ibiso Awoyesuku<br/><span className="position">Designer</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <p className="paragraph">A capital protection and crypto investment yield generator powered by AI,<br/> providing 60% APR on USDC to everyone looking for passive income.</p>
                            <div className="author">
                                <img className="d-block" src="img/c8.png" alt="First comment" />
                                <h3 className="header justify-content-center">Precious Samuel<br/><span className="position">Designer</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <p className="paragraph">A capital protection and crypto investment yield generator powered by AI,<br/> providing 60% APR on USDC to everyone looking for passive income.</p>
                            <div className="author">
                                <img className="d-block" src="img/c1.png" alt="First comment" />
                                <h3 className="header justify-content-center">Queen Manson<br/><span className="position">UI designer</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <p className="paragraph">A capital protection and crypto investment yield generator powered by AI,<br/> providing 60% APR on USDC to everyone looking for passive income.</p>
                            <div className="author">
                                <img className="d-block" src="img/c2.png" alt="First comment" />
                                <h3 className="header justify-content-center">Fred Emmanuel <br/><span className="position">Developer</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    </Carousel>
                    <div className="left">
                        <img className="c1" src="img/c1.png" alt="c1" />
                        <img className="c2" src="img/c6.png" alt="c1" />
                        <img className="c3" src="img/c3.png" alt="c1" />
                        <img className="c4" src="img/c4.png" alt="c1" />
                    </div>
                    <div className="right">
                        <img className="c5" src="img/c2.png" alt="c1" />
                        <img className="c6" src="img/c8.png" alt="c1" />
                        <img className="c7" src="img/c5.png" alt="c1" />
                        <img className="c8" src="img/c7.png" alt="c1" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Plans;