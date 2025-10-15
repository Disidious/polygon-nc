import style from './style.module.css';

import { PageTitle, ProjectItems } from 'components';

import acaImg from 'assets/aca.jpg';
import daiImg from 'assets/dai.jpg';
import eeehImg from 'assets/eeeh.png';
import ccImg from 'assets/cc.jpg';
import pwcImg from 'assets/pwc.jpg';
import sahlImg from 'assets/sahl.png';
import mtaImg from 'assets/mta.jpg';
import etisalatImg from 'assets/etisalat.jpg';

type ProjectType = {
  img: string;
  title: string;
  subTitle: string;
  points: string[];
}

function Projects() {
  const projects: ProjectType[] = [
    {
      img: acaImg,
      title: "Administrative Control Authority",
      subTitle: "Supplying, designing and installing",
      points: [
        "Structured cabling system for the data center at the new capital using MPO fiber cables interconnection.",
        "Structured cabling system for the data center at the new capital using SM fiber cables interconnection.",
        "Fiber fusion splicing and testing.",
        "Wyr-Grid and cable trays."
      ]
    },
    {
      img: daiImg,
      title: "Dar Al Ifta",
      subTitle: "Supplying, designing and installing",
      points: [
        "Structured cabling system for the data center using UTP and fiber cables interconnection.",
        "Structured cabling systems for digital telephone system.",
        "Fiber fusion splicing and testing.",
        "Centralized access control system for the the data center.",
        "IP system surveillance."
      ]
    },
    {
      img: eeehImg,
      title: "El Entag El Harby",
      subTitle: "Supplying, designing and installing",
      points: [
        "UTP network infrastructure for IP cameras.",
        "Centralized access control system for the data center.",
        "IP system surveillance."
      ]
    },
    {
      img: sahlImg,
      title: "Shefa Al-Orman Hospital (Luxor)",
      subTitle: "Supplying, designing and installing",
      points: [
        "Structured cabling system for the data center using fiber cables interconnection.",
        "Fiber fusion splicing and testing.",
        "IP system surveillance.",
        "Wyr-Grid and cable trays."
      ]
    },
    {
      img: etisalatImg,
      title: "Etisalat",
      subTitle: "Supplying, designing and installing",
      points: [
        "Structured cabling system for call center at Mokatam branch.",
        "Access Control System.",
      ]
    },
    {
      img: mtaImg,
      title: "Ministry of Tourism and Antiquities",
      subTitle: "Supplying, designing and installing",
      points: [
        "Data center migration.",
        "Backup and disaster recovery arrangement.",
        "Physical move of servers, hardware devices and applications.",
        "WAN and LAN configuration and testing."
      ]
    },
    {
      img: ccImg,
      title: "Coptic Cathedral",
      subTitle: "Supplying, designing and installing",
      points: [
        "UTP network infrastructure for IP cameras at the Pope headquarter.",
        "Stand-alone access control system.",
        "IP system surveillance.",
        "Cables trays and pipes."
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
