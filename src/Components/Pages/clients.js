import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Clients() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>our clients</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr />
                <section className="hexagon-gallery">
                    <div className="hexagon">
                        <img src="images/clients/egypro.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/college.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/atlas.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/lifetogether.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/culture.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/wadi.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/onecare.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/coffeeshop.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/goodlife.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/liv.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/carpaccio.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/lc.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/seedstars.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/dorrah.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/primaplast.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/riseandshine.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/roofbar.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/cavallini.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/topbusiness.jpg" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/pyramidswalk.png" alt="" />
                    </div>
                    <div className="hexagon">
                        <img src="images/clients/darelasher.jpg" alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Clients;