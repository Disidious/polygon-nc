import React from 'react';

function DataShow() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row1" style={{ backgroundImage: "url(/images/projector1.jpg)" }}>
                    <h2>Data Show</h2>
                    <p>
                        Protect your property with our professional business CCTV systems including High Definition cameras and
                        infrared capability that can give you high resolution detail and accurate imaging any time of the day.
                    </p>
                </div>
                <div class="cards">
                    <div class="card1 card1-first" style={{ backgroundImage: "url(/images/projector2.png)" }}>
                        <h2>access your cameras anywhere</h2>
                        <p>Access your cameras via your smartphone or any other internet-enabled devices.</p>
                    </div>
                    <div class="card1 card1-second" style={{ backgroundImage: "url(/images/projector2.png)" }}>
                        <h2>infrared capability</h2>
                        <p>Cameras have the capability to capture video in low light and no light.</p>
                    </div>
                    <div class="card1 card1-first" style={{ backgroundImage: "url(/images/projector2.png)" }}>
                        <h2>HD and accurate imaging</h2>
                        <p>Cameras capture High definition and accurate imaging videos during any time of the day.</p>
                    </div>
                    <div class="card1 card1-second" style={{ backgroundImage: "url(/images/projector2.png)" }}>
                        <h2>HD imaging</h2>
                        <p>Cameras capture High definition and accurate imaging videos during any time of the day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataShow;