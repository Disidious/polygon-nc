import style from './style.module.css';

import { PageTitle, ServiceHeader, TechnologyItems, TechnologyPoster } from 'components';

import cctvImg from 'assets/cctv2.jpg'
import hdCameraImg from 'assets/hdcamera.jpg'
import ipCameraImg from 'assets/ipcamera.jpg'

import hdImg from 'assets/hd.png'
import electronicsImg from 'assets/electronics.png'
import nightImg from 'assets/night.png'
import wirelessImg from 'assets/wireless.png'
import motionImg from 'assets/motion.png'
import ptzImg from 'assets/ptz.png'


function CCTV() {
  const techs = [
    {
      img: hdImg,
      title: 'High Resolution',
      description: `
        Cameras capture High definition and accurate imaging videos with high resolution 
        up to 4k and with the ability to record up to 30fps. 
        The range of HD cameras continues to expand to adapt to all application requirements.
      `
    },
    {
      img: electronicsImg,
      title: 'Remote Access',
      description: `
        Cameras use Starlight Technology which enables the camera to display and record coloured videos in low light and no light. 
        Starlight Sensors provide clear images regardless of the lighting conditions during any time of the day.
      `
    },
    {
      img: nightImg,
      title: 'Night Vision',
      description: `
        Cameras use Starlight Technology which enables the camera to display and record coloured videos in low light and no light. 
        Starlight Sensors provide clear images regardless of the lighting conditions during any time of the day.
      `
    },
    {
      img: wirelessImg,
      title: 'Remote Access',
      description: `
        Wireless cameras are very flexible since they give you the ability to place them in any 
        location that you desire without worrying about connecting them to an outlet or moving them from a 
        location to another without dealing with any wires.
      `
    },
    {
      img: ptzImg,
      title: 'Pan Tilt Zoom (PTZ)',
      description: `
        PTZ cameras can be controlled remotely, it can pan horizontally (360°) and tilt vertically, 
        also it can zoom in and enhance the image quality without pixelation. 
        PTZ allows to monitor large areas with a single camera with great quality.
      `
    },
    {
      img: motionImg,
      title: 'Motion Detection',
      description: `
        Motion Detection can greatly make your surveillance better as it has the ability to detect motion, 
        capture the events and send notifications (Email, SMS), 
        also it saves storage space and a lot of time as it only records when motion is detected.
      `
    }
  ]
  
	return (
		<div className={style.container}>
			<ServiceHeader 
				imgSrc={cctvImg} 
				title={'CCTV'} 
				description={`
          Our professional business CCTV systems provide ultimate protection with state-of-the-art High Definition cameras featuring infrared capability. 
          Day or night, you'll get high-resolution details and accurate imaging, ensuring reliable surveillance for peace of mind. 
          Trust our cutting-edge solutions to handle your security needs, allowing you to focus on what matters most.
				`}
			/>
      
			<PageTitle text={'Technologies'}/>
      <TechnologyPoster
        techImg={hdCameraImg}
        techTitle='HD Cameras'
        techDescription={`
          HD Cameras are much simpler to install, cost effective, 
          allow you to use longer cable runs up to 500 meters without loss of quality and resolution can reach up to 4k. 
          HD Cameras are available with fixed or varifocal lenses in dome or bullet housings.
        `}
        secondTechImg={ipCameraImg}
        secondTechTitle='IP Cameras'
        secondTechDescription={`
          IP Cameras allow you to see the finest details with high resolution and accurate imaging, 
          IP Cameras also come with several features and technologies, including power over Ethernet, 
          Wi-Fi, and others, which means you can use wireless or you can use as few cables as possible.
        `}
      />
      <TechnologyItems techs={techs}/>
		</div>
	);
}

export default CCTV;
