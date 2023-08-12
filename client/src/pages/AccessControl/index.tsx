import style from './style.module.css';

import { PageTitle, ServiceHeader, TechnologyItems, TechnologyPoster } from 'components';

import accessControlImg from 'assets/access-control2.jpeg'
import biometricImg from 'assets/biometric.webp'
import cardsImg from 'assets/access-control.jpg'
import standaloneImg from 'assets/standalone.png'
import centralizedImg from 'assets/centralized.png'


function AccessControl() {
  const techs = [
    {
      img: standaloneImg,
      title: 'Standalone Access Control',
      description: `
        Standalone access control refers to a self-contained security system that operates independently without 
        relying on a centralized network or server. It provides a simple and efficient 
        way to control access to specific areas or resources within a facility.
      `
    },
    {
      img: centralizedImg,
      title: 'Centralized Access Control',
      description: `
        Centralized access control refers to a security system where all access control decisions and data management are handled 
        from a central server. This system consolidates the control and monitoring of access across 
        multiple entry points within a facility.
      `
    }
  ]

	return (
		<div className={style.container}>
			<ServiceHeader 
				imgSrc={accessControlImg} 
				title={'Access Control'} 
				description={`
          Protect your business with our advanced Access Control Solutions. 
          These integrated security technologies ensure controlled access to computing resources, 
          enhancing operational efficiency. Tailored for any facility size, our full-featured solutions offer robust protection and peace of mind, 
          allowing you to focus on core operations confidently.
				`}
        imgPosition='left'
			/>
      
			<PageTitle text={'Types of Authentication'}/>
      <TechnologyPoster
        techImg={biometricImg}
        techTitle='Biometric Authentication'
        techDescription={`
          Protect your facility with our Biometric Access Control Systems that use sophisticated biometrics identification scanners 
          and door locks to recognize fingerprints, irises, or faces instead of cards. 
          The Access Control System not only permits entry but also gives the data regarding the entry of persons.
        `}
        secondTechImg={cardsImg}
        secondTechTitle='Cards'
        secondTechDescription={`
          Protect your property with our range of different readers for cards and ID badges, each suitable for a different purpose. 
          For opening doors and other access control applications, both proximity cards and MIFARE ® product technology readers are suitable.
        `}
      />
      <PageTitle text={'Types of Access Control'}/>

      <TechnologyItems techs={techs}/>
		</div>
	);
}

export default AccessControl;
