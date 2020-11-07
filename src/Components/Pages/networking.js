import React from 'react';

function Networking() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row1" style={{ backgroundImage: "url(/images/networking3.jpg)" }}>
                    <h2>Networking</h2>
                    <p style={{ textAlign: "justify" }}>
                        The certified Panduit engineers from Polygon can plan, schedule,
                        engineer and execute the wiring foundation necessary to meet your current and future needs. From single connectivity to multi-point.
                        Today, we can custom design a cable infrastructure for your company that will be scalable for future development.
                        If you're thinking about rewiring or reconfiguring your current setup to prepare for development, it's all right within our wheelhouse.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-12 m-auto">
                        <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Structured cabling system</h2></center>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row" style={{ padding: "1em 0em 2em 0em" }}>
                    <div class="col-md-2">
                        <img src="/images/fiber.png" style={{ width: "90%" }} />
                    </div>
                    <div class="col-md-3 m-auto">
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Fiber optic cables</h2>
                        <p style={{ textAlign: "justify" }}>
                            Fiber optic cables have a much greater bandwidth than metal cables.
                            The amount of information that can be transmitted per unit time of fiber over other transmission media is its most significant advantage,
                            also it offers low power loss.
                        </p>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2">
                        <img src="/images/copper.png" style={{ width: "90%", paddingTop: "0.3em" }} />
                    </div>
                    <div class="col-md-3 m-auto">
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Copper cables</h2>
                        <p style={{ textAlign: "justify" }}>
                            Copper cables can handle a wider load of electrical power,
                            allowing it to use less insulation and armouring.
                            They have high resistance to heat, eliminating most issues of overloading,
                            they also can be bent into nearly any form without breaking.
                        </p>
                    </div>
                </div>
                <div class="row" style={{ padding: "0em 0em 0em 0em" }}>
                    <div class="col-md-2">
                        <img src="/images/rack.png" style={{ width: "90%", paddingTop: "0.3em" }} />
                    </div>
                    <div class="col-md-3 m-auto">
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Racks</h2>
                        <p style={{ textAlign: "justify" }}>
                            Starting with customised server racks and network cabinets that are flexible, easy to mount,
                            adaptable and pre-configured saves you costs, footprint, and improves the performance, productivity,
                            and reliability of your critical infrastructure.
                        </p>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2">
                        <img src="/images/port.png" style={{ width: "90%", paddingTop: "0.3em" }} />
                    </div>
                    <div class="col-md-3 m-auto">
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Patch panels</h2>
                        <p style={{ textAlign: "justify" }}>
                            Available in different designs or port counts,
                            It is possible to configure the patch panels to suit different network cabling specifications. 
                            A dazzling range of patch panel options are available, 
                            including fiber and copper for various purposes.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Networking;