import style from './style.module.css';

import { MainBackground, PageTitle, ServiceHeader, TechnologyPoster } from 'components';

import datashowImg from 'assets/datashow2.webp'
import shortThrowImg from 'assets/short-throw.jpg'
import interactiveImg from 'assets/interactive.jpg'
import videoWallImg from 'assets/videowall.jpg'


function DataShow() {
	return (
		<div className={style.container}>
			<MainBackground/>
			<ServiceHeader 
				imgSrc={datashowImg} 
				title={'Data Show'} 
				description={`
          We specialize in high-quality projector and display solutions, 
          meeting the highest standards of brightness, resolution, and contrast. 
          From small meeting rooms to large auditoriums, we have the perfect solution for you. 
          Count on our expert team for a seamless and impressive viewing experience at your intended place of projection.
				`}
        imgPosition='center'
			/>

      <PageTitle text={'Projector Solutions'}/>
      <TechnologyPoster
        techImg={shortThrowImg}
        techTitle='Short Throw and Ultra Short Throw'
        techDescription={`
         Discover our (Ultra) Short Throw Projector Solutions, 
         mounted inches away from the wall to prevent shadows, 
         allowing free movement for presenters and listeners. 
         Enjoy clean, crisp viewing with robust networking capability.
        `}
        secondTechImg={interactiveImg}
        secondTechTitle='Interactive Projectors'
        secondTechDescription={`
          Unlock the full potential of presentations with our (Ultra) Short Throw Interactive Projector Solutions. 
          Easily draw, zoom, and rotate using your finger or an IR pen, 
          fostering an engaging environment for any event or purpose.
        `}
        techImgPosition='50% 70%'
      />

      <PageTitle text={'Video Wall Solution'}/>
      <TechnologyPoster
        techImg={videoWallImg}
        techTitle='Video Wall'
        techDescription={`
          Discover top-quality video wall display solutions tailored to your needs. 
          With a diverse portfolio of technologies, sizes, and resolutions, 
          we have the perfect fit for your application. 
          Our dedicated tools and professional resources ensure optimal performance for an immersive visual experience.
        `}
        techImgPosition='top'
      />
      
		</div>
	);
}

export default DataShow;
