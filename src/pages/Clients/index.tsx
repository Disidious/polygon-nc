import style from './style.module.css';

import { ClientItems, PageTitle } from 'components';

import egyproImg from "assets/clients/egypro.jpg";
import collegeImg from "assets/clients/college.png";
import rayaImg from "assets/clients/raya.jpg";
import lifetogetherImg from "assets/clients/lifetogether.jpg";
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
import topbusinessImg from "assets/clients/topbusiness.jpg";
import pyramidswalkImg from "assets/clients/pyramidswalk.png";
import darelasherImg from "assets/clients/darelasher.jpg";

function Clients() {
  const clients = [
    {
      img: egyproImg,
      name: "Egypro"
    },
    {
      img: collegeImg,
      name: "New Ramses College"
    },
    {
      img: rayaImg,
      name: "Raya"
    },
    {
      img: lifetogetherImg,
      name: "Life Together"
    },
    {
      img: cultureImg,
      name: "Culture and Education Foundation"
    },
    {
      img: wadiImg,
      name: "Wadi Degla"
    },
    {
      img: althurayaImg,
      name: "Al Thuraya Holdings"
    },
    {
      img: coffeeshopImg,
      name: "Coffeeshop Company"
    },
    {
      img: goodlifeImg,
      name: "Good Life"
    },
    {
      img: rekabaImg,
      name: "Administrative Control Authority"
    },
    {
      img: myahelshorbImg,
      name: "Dakahlia water and sanitation company"
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
      img: dareleftaImg,
      name: "Dar Al Ifta"
    },
    {
      img: darelasherImg,
      name: "Dar Al Asher"
    },
    {
      img: trainsectorImg,
      name: "El Entag El Harby"
    },
    {
      img: topbusinessImg,
      name: "Top Business"
    },
    {
      img: pyramidswalkImg,
      name: "Pyramids Walk"
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
