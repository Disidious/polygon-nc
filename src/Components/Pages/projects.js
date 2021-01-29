import React from 'react';

function Projects() {
    window.scrollTo(0, 0);
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div style={{ width: "45em" }}>
                </div>
                <div className="row">
                    <div className="col-12 m-auto">
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Latest Projects</h2></center>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <h1>ADMINISTRATIVE CAPITAL AUTHORITY</h1>
                            <span className="byline">CURRENTLY SUPPLYING, DESIGNING AND INSTALLING:</span>
                        </div>
                        <ul className="hex">
                            <li className="hex"><span>Structured cabling system for Datacenter (80 Racks) at the
                                new capital using MPO fiber cables interconnection.</span></li>
                            <li className="hex"><span>Structured cabling system for Datacenter (36 Racks) at the
                                new capital using SM fiber cables interconnection.</span></li>
                            <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                            <li className="hex"><span>Wyr-Grid and cable trays.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/ACA.jpg"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <h1>DAR AL IFTA</h1>
                            <span className="byline">SUPPLYING, DESIGNING AND INSTALLING:</span>
                        </div>
                        <ul className="hex">
                            <li className="hex"><span>Structured cabling system for Datacenter (10 Racks) using UTP
                                and fiber cables interconnection.</span></li>
                            <li className="hex"><span>Structured cabling systems for digital telephone system.</span></li>
                            <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                            <li className="hex"><span>Centralized access control system for the Datacenter.</span></li>
                            <li className="hex"><span>IP system surveillance.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/DEI.jpg"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <h1>EL ENTAG EL HARBY</h1>
                            <span className="byline">SUPPLYING, DESIGNING AND INSTALLING:</span>
                        </div>
                        <ul className="hex">
                            <li className="hex"><span>UTP network infrastructure for IP cameras.</span></li>
                            <li className="hex"><span>Centralized access control system for the Datacenter.</span></li>
                            <li className="hex"><span>IP system surveillance.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/EH.png"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <h1>COPTIC CATHEDRAL</h1>
                            <span className="byline">SUPPLYING, DESIGNING AND INSTALLING:</span>
                        </div>
                        <ul className="hex">
                            <li className="hex"><span>UTP network infrastructure for IP cameras at Pope headquarter.</span></li>
                            <li className="hex"><span>Stand-alone access control system.</span></li>
                            <li className="hex"><span>IP system surveillance.</span></li>
                            <li className="hex"><span>Cables trays and pipes.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/CC.jpg"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <h1>LUFTHANSA CARGO</h1>
                            <span className="byline">SUPPLYING, DESIGNING AND INSTALLING:</span>
                        </div>
                        <ul className="hex">
                            <li className="hex"><span>UTP network infrastructure at airport branch.</span></li>
                            <li className="hex"><span>Digital telephone system.</span></li>
                            <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                            <li className="hex"><span>Stand-alone access control system.</span></li>
                            <li className="hex"><span>IP system surveillance.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/LC.png"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <h1>PYRAMIDS WALK COMPOUND</h1>
                            <span className="byline">SUPPLYING, DESIGNING AND INSTALLING:</span>
                        </div>
                        <ul className="hex">
                            <li className="hex"><span>UTP and fiber network infrastructure.</span></li>
                            <li className="hex"><span>Fiber fusion splicing and testing.</span></li>
                            <li className="hex"><span>HD system surveillance.</span></li>
                            <li className="hex"><span>Cables trays and pipes.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/PWC.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;