import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import React from 'react'
import Home from './Home'; 
import services from './services';
import clients from './clients'; 
import contact from './contact';
import About from './About';

import "./Mainpage.css"
function Mainpage() {
    return (
      <Router>
        
        <div className="menu">
        <ul>
            <li ><Link  to ='/Home'> Home</Link></li>
            <li > <Link  to ='/About'> About</Link></li>
            <li > <Link  to ='/services'> services</Link></li>
            <li > <Link  to ='/clients'> clients</Link></li>
            <li > <Link  to ='/contact'> contact</Link></li>

         
          </ul>
          
          
        </div>
            <div className = 'App'>
            <Switch>
    
                <Route path = '/Home' exact component = {Home}/>
                <Route path = '/About' exact component = {About}/>
                <Route path = '/services' exact component = {services}/>
                <Route path = '/clients' exact component = {clients}/>
                <Route path = '/contact' exact component = {contact}/>
    
              </Switch>
            </div>
            
          
      </Router>
    
    )
}
           
     


export default Mainpage
