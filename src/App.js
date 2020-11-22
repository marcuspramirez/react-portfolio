import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Title from './components/Title';
import  { BrowserRouter as Router, Route, Switch, Link, Redirect  } from 'react-router-dom';
import Contact from "./pages/contact";


// Pages
import MainPage from './pages';
import NotFoundPage from './pages/404';
import ProjectsPage from '../src/pages/projects';

class App extends Component {
  render() {
    return (
    <Router>
    <Navbar/>
    
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/404" component={NotFoundPage}/>
      <Redirect to="/404/"/>
    </Switch>
    </Router>
    );
  }
}

export default App;
