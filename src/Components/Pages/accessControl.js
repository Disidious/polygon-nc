import React from 'react';
import { Col, Row } from 'react-bootstrap';

function AccessControl() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div className="row1" style={{ backgroundImage: "url(/images/AC6.jpg)" }}>
                    <h2>Access Control</h2>
                    <p style={{ textAlign: "justify" }}>
                        Keep your business safe and secure by controlling who can view or use resources in a computing environment with our
                        Access Control Solutions that integrates the most advanced security technologies with improved operational efficiencies to bring you full-featured
                        security solutions serving any size facility.
                    </p>
                </div>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Types of authentications</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={7} xs={7} className="m-auto">
                        <div className="title">
                            <span className="byline">Biometric authentication</span>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            Protect your facility with our Biometric Access Control Systems that use sophisticated biometrics identification scanners
                            and door locks to recognize fingerprints, irises, or faces instead of cards. The Access Control System not only permits entry
                            but also gives the data regarding the entry of persons.
                        </p>
                    </Col>
                    <Col md={5} xs={5} className="imageDesc">
                        <img alt="" src="/images/biometric_security3.jpg" style={{ left: "100px" }} />
                    </Col>
                </Row>
                <Row style={{ marginTop: "1em" }}>
                    <Col md={7} xs={7} className="m-auto">
                        <div className="title">
                            <span className="byline">Cards</span>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            Protect your property with our range of different readers for cards and ID badges,
                            each suitable for a different purpose.
                            For opening doors and other access control applications,
                            both proximity cards and MIFARE ® product technology readers are suitable,
                            while companies using regular ID cards will benefit from the use of magnetic stripe or barcode readers for access,
                            data collection and more.
                        </p>
                    </Col>
                    <Col md={5} xs={5} className="imageDesc">
                        <img alt="" src="/images/card.jpg" />
                    </Col>
                </Row>
                <hr />
                <Row style={{ height: "5em" }}/>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Types of access control</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr style={{ height: "0.05em" }} />
                <Row style={{ padding: "2em 0em 2em 0em" }}>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/standalone.png" style={{ width: "90%", paddingBottom: "1em" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.4em" }}>Standalone<br />Access Control</h2>
                    </Col>
                    <Col id="empty-col" md={2} />
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/centralized.png" style={{ width: "90%", paddingTop: "0em" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.4em" }}>Centralized<br />Access Control</h2>
                    </Col>
                    <Col id="empty-col" md={2} />
                </Row>
                <hr />
            </div>
        </div>
    );
}
export default AccessControl;