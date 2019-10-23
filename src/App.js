import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import './styles/iosevka.css'
import './styles/arta-syntax-theme.css'
import './styles/normalize.css'
import './styles/main.css'

import HomePage from './components/HomePage'
// import Languages from './components/Languages'
import Interests from './components/Interests'
// import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/languages' component={Languages} /> */}
        <Route path='/interests' component={Interests} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
