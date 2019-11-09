import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import routes from './routes.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import AllProduct from './components/AllProduct.js';
class App extends Component {
  render(){
  return (
    <React.Fragment>
    <Router>
    

    <div className="container-fliud" >
        <div className="">
         
         
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">            
            
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">            
            </li>
          </ul>
        </div>
        

      
       <Switch>  
        {this.showContentMenu(routes)} 

       </Switch>
      </div>
      </div>
      
      </Router>
      
      </React.Fragment>
    );

  }
  showContentMenu = (routes) =>{
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) =>{
        return (
            <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />
          );
      });
    }
    return result;
  }
}

export default App;