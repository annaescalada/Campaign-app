import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header.js';
import CampaignList from './pages/CampaignList';
import CreateCampaign from './pages/CreateCampaign';

import './App.css';
import 'typeface-roboto';


function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/new-campaign" component={CreateCampaign} />
          <Route component={CampaignList}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
