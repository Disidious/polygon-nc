import React from 'react';
import Slider from "react-slick";
import {
	Link
} from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

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
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<div id="wrapper">
			<div id="page" className="container">
				<div id="slideshow-mob" style={{ marginBottom: "2em" }}>
					<Row>
						<Col md={12} xs={12}>
							<Slider {...settings}>
								<div>
									<img src="images/slideshow1.jpg" className="image-full" alt="" />
									<div className="slideshow-content-left">
										<h2 className="slideshow-title">
											NETWORKING
                            			</h2>
										<p className="slideshow-text">⬢ Data Centers.</p>
										<p className="slideshow-text">⬢ Structure Cabling Systems.</p>
										<p className="slideshow-text">⬢ Network Infrastructure.</p>
									</div>
								</div>
								<div>
									<img src="images/slideshow2.jpg" className="image-full" alt="" />
									<div id="cctv-slide" className="slideshow-content-right">
										<h2 className="slideshow-title">
											CCTV
                            			</h2>
										<p className="slideshow-text">⬢ HD Systems.</p>
										<p className="slideshow-text">⬢ IP Systems.</p>
										<p className="slideshow-text">⬢ PTZ Cameras.</p>
									</div>
								</div>
								<div>
									<img src="images/slideshow3.jpg" className="image-full" alt="" />
									<div className="slideshow-content-left">
										<h2 className="slideshow-title">
											ACCESS CONTROL
                            			</h2>

										<p className="slideshow-text">⬢ Centralized Access Control.</p>
										<p className="slideshow-text">⬢ Standalone Access Control.</p>
										<p className="slideshow-text">⬢ Biometric Authentication.</p>
									</div>
								</div>
								<div>
									<img src="images/slideshow4.jpg" className="image-full" alt="" />
									<div id="datashow-slide" className="slideshow-content-right">
										<h2 className="slideshow-title">
											DATA SHOW
                            			</h2>

										<p className="slideshow-text">⬢ Projectors.</p>
										<p className="slideshow-text">⬢ Projector Screens.</p>
										<p className="slideshow-text">⬢ Large Format Display.</p>
									</div>
								</div>
							</Slider>
						</Col>
					</Row>
				</div>
				<Row>
					<Col md={12} className="m-auto">
						<div className="title">
							<center><h2>Welcome to<br /> Polygon Network Company</h2></center>
						</div>
					</Col>
				</Row>
				<hr />
				<Row style={{ marginTop: "1em" }}>
					<Col md={12} className="m-auto">
						<center><p style={{ textAlign: "justify", textAlignLast: "center" }}>
							We are an IT Service Provider and a System
							Integrator Company offering special skills in designing, supplying and implementing fast and reliable IT Services
							including Network Solutions, Video System
							Surveillances, System security, and Display
							solutions.
							we are an IT Service Provider and a registered enterprise
							structured cabling certified company,
							authorized to deploy Panduit® enterprise
							structured cabling systems.
							we are offering special skills in designing, supplying and implementing fast and reliable IT Services
							including Network Solutions, Video System Surveillances, System security, and Display solutions
                        </p></center>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="m-auto">
						<div className="title" style={{ margin: "0em 0em 0em 1em" }}>
							<center><h2>Our Services</h2></center>
						</div>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col md={6} xs={6} className="no-padding">
						<div className="frame">
							<Link to="/services/networking" className="button-style left-button" style={{ backgroundImage: "url(images/Networking.jpg)" }}>networking</Link>
						</div>
					</Col>
					<Col md={6} xs={6} className="no-padding">
						<div className="frame">
							<Link to="/services/accesscontrol" className="button-style" style={{ backgroundImage: "url(images/Access%20Control.jpg)" }}>access control</Link>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6} xs={6} className="no-padding">
						<div className="frame">
							<Link to="/services/cctv" id="cctv-button" className="button-style left-button" style={{ backgroundImage: "url(images/CCTV.jpg)" }}>Video System<br />Surrveillance</Link>
						</div>
					</Col>
					<Col md={6} xs={6} className="no-padding">
						<div className="frame">
							<Link to="/services/datashow" className="button-style" style={{ backgroundImage: "url(images/Data%20Show.jpg)" }}>data show</Link>
						</div>
					</Col>
				</Row>
			</div>
			
		</div>

	);
}

export default HomePage;
