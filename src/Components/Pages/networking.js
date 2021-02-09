import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Col, Row } from 'react-bootstrap';

function Networking() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [imageWind, setLgShow] = React.useState(false);
    const [image, setImage] = React.useState("");
    const [title, settitle] = React.useState("");

    const show = function (url, title) {
        setLgShow(true);
        setImage(url);
        settitle(title);
    }

    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div className="row1" style={{ backgroundImage: "url(/images/networking3.jpg)" }}>
                    <h2 style={{ display: "inline-block" }}>Networking</h2>
                    <p style={{ textAlign: "justify" }}>
                        We provide the optimum LAN and WAN network solution from single connectivity to multi-point to meet your current and future needs.
                        We can plan, design and execute the structured cabling system for your company that will be secure, robust and scalable to reach the peak level of productivity and performance.
                        If you're thinking about rewiring or reconfiguring your current network setup, it's all right within our wheelhouse.
                    </p>
                </div>

                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Partnership</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col md={12} xs={12} className="m-auto">
                        <center>
                            <img id="panduit-logo" alt="" src="/images/Panduit.png" />
                            <div className="title">
                                <h1>SILVER PARTNER</h1>
                            </div>
                        </center>
                    </Col>
                </Row>
                <hr id="hr-end"/>

                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Structured cabling system</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr />

                <Modal
                    show={imageWind}
                    onHide={() => setLgShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            {title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <center><img alt="" src={image} style={{ width: "100%" }} /></center>
                    </Modal.Body>
                </Modal>

                <Row style={{ padding: "1em 0em 2em 0em" }}>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/fiber.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Fiber optic cables</h2>
                        <ul className="hex">
                            <li className="hex"><button onClick={() => show("/images/networkingImages/mpo.jpeg", "MPO")}>MPO</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/multimode.jpeg", "Multi Mode")}>Multi Mode</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/singlemode.jpeg", "Single Mode")}>Single Mode</button></li>
                        </ul>
                    </Col>
                    <Col id="empty-col" md={2}></Col>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/copper.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Copper cables</h2>
                        <ul className="hex">
                            <li className="hex"><button onClick={() => show("/images/networkingImages/utp.jpeg", "UTP")}>UTP</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/stp.jpeg", "STP")}>STP</button></li>
                        </ul>
                    </Col>
                    <Col id="empty-col" md={2}></Col>
                </Row>
                <Row style={{ padding: "1em 0em 2em 0em" }}>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/rack.png" style={{ width: "90%", paddingTop: "0.3em" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Racks</h2>
                        <ul className="hex">
                            <li className="hex"><button onClick={() => show("/images/networkingImages/indoor.jpeg", "Indoor")}>Indoor</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/outdoor.jpeg", "Outdoor")}>Outdoor</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/overhead.jpeg", "Overhead")}>Overhead</button></li>
                        </ul>
                    </Col>
                    <Col id="empty-col" md={2}></Col>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/port.png" style={{ width: "90%" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Patch panels</h2>
                        <ul className="hex">
                            <li className="hex"><button onClick={() => show("/images/networkingImages/preloaded.jpeg", "Pre-loaded")}>Pre-loaded</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/modular.jpeg", "Modular")}>Modular</button></li>
                        </ul>
                    </Col>
                    <Col id="empty-col" md={2}></Col>
                </Row>
                <Row style={{ padding: "0em 0em 0em 0em" }}>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/faceplate.png" style={{ width: "90%", paddingTop: "0.3em" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Faceplates</h2>
                        <ul className="hex">
                            <li className="hex"><button onClick={() => show("/images/networkingImages/internal.jpeg", "Internal")}>Internal</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/external.jpeg", "External")}>External</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/floorbox.jpeg", "External")}>Floor Box</button></li>
                        </ul>
                    </Col>
                    <Col id="empty-col" md={2}></Col>
                    <Col md={2} xs={3}>
                        <img alt="" src="/images/cabletray2.png" style={{ width: "90%", paddingTop: "0.3em" }} />
                    </Col>
                    <Col md={3} xs={3}>
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Cable Trays</h2>
                        <ul className="hex">
                            <li className="hex"><button onClick={() => show("/images/networkingImages/wyrgrid.jpeg", "Wyr-Grid")}>Wyr-Grid</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/wirebasket.jpeg", "Wire Basket")}>Wire Basket</button></li>
                            <li className="hex"><button onClick={() => show("/images/networkingImages/runner.jpeg", "Fiber Runner")}>Fiber Runner</button></li>
                        </ul>
                    </Col>
                    <Col id="empty-col" md={2}></Col>
                </Row>
                <br />
                <hr />
            </div>
        </div>
    );
}

export default Networking;