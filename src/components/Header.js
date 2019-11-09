import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Icon , NavLink} from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			<React.Fragment>
      <div className="wrap">
        
        <div className="header">
          <div className="search-bar">
            <form>
              <input type="text" /><input type="submit" defaultValue="Search" />
            </form>
          </div>
          <div className="clear"> </div>
          <div className="header-top-nav">
            <ul>
              <li><a href="#">Register</a></li>
              <li><a href="#"><NavLink className="navbar-brand" to="/Login">Login</NavLink></a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#"><span>shopping cart&nbsp;&nbsp;: </span></a><label> &nbsp;noitems</label></li>
            </ul>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
      <div className="top-header">
        <div className="wrap">
          
          <div className="logo">
            <a href="/"><img src="images/logo.png" title="logo" /></a>
          </div>
          
         
          <div className="top-nav .carousel-indicators">
            <ul>
              <li><a href="#" ><NavLink className="navbar-brand" to="/">Home</NavLink></a></li>
              <li><a href="#" ><NavLink className="navbar-brand" to="/sanphammoi">Sản Phẩm Mới</NavLink></a></li>
              <li><a href="#" ><NavLink className="navbar-brand" to="/sanphamhot">Sản Phẩm Hot</NavLink></a></li>
              <li><a href="#"><NavLink className="navbar-brand" to="/sanphamKhuyenmai">Sản Phẩm Khuyến Mãi</NavLink></a></li>
              <li><a href="#" >Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/1.png" alt="Los Angeles" width={1100} height={500} />
          </div>
          <div className="carousel-item">
            <img src="images/2.png" alt="Chicago" width={1100} height={500} />
          </div>
          <div className="carousel-item">
            <img src="images/2.png" alt="New York" width={1100} height={500} />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
      </React.Fragment>
		);
	}
}

export default Header;