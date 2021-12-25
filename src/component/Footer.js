import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    const [mobile, setMobile] = useState(false)


    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="footer-left-content">
                                <div className="footer-title">Who We Are</div>
                                <ul className="nav-list">
                                    <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Work With Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="footer-left-content">
                                <div className="footer-title">Explore</div>
                                <ul claas="nav-list">
                                    <li className="nav-item"><a href="#" className="nav-link">Discover</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Privacy Policy</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="footer-right-content">
                                <div className="footer-title">Connect</div>
                                <ul className="nav-list">
                                    <li className="nav-item"><a href="#" className="nav-link icon ml-0 ml-sm-1"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link icon"><i class="fab fa-twitter"></i></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link icon mr-sm-0"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom row">
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className="footer-logo">
                                <a href="index.html"><img src={require("../images/Collabs-Central-Logo.png")} className="img-fluid lazyload" alt="Logo"
                                    width="200px" /></a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12'></div>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className="footer-year ml-md-3">
                                © 2022 Collabscentral
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;

