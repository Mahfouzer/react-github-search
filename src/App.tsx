import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ListingRepos from './pages/listing-repos-page';
import SearchingRepos from './pages/searching-repos-page';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchingRepos />
          </Route>
          <Route path="/search/:name" exact>
            <ListingRepos />
          </Route>
          <Route path="*"><h1>404</h1></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
