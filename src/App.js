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

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/ContactUs' component={ContactUs} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/Services/CCTV' component={CCTV} />
          <Route exact path='/Services/DataShow' component={DataShow} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
