import React from 'react';
import { Col, Row } from 'react-bootstrap';

function CCTV() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div className="row1" style={{ backgroundImage: "url(/images/cctv2.jpg)" }}>
                    <h2>CCTV</h2>
                    <p>
                        Protect your property with our professional business CCTV systems including High Definition cameras with infrared capability
                        that can give you high resolution details and accurate imaging any time of the day.
                    </p>
                </div>

                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Technologies</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row style={{paddingBottom: "1em"}}>
                    <Col md={12} xs={12}>
                        <img alt="" id="cctv-logo" src="/images/cctv71.png" ></img>
                        <div style={{ top: "10px", position: "absolute" }}>
                            <h2 id="cctv-h2" className="cctv-h2-class">
                                HD Cameras
                            </h2>
                            <p id="cctv-p" className="cctv-p-class">
                                HD Cameras are much simpler to install, cost effective, allow you to use longer cable runs up to 500 meters without
                                loss of quality and resolution can reach up to 4k. HD Cameras are available with fixed or varifocal lenses in dome or
                                bullet housings.
                            </p>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <img alt="" id="IPCamera-Logo" src="/images/cctv72.png" />
                        <div style={{ top: "0px", position: "absolute" }}>
                            <h2 id="ipcamera-h2" className="ipcamera-h2-class">
                                IP Cameras
                            </h2>
                            <p id="ipcamera-p" className="ipcamera-p-class">
                                IP Cameras allow you to see the finest details with high resolution and accurate imaging, IP Cameras also
                                come with several features and technologies, including power over Ethernet, Wi-Fi, and others,
                                which means you can use wireless or you can use as few cables as possible.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/hd.png" style={{ width: "90%"}} />
                    </Col>
                    <Col md={3} xs={9}>
                        <h2 style={{ left: "0px", fontSize: "1.4em" }}>High Resolution</h2>
                        <p style={{ textAlign: "justify" }}>
                            Cameras capture High definition and accurate imaging videos with high resolution up to 4k and with
                            the ability to record up to 30fps. The range of HD cameras continues to expand to adapt to all application requirements.
                        </p>
                    </Col>
                    <Col md={2} />
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/electronics.png" style={{ width: "90%", paddingTop: "1.5em" }} />
                    </Col>
                    <Col md={3} xs={9}>
                        <h2 style={{ left: "0px", fontSize: "1.4em" }}>Remote access</h2>
                        <p style={{ textAlign: "justify" }}>
                            Monitor your cameras remotely from anywhere with any device (Smart Phones, Laptops, etc.)
                            that has an internet connection. The mobile application is available for iOS devices and for
                            Android devices with P2P discovery.
                        </p>
                    </Col>
                    <Col md={2} />
                </Row>
                <Row>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/night2.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={9}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Night Vision</h2>
                        <p style={{ textAlign: "justify" }}>
                            Cameras use Starlight Technology which enables the camera to display and record coloured videos in low light and no light.
                            Starlight Sensors provide clear images regardless of the lighting conditions during any time of the day.
                        </p>
                    </Col>
                    <Col md={2}/>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/wireless.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={9}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Wireless</h2>
                        <p style={{ textAlign: "justify" }}>
                            Wireless cameras are very flexible since they give you the ability to place them in any
                            location that you desire without worrying about connecting them to an outlet or moving them from a location
                            to another without dealing with any wires.
                        </p>
                    </Col>
                    <Col md={2}/>
                </Row>
                <Row>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/ptz.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={9}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>PTZ</h2>
                        <p style={{ textAlign: "justify" }}>
                            PTZ cameras can be controlled remotely, it can pan horizontally (360°) and tilt vertically,
                            also it can zoom in and enhance the image quality without pixelation.
                            PTZ allows to monitor large areas with a single camera with great quality.
                        </p>
                    </Col>
                    <Col md={2}/>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/motion.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={9}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Motion Detection</h2>
                        <p style={{ textAlign: "justify" }}>
                            Motion Detection can greatly make your surveillance better as it has the ability to detect motion, capture the events
                            and send notifications (Email, SMS), also it saves storage space and a lot of time as it only records when motion is detected.
                        </p>
                    </Col>
                    <Col md={2}/>
                </Row>
                <hr />
            </div>
        </div>
    );
}

export default CCTV;