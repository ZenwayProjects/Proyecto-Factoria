import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Feed from './pages/feed';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import NotFound from './pages/notFound';
import Panel from './pages/panel';
import Investigaciones from './pages/investigaciones';
import NuevaPub from './pages/crearPublicacion';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/notFound" component={NotFound}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>      
        <Route exact path="/panel" component={Panel}/>
        <Route exact path="/investigaciones" component={Investigaciones}/>
        <Route exact path="/crear-publicacion" component={NuevaPub}/>
        <Redirect to="notFound"/>
      </Switch>
    </Router>
  );
}

export default App;
