import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.css';
import Header from './Components/Headers/header';
import Footer from './Components/Footers/footer';
import HomePage from './Components/Pages/homePage';
import ContactUs from './Components/Pages/contactUs';
import AboutUs from './Components/Pages/aboutUs';
import CCTV from './Components/Pages/cctv';
import DataShow from './Components/Pages/dataShow';
import AccessControl from './Components/Pages/accessControl';
import Networking from './Components/Pages/networking';
import Projects from './Components/Pages/projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/services/cctv' component={CCTV} />
        <Route exact path='/services/datashow' component={DataShow} />
        <Route exact path='/services/accesscontrol' component={AccessControl} />
        <Route exact path='/services/networking' component={Networking} />
        <Route exact path='/projects' component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
