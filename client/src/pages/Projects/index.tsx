import style from './style.module.css';

import { PageTitle, ProjectItems } from 'components';

import acaImg from 'assets/aca.jpg';
import daiImg from 'assets/dai.jpg';
import eeehImg from 'assets/eeeh.png';
import ccImg from 'assets/cc.jpg';
import lcImg from 'assets/lc.png';
import pwcImg from 'assets/pwc.jpg';

function Projects() {
  const projects = [
    {
      img: acaImg,
      title: "Administrative Capital Authority",
      subTitle: "Currently supplying, designing and installing",
      points: [
        "Structured cabling system for Datacenter (80 Racks) at the new capital using MPO fiber cables interconnection.",
        "Structured cabling system for Datacenter (36 Racks) at the new capital using SM fiber cables interconnection.",
        "Fiber fusion splicing and testing.",
        "Wyr-Grid and cable trays."
      ]
    },
    {
      img: daiImg,
      title: "Dar Al Ifta",
      subTitle: "Supplying, designing and installing",
      points: [
        "Structured cabling system for Datacenter (10 Racks) using UTP and fiber cables interconnection.",
        "Structured cabling systems for digital telephone system.",
        "Fiber fusion splicing and testing.",
        "Centralized access control system for the Datacenter.",
        "IP system surveillance."
      ]
    },
    {
      img: eeehImg,
      title: "El Entag El Harby",
      subTitle: "Supplying, designing and installing",
      points: [
        "UTP network infrastructure for IP cameras.",
        "Centralized access control system for the Datacenter.",
        "IP system surveillance."
      ]
    },
    {
      img: ccImg,
      title: "Coptic Cathedral",
      subTitle: "Supplying, designing and installing",
      points: [
        "UTP network infrastructure for IP cameras at Pope headquarter.",
        "Stand-alone access control system.",
        "IP system surveillance.",
        "Cables trays and pipes."
      ]
    },
    {
      img: lcImg,
      title: "Lufthansa Cargo",
      subTitle: "Supplying, designing and installing",
      points: [
        "UTP network infrastructure at airport branch.",
        "Digital telephone system.",
        "Fiber fusion splicing and testing.",
        "Stand-alone access control system.",
        "IP system surveillance."
      ]
    },
    {
      img: pwcImg,
      title: "Pyramids Walk Compound",
      subTitle: "Supplying, designing and installing",
      points: [
        "UTP and fiber network infrastructure.",
        "Fiber fusion splicing and testing.",
        "Fiber fusion splicing and testing.",
        "HD system surveillance.",
        "Cables trays and pipes."
      ]
    }
  ]

	return (
		<div className={style.container}>
      <PageTitle text='Latest Projects'/>
      <div>
        <ProjectItems
          projects={projects}
        />
      </div>
		</div>
	);
}

export default Projects;
