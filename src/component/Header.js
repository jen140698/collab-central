import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [mobile, setMobile] = useState(false)
  return (
    <React.Fragment>
      <header id="header" className="fixed-top">
        <div className="header-area d-none d-lg-block">
            <div className="main-header-area">
                <div className="container-fluid d-flex align-items-center">
                    <div className="left-side">
                        <div className="browse-content">
                            <button type="button" className="btn btn-search btn-gradient btn-login">Browse</button>
                            <button type="button" className="btn btn-search btn-search-icon ml-3"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="14px"
                                    width="14px" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                    </path>
                                </svg></button>
                        </div>
                    </div>
                    <div className="logo mx-lg-auto">
                        <a href="index.html"><img src={require("../images/Collabs-Central-Logo.png")} className="img-fluid lazyload" alt="Logo"
                                width="200px" /></a>
                    </div>

                    <div className="right-side">
                        <div className="user-add">
                            <a href="javascript:;" className="btn btn-search btn-login">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-area d-block d-lg-none">
            <div className="main-header-area">
                <div className="container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <a href="index.html"><img src={require("../images/Collabs-Central-Logo.png")} className="img-fluid" alt="Logo" width="200px" /></a>
                    </div>
                    <div className="menu-side-mb">
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><a href="#" className="menu-url">Discover</a></li>
                                <li><a href="#" className="menu-url">Products</a></li>
                            </ul>
                            <div className="right-side">
                                <div className="user-add">
                                    <a href="javascript:;" className="btn btn-search btn-login">Log In</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
