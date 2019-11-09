import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Icon , NavLink} from 'react-router-dom';
class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
       <div className=""> 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3 nav-link" href="/">SB Admin <sup>2</sup></div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="/add">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Thêm Sản Phẩm</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Interface
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog" />
            <span>Components</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="/product-list">Buttons</a>
              <a className="collapse-item" href="/product-list">Cards</a>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="/product-list">Colors</a>
              <a className="collapse-item" href="/product-list">Borders</a>
              <a className="collapse-item" href="/product-list">Animations</a>
              <a className="collapse-item" href="/product-list">Other</a>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Addons
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="/login">Login</a>
              <a className="collapse-item" href="/product-list">Register</a>
              <a className="collapse-item" href="/product-list">Forgot Password</a>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="/product-list">404 Page</a>
              <a className="collapse-item" href="/product-list">Blank Page</a>
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <a className="nav-link" href="/product-list">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span></a>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="/login">
            <i className="fas fa-fw fa-table" />
            <span>Đăng Xuất</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
       </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;