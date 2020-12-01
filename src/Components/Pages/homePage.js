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
	return (
		<div id="wrapper">
			<div id="page" class="container">
				<div id="slideshow-mob" style={{marginBottom: "2em"}}>
					<div class="row">
						<div class="col-12">
							<Slider {...settings}>
								<div>
									<div class="image image-full"><img src="images/datacenter.jpg" alt="" /></div>
								</div>
								<div>
									<div class="image image-full"><img src="images/datacenter.jpg" alt="" /></div>
								</div>
								<div>
									<div class="image image-full"><img src="images/datacenter.jpg" alt="" /></div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
				<div class="row text-left">
					<div class="col-lg-6 col-12">
						<div class="title">
							<h2>About Us<br /></h2>
						</div>
						<span class="byline">Welcome to Polygon Network Company</span>
						<p style={{ textAlign: "justify" }}>
							Our Company is a registered enterprise structured cabling certified company,
							authorized to deploy Panduit&reg; enterprise structured cabling systems and participate in the certification
							Plus sm System Warranty, and we are dedicated to giving you the very best of Network Infrastructures, CCTVs, Access Controls and Data Shows
							with System integration.
						</p>
						<div class="byline">Why us? <br /></div>
						<p>
							<li>
								We care about customers and relationships more than transactions.
                            </li>
							<li>
								We focus on efficiency, quality and integrity.
                            </li>
						</p>
						<p>
							If you have any questions or comments, please don't hesitate to <Link to="/ContactUs"><strong>contact us</strong></Link>
						</p>
					</div>
					<div class="col-lg-3 col-6">
						<div class="title">
							<h2>Services<br /></h2>
						</div>
						<div >
							<div class="frame frame-small">
								<Link to="/Services/Networking" class="button-style1 btn1" style={{ backgroundImage: "url(images/Networking.jpg)" }}>networking</Link>
							</div>
							<br />
							<div class="frame frame-small">
								<Link to="/Services/AccessControl" class="button-style1 btn1" style={{ backgroundImage: "url(images/Access%20Control.jpg)" }}>access control</Link>
							</div>
							<div >
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-1">
						<div class="title">
							<h2><br /></h2>
						</div>
						<div >
							<div class="frame frame-small">
								<Link to="/Services/CCTV" class="button-style1 btn1" style={{ backgroundImage: "url(images/CCTV.jpg)" }}>CCTV</Link>
							</div>
							<br />
							<div class="frame frame-small">
								<Link to="/Services/DataShow" class="button-style1 btn1" style={{ backgroundImage: "url(images/Data%20Show.jpg)" }}>data show</Link>
							</div>
						</div>
					</div>
				</div>
				<div class="row">

				</div>
			</div>

		</div>


	);
}

export default HomePage;
