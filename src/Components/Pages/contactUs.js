import React from 'react';

function ContactUs() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row">
                    <div class="col-12 m-auto">
                        <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Contact Us</h2></center>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-lg-4 col-4">
                        <div class="text-centered">
                            <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                                <h2>Contact Us</h2>
                            </div>
                            <div class="byline">Phone Number<br /><strong>0101 253 8320</strong></div>
                            <div class="byline-lower">EMAIL<br /><strong>info@polygon-nc.com</strong></div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-4">
                        <div class="text-centered">
                            <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                                <h2>Support</h2>
                            </div>
                            <div class="byline">Phone Number<br /><strong>0101 219 4689</strong></div>
                            <div class="byline-lower">EMAIL<br /><strong>support@polygon-nc.com</strong></div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-4">
                        <div class="text-centered">
                            <div class="title" style={{ margin: "0em 0em 0em 1em" }}>
                                <h2>Sales</h2>
                            </div>
                            <div class="byline">Phone Number<br /><strong>/</strong></div>
                            <div class="byline-lower">EMAIL<br /><strong>sales@polygon-nc.com</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;