import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Feed from './pages/feed';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nofound from './components/layout/Nofound';
import Panel from './components/panel/Panel';
import Investigaciones from './components/investigaciones/Investigaciones';
import NuevaPub from './components/publicaciones/NuevaPub';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/404" component={Nofound}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>      
        <Route exact path="/panel" component={Panel}/>
        <Route exact path="/investigaciones" component={Investigaciones}/>
        <Route exact path="/crear-publicacion" component={NuevaPub}/>
        <Redirect to="404"/>
      </Switch>
    </Router>
  );
}

export default App;
