import { useRef } from 'react';
import style from './style.module.css';

import { Button, DotsAnimation, HomeServiceCard, HomeShopSlider, PageTitle } from 'components';

import headerBackground from 'assets/home-header-background.webp'
import datacenterImg from 'assets/datacenter.jpg'
import cctvImg from 'assets/hdcamera.jpg'
import accessControlImg from 'assets/access-control.jpg'
import datashowImg from 'assets/datashow2.webp'
import panduitLogo from 'assets/PanduitWhite.png'

function Home() {
	const animationParentRef = useRef<HTMLDivElement>(null)

	return (
		<div className={style.container}>
			<div className={style.headerContainer} ref={animationParentRef}>
				<DotsAnimation parentRef={animationParentRef}/>
				<img className={style.headerBackground} src={headerBackground}/>
				<div className={style.header}>
					<div className={style.headerContent}>
						<h1>
							We Are Polygon Network Company
						</h1>
						<div className={style.partnerBadge}>
							<img src={panduitLogo} alt="Panduit Logo" width={150}/>
							<p>
								Silver Partner
							</p>
						</div>
						<p>
							We are an IT Service Provider and a System
							Integrator Company offering special skills in designing, supplying and implementing fast and reliable IT Services
							including Network Solutions, Video System
							Surveillances, System security, and Display
							solutions.
						</p>
						<div className={style.headerButtonsContainer}>
							<Button text={"Shop"} goto={"/shop"} btnClass={style.headerButton} secondary/>
							<Button text={"Get in Touch"} goto={"/contactus"} btnClass={style.headerButton} secondary/>
						</div>
					</div>
				</div>
			</div>

			<PageTitle text={"Shop Categories"} />

			<HomeShopSlider />

			<PageTitle text={"Our Services"} />
			
			<HomeServiceCard 
				imgSrc={datacenterImg}
				title="Networking" 
				points={[
					"Data Centers",
					"Structure Cabling Systems",
					"Network Infrastructure"
				]}
				btnGoto='/services/networking'
			/>

			<HomeServiceCard 
				imgSrc={cctvImg}
				title="CCTV" 
				points={[
					"HD Systems",
					"IP Systems",
					"PTZ Cameras"
				]}
				btnGoto='/services/cctv'
				inverted
			/>

			<HomeServiceCard 
				imgSrc={accessControlImg}
				title="Access Control" 
				points={[
					"Centralized Access Control",
					"Standalone Access Control",
					"Biometric Authentication"
				]}
				btnGoto='/services/accesscontrol'
			/>

			<HomeServiceCard 
				imgSrc={datashowImg}
				title="Data Show" 
				points={[
					"Projectors",
					"Projector Screens",
					"Large Format Display"
				]}
				btnGoto='/services/datashow'
				inverted
			/>
			
		</div>
	);
}

export default Home;
