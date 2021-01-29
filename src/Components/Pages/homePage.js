import React from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import {
	Link
} from 'react-router-dom';

function HomePage() {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		cssEase: "linear",
		pauseOnHover: true,
	};
	window.scrollTo(0, 0);
	return (
		<div id="wrapper">
			<div id="page" className="container">
				<div id="slideshow-mob" style={{ marginBottom: "2em" }}>
					<div className="row">
						<div className="col-12">
							<Slider {...settings}>
								<div>
									<img src="images/slideshow1.jpg" class="image-full" alt="" />
									<div className="slideshow-content-left">
										<h2 className="slideshow-title">
											NETWORK SOLUTIONS
                            			</h2>
										<p className="slideshow-text">⬢ Data Centers.</p>
										<p className="slideshow-text">⬢ Structure Cabling Systems.</p>
										<p className="slideshow-text">⬢ Network Infrastructure.</p>
									</div>
								</div>
								<div>
									<img src="images/slideshow2.jpg" class="image-full" alt="" />
									<div id="cctv-slide" className="slideshow-content-right">
										<h2 className="slideshow-title">
											VIDEO SYSTEM SURVEILLANCE
                            			</h2>
										<p className="slideshow-text">⬢ HD Systems.</p>
										<p className="slideshow-text">⬢ IP Systems.</p>
										<p className="slideshow-text">⬢ PTZ Cameras.</p>
									</div>
								</div>
								<div>
									<img src="images/slideshow3.jpg" class="image-full" alt="" />
									<div className="slideshow-content-left">
										<h2 className="slideshow-title">
											SYSTEM SECURITY
                            			</h2>

										<p className="slideshow-text">⬢ Centralized Access Control.</p>
										<p className="slideshow-text">⬢ Standalone Access Control.</p>
										<p className="slideshow-text">⬢ Biometric Authentication.</p>
									</div>
								</div>
								<div>
									<img src="images/slideshow4.jpg" class="image-full" alt="" />
									<div id="datashow-slide" className="slideshow-content-right">
										<h2 className="slideshow-title">
											DISPLAY SOLUTIONS
                            			</h2>

										<p className="slideshow-text">⬢ Projectors.</p>
										<p className="slideshow-text">⬢ Projector Screens.</p>
										<p className="slideshow-text">⬢ Large Format Display.</p>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 m-auto">
						<div class="title">
							<center><h2>Welcome to Polygon Network Company</h2></center>
						</div>
					</div>
				</div>
				<hr />
				<div className="row" style={{ marginTop: "1em" }}>
					<div className="col-md-12 m-auto">
						<p style={{ textAlign: "justify" }}><center>
							We are an IT Service Provider and a System Integrator Company located in Cairo Egypt.
							We deliver fast and reliable IT Services including Video System Surveillances, Projectors,
							Large Format Display and Network Solutions, and we are dedicated to giving you the very best of Network Infrastructures, CCTVs,
							Access Controls and Data Shows with System integration and we are constantly working to improve our network
							services and solutions to overcome all expected challenges and to fulfill and exceed our customer requirements.
							Our Company is a registered enterprise structured cabling certified company,
							authorized to deploy Panduit&reg; enterprise structured cabling systems and participate in the certification
							Plus sm System Warranty.
                        </center></p>
					</div>
				</div>
				<div class="row">
					<div class="col-12 m-auto">
						<div class="title" style={{ margin: "0em 0em 0em 1em" }}>
							<center><h2>Our Services</h2></center>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-lg-6 col-6 no-padding">
						<div className="frame">
							<Link to="/services/networking" id="left-button" className="button-style" style={{ backgroundImage: "url(images/Networking.jpg)" }}>networking</Link>
						</div>
					</div>
					<div className="col-lg-6 col-6 no-padding">
						<div className="frame">
							<Link to="/services/accesscontrol" className="button-style" style={{ backgroundImage: "url(images/Access%20Control.jpg)" }}>access control</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-6 no-padding">
						<div className="frame">
							<Link to="/services/cctv" id="left-button" className="button-style" style={{ backgroundImage: "url(images/CCTV.jpg)" }}>CCTV</Link>
						</div>
					</div>
					<div className="col-lg-6 col-6 no-padding">
						<div className="frame">
							<Link to="/services/datashow" className="button-style" style={{ backgroundImage: "url(images/Data%20Show.jpg)" }}>data show</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="row">

			</div>
		</div>

	);
}

export default HomePage;
