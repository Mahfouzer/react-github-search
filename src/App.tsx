import React, { useState } from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ListingRepos from './pages/listing-repos-page';
import SearchingRepos from './pages/searching-repos-page';
import history from './history';

import keywordContext from './context/keywordContext'

function App() {

  const [keyWord, setKeyWord] = useState('');

  return (
    <div>
      <Router history={history}>
        <keywordContext.Provider value={{ keyWord, setKeyWord }}>
          <Switch>
            <Route path="/" exact>
              <SearchingRepos />
            </Route>
            <Route path="/search" exact>
              <ListingRepos />
            </Route>
            <Route path="*"><h1>404</h1></Route>
          </Switch>
        </keywordContext.Provider>
      </Router>
    </div>
  );
}

export default App;
