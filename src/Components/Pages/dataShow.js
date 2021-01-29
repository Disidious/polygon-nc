import React from 'react';

function DataShow() {
    window.scrollTo(0, 0);
    return (
        <div id="wrapper">
            <div id="page" className="container">
                <div className="row1" style={{ backgroundImage: "url(/images/projector1.jpg)" }}>
                    <h2>Data Show</h2>
                    <p style={{ textAlign: "justify" }}>
                        Poylgon delivers comprehensive projector and display solutions with high brightness,
                        resolution, contrast and quality no matter where your intended place for the projection is.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Projector solutions</h2></center>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <span className="byline">Short Throw / Ultra Short</span>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            There are (Ultra) Short Throw Projector Solutions that can be mounted inches away from a wall which
                            prevents shadows and allow the presenter and the listeners to move freely infront of the screen and also display clean and crisp
                            viewing and include robust networking capability.
                        </p>
                    </div>
                    <div className="col-lg-5 col-5">
                        <img src="/images/datashow1.jpg" style={{ width: "100%", float: "right" }} />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-lg-7 col-7 m-auto">
                        <div className="title">
                            <div className="byline" style={{ paddingTop: "0em" }}>interactive projectors</div>
                        </div>
                        <p style={{ textAlign: "justify" }}>
                            There are (Ultra) Short Throw Interactive Projector Solutions that allows the presenter to draw, zoom and rotate
                            using his/her finger or an IR pen, and also create an exciting enviroment for any kind of event or purpose.
                        </p>
                    </div>
                    <div className="col-lg-5 col-5 imageDesc">
                        <img src="/images/datashow3.jpg"/>
                    </div>
                </div>
                <hr />
                <div className="row" style={{ height: "5em" }}></div>
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <div className="title" style={{ margin: "0em 0em 0em 1em" }}>
                            <center><h2>Video wall solution</h2></center>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "0.05em" }} />
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-md-12">
                        <center><img src="/images/videowall2.jpg" style={{ width: "80%" }} /></center>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1em" }}>
                    <div className="col-md-12 m-auto">
                        <p style={{ textAlign: "justify" }}><center>
                            The video wall display solutions are often the highest quality offered on the market.
                            Our portfolio often includes the right solution for your application,
                            available in various technologies (LCD, LED rear-projection and RGB laser rear-projection),
                            sizes and resolutions.
                            Our dedicated tools and a variety of professional resources ensure that your video wall gets the most out of it.
                        </center></p>
                    </div>
                </div>
                <hr />
            </div>
        </div >
    );
}

export default DataShow;