import React from 'react';

function DataShow() {
    return (
        <div id="wrapper">
            <div id="page" class="container">
                <div class="row1" style={{ backgroundImage: "url(/images/projector1.jpg)" }}>
                    <h2>Data Show</h2>
                    <p style={{ textAlign: "justify" }}>
                        Poylgon delivers comprehensive projector and display solutions with high brightness,
                        high resolution, high contrast and high quality no matter where your intended place for the projection is.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6 m-auto">
                        <div class="title">
                            <h2>Projector Solutions</h2>
                            <span class="byline">Short Throw / Ultra Short</span>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            Polygon Network Company offers (Ultra) Short Throw Projector Solutions that can be mounted inches away from a wall which
                            prevents shadows and allow the presenter and the listeners to move freely infront of the screen and also display clean and crisp
                            viewing and include robust networking capability.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src="/images/datashow1.jpg" style={{ width: "90%", float: "right" }} />
                    </div>
                </div>
                <div class="row" style={{marginTop: "1em"}}>
                    <div class="col-md-6 m-auto">
                        <div class="title">
                            <div class="byline" style={{ paddingTop: "0em" }}>interactive projectors</div>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            Our company offers (Ultra) Short Throw Interactive Projector Solutions that allows the presenter to draw, zoom and rotate
                            using his/her finger or an IR pen, and also create an exciting enviroment for any kind of event or purpose.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src="/images/datashow3.jpg" style={{ width: "80%", float: "right" }} />
                    </div>
                </div>
                <div class="row" style={{ marginTop: "2em" }}>
                    <div class="col-md-12 m-auto">
                        <div class="title" style={{ margin: "1em" }}>
                            <center><h2>Projector Screens</h2></center>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DataShow;