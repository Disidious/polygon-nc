import React from 'react';
import {
    Link
} from 'react-router-dom';

function AboutUs() {
    window.scrollTo(0, 0);
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>About us</h2></center>
                        </div>
                    </div>
                </div>
                <hr />

                <div id="aboutus-row" className="row1" style={{ backgroundImage: "url(/images/connections2.jpg)" }}>
                    <div className="text-to-right">
                        <h2>Who we are</h2>
                        <p>
                            We are an IT Service Provider and a System Integrator Company located in Cairo Egypt.
                            We deliver fast and reliable IT Services including Video System Surveillances, Projectors,
                            Large Format Display and Network Solutions.
                            Our Company is a registered enterprise structured cabling certified company,
                            authorized to deploy Panduit&reg; enterprise structured cabling systems and participate in the certification
                            Plus sm System Warranty.
                        </p>
                    </div>
                </div>
                <div id="background-to-left" className="row1" style={{ backgroundImage: "url(images/datacenters4.jpg)" }}>
                    <h2>Our mission</h2>
                    <p>
                        We are dedicated to giving you the very best of Network Infrastructures, CCTVs, Access Controls and Data Shows
                        with System integration and we are constantly working to improve our network services and solutions to overcome all expected challenges and
                        to fulfill and exceed our customer requirements.
					</p>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;