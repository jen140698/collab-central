import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  const [mobile, setMobile] = useState(false)
  return (
    <React.Fragment>
        <section className="fullsize-video-bg">
            <div className="video-content">
                <div className="content-text">
                    <div className="main-title">Master New Skills Today</div>
                    <div className="auto-type-text">
                        <div className="sub-title">Learn How to <span className="input"></span></div>
                    </div>
                </div>
            </div>
            <div id="video-viewport">
                <video width="1920" height="1280" autoPlay muted loop>
                    <source src={require("../images/bg.mp4")} type="video/mp4" />
                </video>
            </div>
        </section>

        <div className="influencers-text-content">
            <div className="influencers-text">
                <p>Taught By Your Favorite Influencers</p>
            </div>
        </div>

        <section className="marquee-content">
            <div className="container-fluid">
                <div className="slick marquee">
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/ego.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/lifemath.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/mask.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/pathtomanliness.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/pickup.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/dentes.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/womanese.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <div className="inner">
                        <img src={require("../images/logo/pua.svg")} className="img-fluid" width="200px"/>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="solve-content">
            <div className="container-lg">
                <h2 className="learn-title">
                    The way we work is to define your promble, <span className="gradient-text">and find the best</span> way to
                    solve the promble.
                </h2>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="solvepro-content">
                            <div className="solve-title-number"><span id="count1" className="display-4"></span></div>
                            <div className="solve-text">Influencers</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="solvepro-content">
                            <div className="solve-title-number"><span id="count2" className="display-4"></span></div>
                            <div className="solve-text">Categories</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="solvepro-content">
                            <div className="solve-title-number"><span id="count3" className="display-4"></span></div>
                            <div className="solve-text">Class Hours</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="learn-anything">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 learn-content">
                        <h1 className="learn-title">Learn Anything Anywhere, at Your Own Pace</h1>
                        <div className="learn-para">
                            <ul className="learn-para-list">
                                <li className="learn-para-item">
                                    <p>Learn Valuable Skills From Mega Influencers</p>
                                </li>
                                <li className="learn-para-item">
                                    <p>A platform where influencers come to create crossover className</p>
                                </li>
                                <li className="learn-para-item">
                                    <p>Your purchases stay yours forever. No Monthly Fee - EVER!</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learn-btn">
                            <button className="btn btn-search btn-login">Get Started Today!</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 learn-video">
                        <div className="learn-video-content">
                            <video autoPlay muted loop>
                                <source src={require("../images/man_athletic.mp4")} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="discover-export">
            <div className="container-fluid">
                <div className="discover-title-mb">
                    <h2>Discover Experts</h2>
                    <h3>Explore All</h3>
                </div>
                <h2 className="discover-title">Discover Experts</h2>
                <div className="discover-tab mt-4">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active ml-0" data-toggle="tab" href="#tabs-1" role="tab">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Most Popular</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Just Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" role="tab">Explore All &nbsp; →</a>
                        </li>
                    </ul>
                    <div className="tab-content mt-3">
                        <div className="slick-carousel">
                            <div className="picha discover-img-slider slider-img1">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/ego.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img2">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/pickup.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img3">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/dentes.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img4">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/mask.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img5">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/pathtomanliness.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img6">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/pua.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img7">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/womanese.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img8">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/lifemath.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>

        <section className="learn-anything">
            <div className="container-fluid">
                <div className="row learn-contant-main">
                    <div className="learn-content-bg">
                        <div className="learn-content">
                            <div className="para-div">
                                <h1 className="learn-title">Learn Anything Anywhere, at Your Own Pace</h1>
                                <div className="learn-para">
                                    <ul className="learn-para-list">
                                        <li className="learn-para-item">
                                            <p>Learn Valuable Skills From Mega Influencers</p>
                                        </li>
                                        <li className="learn-para-item">
                                            <p>A platform where influencers come to create crossover class</p>
                                        </li>
                                        <li className="learn-para-item">
                                            <p>Your purchases stay yours forever. No Monthly Fee - EVER!</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="learn-btn">
                                    <button className="btn btn-search btn-login">Get Started Today!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="discover-export">
            <div className="container-fluid">
                <div className="discover-title-mb">
                    <h2>Discover Experts</h2>
                    <h3>Explore All</h3>
                </div>
                <h2 className="discover-title">Discover Products</h2>
                <div className="discover-tab mt-4">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active ml-0" data-toggle="tab" href="#tabs-1" role="tab">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Most Popular</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Just Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" role="tab">Explore All &nbsp; →</a>
                        </li>
                    </ul>
                    <div className="tab-content mt-3">
                    <div className="slick-carousel slick-product">
                            <div className="picha discover-img-slider slider-img1">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/ego.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img2">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/pickup.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img3">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/dentes.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img4">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/mask.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img5">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/pathtomanliness.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img6">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/pua.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img7">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/womanese.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="picha discover-img-slider slider-img8">
                                <div className='picha-inner-content'>
                                    <div className='overly-picha-bg'></div>
                                    <div className='picha-content'>
                                        <div className='picha-logo'>
                                            <img src={require("../images/logo/lifemath.svg")} className="img-fluid" width="150px"/>
                                        </div>
                                        <div className='picha-text mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="learn-anything">
            <div className="container-fluid">
                <div className="row learn-contant-main">
                    <div className="learn-content-bg">
                        <div className="learn-content">
                            <div className="para-div text-center mx-auto">
                                <h1 className="learn-title text-center">Best Seller</h1>
                                <div className="learn-para">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium adipisci?
                                        Suscipit amet voluptatibus.</p>
                                </div>
                                <div className="learn-btn">
                                    <button className="btn btn-search btn-login">Get Started Today!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonial-slider">
            <div className="container-fluid">
                <h2 className="member-title text-center">See What Our <br /> members are saying.</h2>
                <div className="member-slider client-testimonial-carousel mt-4">
                    <div className="single-testimonial-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eveniet ex labore id beatae molestiae, libero quis eum nam voluptates quidem.</p>
                        <div className="testimonial_box">
                            <div className="testimonial_box-img">
                                <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" />
                            </div>
                            <h3>Jane Doe <span>Land Broker</span></h3>
                        </div>
                    </div>
                    <div className="single-testimonial-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eveniet ex labore id beatae molestiae, libero quis eum nam voluptates quidem.</p>
                        <div className="testimonial_box">
                            <div className="testimonial_box-img">
                                <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" />
                            </div>
                            <h3>Jane Doe <span>Land Broker</span></h3>
                        </div>
                    </div>
                    <div className="single-testimonial-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eveniet ex labore id beatae molestiae, libero quis eum nam voluptates quidem.</p>
                        <div className="testimonial_box">
                            <div className="testimonial_box-img">
                                <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" />
                            </div>
                            <h3>Jane Doe <span>Land Broker</span></h3>
                        </div>
                    </div>
                    <div className="single-testimonial-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eveniet ex labore id beatae molestiae, libero quis eum nam voluptates quidem.</p>
                        <div className="testimonial_box">
                            <div className="testimonial_box-img">
                                <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" />
                            </div>
                            <h3>Jane Doe <span>Land Broker</span></h3>
                        </div>
                    </div>
                    <div className="single-testimonial-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eveniet ex labore id beatae molestiae, libero quis eum nam voluptates quidem.</p>
                        <div className="testimonial_box">
                            <div className="testimonial_box-img">
                                <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" />
                            </div>
                            <h3>Jane Doe <span>Land Broker</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="ask-question">
            <div className="container-fluid">
                <div className="frequently-asked">
                    <div className="hero-banner__content">
                        <div className="corner-borders corner-borders-left"></div>
                        <div className="corner-borders corner-borders-right"></div>
                        <p>Frequently asked question</p>
                    </div>
                </div>
                <div id="accordion" className="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn collapsed"
                                    data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                                    aria-controls="collapseOne">
                                    What is Collabs Central?
                                    <span className="fa-stack fa-sm">
                                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium ex eum magnam
                                    rerum. Aspernatur facilis accusantium ratione, dignissimos quae quibusdam repellendus
                                    magnam, blanditiis possimus esse, nulla explicabo velit alias!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn collapsed"
                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    What is included in a Collabs membership?
                                    <span className="fa-stack fa-sm">
                                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium ex eum magnam
                                    rerum. Aspernatur facilis accusantium ratione, dignissimos quae quibusdam repellendus
                                    magnam, blanditiis possimus esse, nulla explicabo velit alias!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn collapsed"
                                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Where can i watch?
                                    <span className="fa-stack fa-sm">
                                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium ex eum magnam
                                    rerum. Aspernatur facilis accusantium ratione, dignissimos quae quibusdam repellendus
                                    magnam, blanditiis possimus esse, nulla explicabo velit alias!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn collapsed"
                                    data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    Which classes are right for me?
                                    <span className="fa-stack fa-sm">
                                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium ex eum magnam
                                    rerum. Aspernatur facilis accusantium ratione, dignissimos quae quibusdam repellendus
                                    magnam, blanditiis possimus esse, nulla explicabo velit alias!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h2 className="mb-0">
                                <button className="d-flex align-items-center justify-content-between btn collapsed"
                                    data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    What are the Class Sizes?
                                    <span className="fa-stack fa-sm">
                                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium ex eum magnam
                                    rerum. Aspernatur facilis accusantium ratione, dignissimos quae quibusdam repellendus
                                    magnam, blanditiis possimus esse, nulla explicabo velit alias!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default Home;
