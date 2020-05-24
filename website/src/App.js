import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Map from './components/Map';
import Search from './components/SearchBar';
import AddLocation from './components/AddLocation';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/addlocation" component={AddLocation} />
      <Navbar />
    </Router>
  );
}

export default App;
