import React from 'react'
import "../styles/Qualityproduct.css";

export default function Qualityproduct() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className='Qualityhead'>
                            <h2>A 10 Years Legancy of Quality Moves</h2>
                        </div>
                        <div className="col-6">
                            <div className="image-cont">
                                <img src="/images/quality.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6 quality_lagency ">
                            <div className="container text-center">
                                <div className="row">
                                    {/* card-1 */}
                                    <div className="col-6 col-sm-3">
                                        <div className="card" style={{ width: '10rem', height: '8rem' }}>
                                            <div className="card-body">
                                                <i class="fa-solid fa-truck-ramp-box"></i>
                                                <h5 className="card-title">14,500</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Mooving Goods</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card-2 */}
                                    <div className="col-6 col-sm-3">
                                        <div className="card" style={{ width: '10rem', height: '8rem' }}>
                                            <div className="card-body">
                                                <i class="fa-solid fa-truck"></i>
                                                <h5 className="card-title">14,500</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Mooving Goods</h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Force next columns to break to new line --> */}
                                    <div className="w-2"></div>
                                    {/* card-3 */}
                                    <div className="col-6 col-sm-3 ">
                                        <div className="card " style={{ width: '10rem', height: '8rem' }}>
                                            <div className="card-body">
                                                <i class="fa-solid fa-bicycle"></i>
                                                <h5 className="card-title">14,500</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Mooving Goods</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card-4 */}
                                    <div className="col-6 col-sm-3">
                                        <div className="card" style={{ width: '10rem', height: '8rem' }}>
                                            <div className="card-body">
                                                <i class="fa-solid fa-suitcase-rolling"></i>
                                                <h5 className="card-title">14,500</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Mooving Goods</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='productsborder'>
                        <h2>Moving Your Products Across</h2>
                    </div>
                    <div className='allborder'>
                        <h2>All Borders</h2>
                    </div>
                    <div className='row'>
                        <div class="card-group">
                            <div class="card container">
                                <img src="/images/card11.avif" class="card-img-top" alt="..." />
                                <div class="overlay-text">
                                    <i class="fa-solid fa-plane-departure quality-icon" style={{ color: '#900404' }}></i>
                                    <h2 className='quality-name'>All Freight</h2>
                                </div>
                                <div class="card-body">
                                    {/* <h5 class="card-title">All Freight</h5> */}
                                    <p class="card-text">All Freight Logistics is an international freight company that handles your shipment around the globe with the utmost care and proactive follow-up.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary learn-more">Learn more...</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/images/card-2.jpg" class="card-img-top" alt="..." />
                                <div class="overlay-text">
                                    <i class="fa-solid fa-plane-departure quality-icon" style={{ color: '#900404' }}></i>
                                    <h2 className='quality-name'>Ocean Freight</h2>
                                </div>
                                <div class="card-body">
                                    {/* <h5 class="card-title">Ocean Freight</h5> */}
                                    <p class="card-text">Ocean freight shipping is the method of transporting containerised cargo loaded onto vessels by sea.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary learn-more">Learn more...</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/images/card-3.jpg" class="card-img-top" alt="..." />
                                <div class="overlay-text">
                                    <i class="fa-solid fa-plane-departure quality-icon" style={{ color: '#900404' }}></i>
                                    <h2 className='quality-name'>Road Freight</h2>
                                </div>
                                <div class="card-body">
                                    {/* <h5 class="card-title">Road Freight</h5> */}
                                    <p class="card-text">Road freight is the transport of goods from one location to another (a place of loading and a place of unloading).</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary learn-more">Learn more...</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
