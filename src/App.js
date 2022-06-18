import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './page/home';
import About from './page/about';
import Topics from './page/topics';
import Greeting from './page/greeting';
import './App.css';

export default function App() {
  return (
    <div className= "App">
    <NavBar/>
    <Switch>
      <Route path = "/about" component={About}/>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/topics" component={Topics}/>
      <Route path = "/greeting/:name" component={Greeting}/>
    </Switch>
    </div>
  );
}