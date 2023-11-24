import React from 'react'
import "../styles/Titleslide.css";

export default function Titleslide() {
    return (
        <div>
            <section>
                <div className='container p-0'>
                    <div className='row g-0'>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <div class="image-container">
                                <img class="image" src="/images/sec-1.jpg" alt="Original" />
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <div class="image-container">
                                <img class="image" src="/images/sec-2.png" alt="Original" />
                                <div class="slideover slide-text">
                                    <div className='business-title '>COMMUNICATION <br /> ON THE GO</div><br />
                                    <p className='state-title'>Experience seamless communication on the go for your business.</p>
                                    <button className='btn business-button btn_outline'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
