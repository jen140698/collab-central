import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    const [mobile, setMobile] = useState(false)


    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-md-4 col-sm-4 col-12 px-lg-1 px-md-0">
                            <div className="footer-left-content">
                                <div className="footer-title">Who We Are</div>
                                <ul className="nav-list">
                                    <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Work With Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-12 px-lg-1 px-md-0">
                            <div className="footer-left-content">
                                <div className="footer-title">Explore</div>
                                <ul claas="nav-list">
                                    <li className="nav-item"><a href="#" className="nav-link">Discover</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Products</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-12 px-lg-1 px-md-0">
                            <div className="footer-right-content">
                                <div className="footer-title">Connect</div>
                                <ul className="nav-list">
                                    <li className="nav-item"><a href="#" className="nav-link ml-0 ml-sm-1"><svg stroke="currentColor"
                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                        </path>
                                    </svg></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link"><svg stroke="currentColor"
                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                        </path>
                                    </svg></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link icon mr-sm-0"><svg stroke="currentColor"
                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                                        width="1em">
                                        <path
                                            d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                                    </svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-logo">
                            <a href="index.html"><img src={require("../images/Collabs-Central-Logo.png")} class="img-fluid lazyload" alt="Logo"
                                width="200px" /></a>
                        </div>
                        <div class="footer-year">
                            © 2022 Collabscentral
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;

