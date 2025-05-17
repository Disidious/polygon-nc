import style from './style.module.css';

import { ClientItems, PageTitle } from 'components';

import egyproImg from "assets/clients/egypro.jpg";
import collegeImg from "assets/clients/college.png";
import rayaImg from "assets/clients/raya.jpg";
import cultureImg from "assets/clients/culture.jpg";
import wadiImg from "assets/clients/wadi.jpg";
import althurayaImg from "assets/clients/althuraya.jfif";
import coffeeshopImg from "assets/clients/coffeeshop.jpg";
import goodlifeImg from "assets/clients/goodlife.png";
import rekabaImg from "assets/clients/rekaba.jpeg";
import myahelshorbImg from "assets/clients/myahelshorb.jpeg";
import lcImg from "assets/clients/lc.png";
import seedstarsImg from "assets/clients/seedstars.png";
import dorrahImg from "assets/clients/dorrah.png";
import primaplastImg from "assets/clients/primaplast.png";
import dareleftaImg from "assets/clients/darelefta.jpeg";
import trainsectorImg from "assets/clients/trainsector.jpg";
import ministryoftourismImg from "assets/clients/ministryoftourism.jpeg";
import pyramidswalkImg from "assets/clients/pyramidswalk.png";
import wallstreetImg from "assets/clients/wallstreet.jpg";
import ormanImg from "assets/clients/orman.png";
import etisalatImg from "assets/clients/etisalat.png";
import topBusinessImg from "assets/clients/topbusiness.jpg";
import lifeTogetherImg from "assets/clients/lifetogether.jpg";
import copticImg from "assets/clients/coptic.jpg";

function Clients() {
  const clients = [
    {
      img: wadiImg,
      name: "Wadi Degla"
    },
    {
      img: rayaImg,
      name: "Raya"
    },
    {
      img: egyproImg,
      name: "Egypro"
    },
    {
      img: myahelshorbImg,
      name: "Dakahlia Water and Sanitation Company"
    },
    {
      img: dareleftaImg,
      name: "Dar Al Ifta"
    },
    {
      img: ormanImg,
      name: "Shefa Al-Orman Hospital (Luxor)"
    },
    {
      img: ministryoftourismImg,
      name: "Ministry of Tourism & Antiquities"
    },
    {
      img: etisalatImg,
      name: "Etisalat"
    },
    {
      img: rekabaImg,
      name: "Administrative Control Authority"
    },
    {
      img: goodlifeImg,
      name: "Good Life"
    },
    {
      img: trainsectorImg,
      name: "El Entag El Harby"
    },
    {
      img: althurayaImg,
      name: "Al Thuraya Holdings"
    },
    {
      img: lcImg,
      name: "Lufthansa Cargo"
    },
    {
      img: seedstarsImg,
      name: "Seedstars"
    },
    {
      img: dorrahImg,
      name: "Dorrah Hospital"
    },
    {
      img: primaplastImg,
      name: "Prima Plast"
    },
    {
      img: collegeImg,
      name: "New Ramses College"
    },
    {
      img: wallstreetImg,
      name: "Wallstreet Securities Brokerage"
    },
    {
      img: coffeeshopImg,
      name: "Coffeeshop Company"
    },
    {
      img: topBusinessImg,
      name: "Top Business for Human Resource"
    },
    {
      img: lifeTogetherImg,
      name: "Life Together"
    },
    {
      img: cultureImg,
      name: "Culture and Education Foundation"
    },
    {
      img: pyramidswalkImg,
      name: "Pyramids Walk"
    },
    {
      img: copticImg,
      name: "Coptic Cathedral"
    }
  ]

	return (
		<div className={style.container}>
      <PageTitle text='Our Clients'/>
      <ClientItems
        clients={clients}
      />
		</div>
	);
}

export default Clients;
