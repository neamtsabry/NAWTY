import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Home from './components/Home';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={Map} />
    </Router>
  );
}

export default App;
