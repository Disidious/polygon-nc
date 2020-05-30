import React from 'react';

function AccessControl() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row1" style={{ backgroundImage: "url(/images/AC6.jpg)" }}>
                    <h2>Access Control</h2>
                    <p style={{ textAlign: "justify" }}>
                        Keep you business safe and secure by controlling who can view or use resources in a computing environment with
                        our Access Control Solutions that integrates the most advanced security technologies with improved operational efficiencies
                        and instilled confidence that precious assets, resources and people are secured and protected,
                        to bring you full-featured security solutions serving any size facility.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6 m-auto">
                        <div class="title">
                            <h2 style={{ marginTop: "1em" }}>Door management</h2>
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
            </div>
        </div>
    );
}
export default AccessControl;