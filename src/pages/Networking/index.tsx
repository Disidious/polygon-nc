import style from './style.module.css';

import { HexagonItems, PageTitle, ServiceHeader } from 'components';

import datacenterImg from 'assets/datacenter2.avif'

import fiberImg from 'assets/fiber.png'
import mpoImg from 'assets/mpo.jpeg'
import singleImg from 'assets/singlemode.jpeg'
import multiImg from 'assets/multimode.jpeg'

import copperImg from 'assets/copper.png'
import utpImg from 'assets/utp.jpeg'
import stpImg from 'assets/stp.jpeg'

import rackImg from 'assets/rack.png'
import indoorImg from 'assets/indoor.jpeg'
import outdoorImg from 'assets/outdoor.jpeg'
import overheadImg from 'assets/overhead.png'

import portImg from 'assets/port.png'
import preloadedImg from 'assets/preloaded.jpeg'
import modularImg from 'assets/modular.jpeg'

import faceplateImg from 'assets/faceplate.png'
import internalImg from 'assets/internal.jpeg'
import externalImg from 'assets/external.jpeg'
import floorBoxImg from 'assets/floorbox.jpeg'

import cabelTrayImg from 'assets/cabletray.png'
import wyrgridImg from 'assets/wyrgrid.jpg'
import wirebasketImg from 'assets/wirebasket.jpeg'
import fiberRunnerImg from 'assets/fiberrunner.jpg'
import { useEffect } from 'react';

function Networking() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	
	return (
		<div className={style.container}>
			<ServiceHeader 
				imgSrc={datacenterImg} 
				title={'Networking'} 
				description={`
				We provide the optimum LAN and WAN network solution from single connectivity to 
				multi-point to meet your current and future needs. We can plan, design and execute 
				the structured cabling system for your company that will be secure, 
				robust and scalable to reach the peak level of productivity and performance. 
				If you're thinking about rewiring or reconfiguring your current network setup, it's all right within our wheelhouse.
				`}
			/>
			<PageTitle text={'Structured Cabling System'}/>
			<div className={style.itemsContainer}>
				<HexagonItems
					mainImg={fiberImg}
					title='Fiber Cables'
					firstImg={mpoImg}
					firstTitle='MPO'
					secondImg={singleImg}
					secondTitle='Single Mode'
					thirdImg={multiImg}
					thirdTitle='Multi Mode'
				/>

				<HexagonItems
					mainImg={copperImg}
					title='Copper Cables'
					firstImg={utpImg}
					firstTitle='UTP'
					secondImg={stpImg}
					secondTitle='STP'
					inverted
				/>
			</div>

			<div className={style.itemsContainer}>
				<HexagonItems
					mainImg={rackImg}
					title='Racks'
					firstImg={indoorImg}
					firstTitle='Indoor'
					secondImg={outdoorImg}
					secondTitle='Outdoor'
					thirdImg={overheadImg}
					thirdTitle='Overhead'
				/>

				<HexagonItems
					mainImg={portImg}
					title='Patch Panels'
					firstImg={preloadedImg}
					firstTitle='Pre-loaded'
					secondImg={modularImg}
					secondTitle='Modular'
					inverted
				/>
			</div>

			<div className={style.itemsContainer}>
				<HexagonItems
					mainImg={faceplateImg}
					title='Faceplates'
					firstImg={internalImg}
					firstTitle='Internal'
					secondImg={externalImg}
					secondTitle='External'
					thirdImg={floorBoxImg}
					thirdTitle='Floor Box'
				/>

				<HexagonItems
					mainImg={cabelTrayImg}
					title='Cabel Trays'
					firstImg={wyrgridImg}
					firstTitle='Wyr-Grid'
					secondImg={wirebasketImg}
					secondTitle='Wire Basket'
					thirdImg={fiberRunnerImg}
					thirdTitle='Fiber Runner'
					inverted
				/>
			</div>
		</div>
	);
}

export default Networking;
