import React from 'react';

function AccessControl() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row1" style={{ backgroundImage: "url(/images/AC6.jpg)" }}>
                    <h2>Access Control</h2>
                    <p style={{ textAlign: "justify" }}>
                        Keep your business safe and secure by controlling who can view or use resources in a computing environment with
                        our Access Control Solutions that integrates the most advanced security technologies with improved operational efficiencies
                        and instilled confidence that precious assets, resources and people are secured and protected,
                        to bring you full-featured security solutions serving any size facility.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-12 m-auto">
                        <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Types of authentications</h2></center>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-md-6 m-auto">
                        <div class="title">
                            <span class="byline">Biometric authentication</span>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            Protect your facility with our Biometric Access Control Systems that use sophisticated biometrics identification scanners
                            and door locks to recognize fingerprints, irises, or faces instead of cards. The Access Control System not only permits entry
                            but also gives the data regarding the entry of persons.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src="/images/biometric_security3.jpg" style={{ width: "80%", float: "right" }} />
                    </div>
                </div>
                <div class="row" style={{ marginTop: "1em" }}>
                    <div class="col-md-6 m-auto">
                        <div class="title">
                            <span class="byline">Cards</span>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            Protect your property with our range of different readers for cards and ID badges,
                            each suitable for a different purpose.
                            For opening doors and other access control applications,
                            both proximity cards and MIFARE ® product technology readers are suitable,
                            while companies using regular ID cards will benefit from the use of magnetic stripe or barcode readers for access,
                            data collection and more.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src="/images/card.jpg" style={{ width: "80%", float: "right" }} />
                    </div>
                </div>
                <hr />
                <div class="row" style={{ height: "5em" }}></div>
                <div class="row">
                    <div class="col-md-12 m-auto">
                        <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Types of access control</h2></center>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "0.05em" }} />
                <div class="row" style={{ padding: "2em 0em 2em 0em" }}>
                    <div class="col-md-2">
                        <img src="/images/standalone.png" style={{ width: "90%", paddingBottom: "1em" }} />
                    </div>
                    <div class="col-md-3 m-auto">
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Standalone<br/>Access Control</h2>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2">
                        <img src="/images/centralized.png" style={{ width: "90%", paddingTop: "0em" }} />
                    </div>
                    <div class="col-md-3 m-auto">
                        <h2 style={{ left: "0px", fontSize: "1.5em" }}>Centralized<br/>Access Control</h2>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
}
export default AccessControl;