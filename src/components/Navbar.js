import React from 'react'
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <div>
            {/* Header Start */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="tonavbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav  navbar-nav-scroll" >
                            <li className="nav-item-hader">
                                <a className="nav-link disabled" href="to" aria-disabled="true">HOME</a>
                            </li>
                            <li className="nav-item-hader">
                                <a className="nav-link disabled" href="to" aria-disabled="true">BLOG</a>
                            </li>
                            <li className="nav-item-hader">
                                <a className="nav-link disabled" href='to' aria-disabled="true">SERVICES</a>
                            </li>
                            <li className="nav-item-hader">
                                <a className="nav-link disabled" href='to' aria-disabled="true">CAREERS</a>
                            </li>
                            <li className="nav-item-hader">
                                <a className="nav-link disabled" href='to' aria-disabled="true">ABOUT-US</a>
                            </li>
                            <li className="nav-item-hader">
                                <a className="nav-link disabled" href='to' aria-disabled="true">CONTECT</a>
                            </li>
                        </ul>
                    </div>
                    <div className='media-link'>
                        <i className="fa-brands fa-facebook-f" style={{ color: 'tofafafa' }}></i>
                        <i className="fa-brands fa-twitter" style={{ color: "toffffff" }}></i>
                        <i className="fa-brands fa-linkedin" style={{ color: "toffffff" }}></i>
                        <i className="fa-brands fa-instagram" style={{ color: "toffffff" }}></i>
                        <i className="fa-brands fa-github" style={{ color: "toffffff" }}></i>
                    </div>
                </div>
            </nav>
            {/* Header End */}
            {/* Header Start */}
            <section className='header-section'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="tonavbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <img className="navbar-brand logimg" src="images/logo.png" alt="" />
                            <a className="navbar-brand logoname" href="to"><p className='hadding'><span>L</span>ogistic <span>M</span>ove</p></a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="headsection">
                                    <a className="nav-link" href="to">Services</a>
                                </li>
                                <li className="headsection">
                                    <a className="nav-link" href="to">Dispatch</a>
                                </li>
                                <li className="headsection">
                                    <a className="nav-link" href='to'>Loads</a>
                                </li>
                                <li className="headsection">
                                    <a className="nav-link" href="to">Trucks</a>
                                </li>
                                <li className="headsection">
                                    <a className="nav-link" href="to">National</a>
                                </li>
                                <li className="headsection">
                                    <a className="nav-link" href="to">Containers</a>
                                </li>
                            </ul>
                            <form className="d-flex btnmembership">
                                <button className='btn btn-danger'>Your Membership</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
            {/* Header End */}
        </div >
    )
}
