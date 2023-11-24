import React from 'react'
import "../styles/ImmediateContext.css";

export default function ImmediateContext() {
    return (
        <section>
            <br />
            <br />
            <div class="container">
                <div class="row-cm">
                    {
                    /* column-1 */}
                    <div class="col-6">
                        <div className='imd-heading'>
                            <h2>Get Immediate Quotee</h2>
                        </div>
                        <img className='col-image-1' src="/images/contect-col-1.jpg" alt="-col-1" />
                        <div class="Immediate-contentoverly">
                            <div className='form-heading-col-1'>
                                <p>Sheeping Exporter Name and Address</p>
                                {/* form 1  start*/}
                                <form>
                                    <div className='form-cont'>
                                        <div className='row'>
                                            <div class="form-group col-md-6">
                                                <label className='text-dark ' for="inputEmail4">ECN No:</label>
                                                <input type="email" class="form-control" id="inputEmail4" placeholder="ECN No" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label className='text-dark' for="inputPassword4">Booking No</label>
                                                <input type="password" class="form-control" id="inputPassword4" placeholder="Booling No" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* form 1 end */}
                                <br />
                                <br />
                                <div className='form-heading'>
                                    <p>Sheeping Exporter Name and Address</p>
                                    {/* form 1  start*/}
                                    <form>
                                        <div className='form-cont'>
                                            <div className='row'>
                                                <div class="form-group col-md-6">
                                                    <label className='text-dark ' for="inputEmail4">Email</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label className='text-dark' for="inputPassword4">Password</label>
                                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <br />
                                    <button type="button" class="btn btn-secondary btn-sm btn-form">GET ACTIVATE</button>
                                </div>


                            </div>

                        </div>

                    </div>

                    {/* column-2 */}
                    <div class="col-6">
                        <img className='col-image-2' src="/images/contect-col-2.jpg" alt="-col-2" />
                        <div className='get-inquire'>

                            <div class="container mt-5">
                                <div class="card text-white bg-danger">
                                    <div class="card-header">
                                        <h5 class="card-title">Sign In</h5>
                                    </div>
                                    <br />
                                    <div class="card-body">
                                        <div class="text-center mb-3">
                                            <img className='card-img ' src="/images/card-profile.jpg" alt="Profile" class="rounded-circle" />
                                        </div>
                                        <br />
                                        <form>
                                            <div class="form-group">
                                                <label for="inputEmail">Email</label>
                                                <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email" />
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress">Address</label>
                                                <input type="text" class="form-control" id="inputAddress" placeholder="Enter your address" />
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword">Password</label>
                                                <input type="password" class="form-control" id="inputPassword" placeholder="Enter your password" />
                                            </div>
                                            <br />
                                            <button type="submit" class="btn btn-light">Sign In</button>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

