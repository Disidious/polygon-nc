import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './Assets/css/default.css';
import Header from './Components/Headers/header';
import Footer from './Components/Footers/footer';
import HomePage from './Components/Pages/homePage';
import ContactUs from './Components/Pages/contactUs';
import CCTV from './Components/Pages/cctv';
import DataShow from './Components/Pages/dataShow';
import AccessControl from './Components/Pages/accessControl';
import Networking from './Components/Pages/networking';
import Projects from './Components/Pages/projects';
import Clients from './Components/Pages/clients';

function App() {
  window.scrollTo(0, 0);
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/services/cctv' component={CCTV} />
        <Route exact path='/services/datashow' component={DataShow} />
        <Route exact path='/services/accesscontrol' component={AccessControl} />
        <Route exact path='/services/networking' component={Networking} />
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/clients' component={Clients} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
