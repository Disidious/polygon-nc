import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Projects() {
    const [stateDesc, setStateDesc] = React.useState(['0', '0', '0', '0', '0', '0']);
    const [stateBtn, setStateBtn] = React.useState(['Show Details ▼',
        'Show Details ▼',
        'Show Details ▼',
        'Show Details ▼',
        'Show Details ▼',
        'Show Details ▼']);
    //setStateBtn(stateBtn)

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const setStateAll = function (id) {
        if (stateBtn[id] === 'Show Details ▼') {
            let tempBtn = stateBtn;
            let tempDesc = stateDesc;
            tempBtn[id] = 'Hide Details ▲';
            tempDesc[id] = '14em';
            setStateBtn(setStateBtn => [...stateBtn, tempBtn]);
            setStateDesc(setStateDesc => [...stateDesc, tempDesc]);
        }
        else if (stateBtn[id] === 'Hide Details ▲') {
            let tempBtn = stateBtn;
            let tempDesc = stateDesc;
            tempBtn[id] = 'Show Details ▼';
            tempDesc[id] = '0';
            setStateBtn(setStateBtn => [...stateBtn, tempBtn]);
            setStateDesc(setStateDesc => [...stateDesc, tempDesc]);
        }
    }
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div style={{ width: "45em" }}>
                </div>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Latest Projects</h2></center>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4} xs={12} className="imageDesc">
                        <img alt="" src="/images/ACA.jpg" />
                        <div className="title">
                            <h1 className="proj-name">ADMINISTRATIVE CAPITAL AUTHORITY</h1>
                        </div>
                        <div className="desc" style={{ maxHeight: stateDesc[0] }}>
                            <span className="byline proj-desc-title">CURRENTLY SUPPLYING, DESIGNING AND INSTALLING:</span>
                            <ul className="hex">
                                <li className="hex"><span>Structured cabling system for Datacenter (80 Racks) at the
                                new capital using MPO fiber cables interconnection.</span></li>
                                <li className="hex"><span>Structured cabling system for Datacenter (36 Racks) at the
                                new capital using SM fiber cables interconnection.</span></li>
                                <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                                <li className="hex"><span>Wyr-Grid and cable trays.</span></li>
                            </ul>
                        </div>
                        <button className="button1" onClick={() => setStateAll(0)}>{stateBtn[0]}</button>
                    </Col>
                    <Col md={4} xs={12} className="imageDesc projColMobile">
                        <img alt="" src="/images/DEI.jpg" />
                        <div className="title">
                            <h1 className="proj-name">DAR AL IFTA</h1>
                        </div>
                        <div className="desc" style={{ maxHeight: stateDesc[1] }}>
                            <span className="byline proj-desc-title">SUPPLYING, DESIGNING AND INSTALLING:</span>
                            <ul className="hex">
                                <li className="hex"><span>Structured cabling system for Datacenter (10 Racks) using UTP
                                and fiber cables interconnection.</span></li>
                                <li className="hex"><span>Structured cabling systems for digital telephone system.</span></li>
                                <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                                <li className="hex"><span>Centralized access control system for the Datacenter.</span></li>
                                <li className="hex"><span>IP system surveillance.</span></li>
                            </ul>
                        </div>
                        <button className="button1" onClick={() => setStateAll(1)}>{stateBtn[1]}</button>
                    </Col>
                    <Col md={4} xs={12} className="imageDesc projColMobile">
                        <img alt="" src="/images/EH.png" />
                        <div className="title">
                            <h1 className="proj-name">EL ENTAG EL HARBY</h1>
                        </div>
                        <div className="desc" style={{ maxHeight: stateDesc[2] }}>
                            <span className="byline proj-desc-title">SUPPLYING, DESIGNING AND INSTALLING:</span>
                            <ul className="hex">
                                <li className="hex"><span>UTP network infrastructure for IP cameras.</span></li>
                                <li className="hex"><span>Centralized access control system for the Datacenter.</span></li>
                                <li className="hex"><span>IP system surveillance.</span></li>
                            </ul>
                        </div>
                        <button className="button1" onClick={() => setStateAll(2)}>{stateBtn[2]}</button>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12} className="imageDesc projColDesktop">
                        <img alt="" src="/images/CC.jpg" />
                        <div className="title">
                            <h1 className="proj-name">COPTIC CATHEDRAL</h1>
                        </div>
                        <div className="desc" style={{ maxHeight: stateDesc[3] }}>
                            <span className="byline proj-desc-title">SUPPLYING, DESIGNING AND INSTALLING:</span>
                            <ul className="hex">
                                <li className="hex"><span>UTP network infrastructure for IP cameras at Pope headquarter.</span></li>
                                <li className="hex"><span>Stand-alone access control system.</span></li>
                                <li className="hex"><span>IP system surveillance.</span></li>
                                <li className="hex"><span>Cables trays and pipes.</span></li>
                            </ul>
                        </div>
                        <button className="button1" onClick={() => setStateAll(3)}>{stateBtn[3]}</button>
                    </Col>
                    <Col md={4} xs={12} className="imageDesc projColDesktop">
                        <img alt="" src="/images/LC.png" />
                        <div className="title">
                            <h1 className="proj-name">LUFTHANSA CARGO</h1>
                        </div>
                        <div className="desc" style={{ maxHeight: stateDesc[4] }}>
                            <span className="byline proj-desc-title">SUPPLYING, DESIGNING AND INSTALLING:</span>
                            <ul className="hex">
                                <li className="hex"><span>UTP network infrastructure at airport branch.</span></li>
                                <li className="hex"><span>Digital telephone system.</span></li>
                                <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                                <li className="hex"><span>Stand-alone access control system.</span></li>
                                <li className="hex"><span>IP system surveillance.</span></li>
                            </ul>
                        </div>
                        <button className="button1" onClick={() => setStateAll(4)}>{stateBtn[4]}</button>
                    </Col>
                    <Col md={4} xs={12} className="imageDesc projColDesktop">
                        <img alt="" src="/images/PWC.jpg" />
                        <div className="title">
                            <h1 className="proj-name">PYRAMIDS WALK COMPOUND</h1>
                        </div>
                        <div className="desc" style={{ maxHeight: stateDesc[5] }}>
                            <span className="byline proj-desc-title">SUPPLYING, DESIGNING AND INSTALLING:</span>
                            <ul className="hex">
                                <li className="hex"><span>UTP and fiber network infrastructure.</span></li>
                                <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                                <li className="hex"><span>HD system surveillance.</span></li>
                                <li className="hex"><span>Cables trays and pipes.</span></li>
                            </ul>
                        </div>
                        <button className="button1" onClick={() => setStateAll(5)}>{stateBtn[5]}</button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Projects;