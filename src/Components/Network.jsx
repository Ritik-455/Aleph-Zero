import React from 'react'
import tiles from '../assets/images/png/network-box-img.png'
import driving1 from '../assets/images/svg/driving-img1.svg'
import driving2 from '../assets/images/svg/driving-img2.svg'
import driving3 from '../assets/images/svg/driving-img3.svg'
import driving4 from '../assets/images/svg/driving-img4.svg'
import driving5 from '../assets/images/svg/driving-img5.svg'
import envrtimg from '../assets/images/png/enivorment-img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Network() {
    var settings3 = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        vertical: true,
        centerPadding: "0px",
        centerMode: true,
    };
    return (
        <>
            <section className='bg-network' id="Content">
                <div className="container-2 pt-64 pb-64">
                    <div className="block-chain-box pr-23 pb-4 pb-sm-0">
                        <div className="row">
                            <div className="col-12 col-sm-5">
                                <img src={tiles} alt="chain-img" className='w-100 h-181' />
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="d-flex gap-2 gap-sm-3 align-items-sm-center pt-8">
                                    <hr className='blockcard-line' />
                                    <p className=' font-inter fw-300 text-23 lh-28 lts-72 text-white mb-0 max-w-281 '>Curious about <span className=' fw-700 text-22'>upcoming network upgrades?</span></p>
                                </div>
                                <p className=' font-inter fw-500 text-15 lh-21-6 lts-64 color-green mb-0 text-end mt-38 pb-1 cursor-pointer'>Go to the roadmap <span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_569)">
                                        <path d="M14.6483 7.24306L14.1321 6.70344L13.0529 7.78268L17.3229 12.0293H0.359985V13.5308H17.3229L13.0529 17.7774L14.1321 18.8567L19.6691 13.3197C19.8099 13.1633 19.8803 12.9834 19.8803 12.7801C19.8803 12.5767 19.8099 12.3969 19.6691 12.2404L14.6483 7.24306Z" fill="#00CCAB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_569">
                                            <rect width="24.64" height="25" fill="white" transform="matrix(1 0 0 -1 0.359985 25.28)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-2 pt-124">
                    <div className="row flex-column-reverse flex-md-row">
                        <div className="col-12 col-md-6 d-flex align-items-center mt-5 mt-md-0">
                            <div className="">
                                <h4 className=' font-inter fw-300 text-34 lh-39 lts-85 text-white mb-0'>Driving <span className='fw-700 text-32'> Web3 adoption</span></h4>
                                <hr className='text-bottom-line mt-22' />
                                <p className=' font-karla fw-300 text-18 lh-27 lts-64 color-lightwhite mb-0 mt-26 max-w-475'>Aleph Zero bridges the gap between scalability,
                                    security, developer friendliness, and cost of use.
                                    Moreover, the network will boast a native privacy stack
                                    to further enable you to build solutions that strike the
                                    balance between transparency and privacy.</p>
                                <button className='explore-btn font-inter fw-500 text-15 lh-16 lts-64 color-green mb-0 mt-4'>See what’s possible</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <Slider {...settings3} className='mt-5'>
                                <div className="driving-slider-card mt-3 slick_track slider_img">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={driving1} alt="driving1" />
                                        <p className=' font-inter fw-500 text-15 lh-20 lts-96 text-white mb-0'>Supply chain management</p>
                                    </div>
                                </div>
                                <div className="driving-slider-card mt-3 slick_track slider_img">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={driving2} alt="driving1" />
                                        <p className=' font-inter fw-500 text-15 lh-20 lts-96 text-white mb-0'>Asset digitization</p>
                                    </div>
                                </div>
                                <div className="driving-slider-card mt-3 slick_track slider_img">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={driving3} alt="driving1" />
                                        <p className=' font-inter fw-500 text-15 lh-20 lts-96 text-white mb-0'>Smart contracts</p>
                                    </div>
                                </div>
                                <div className="driving-slider-card mt-3 slick_track slider_img">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={driving4} alt="driving1" />
                                        <p className=' font-inter fw-500 text-15 lh-20 lts-96 text-white mb-0'>Notary signatory</p>
                                    </div>
                                </div>
                                <div className="driving-slider-card mt-3 slick_track slider_img">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={driving5} alt="driving1" />
                                        <p className=' font-inter fw-500 text-15 lh-20 lts-96 text-white mb-0'>Automatic payments and
                                            shared
                                            <span className='d-block'>
                                                revenue agreement
                                            </span></p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-enivorment'>
                <div className="container-3 d-flex justify-content-end pt-64">
                    <div className="block-chain-box pr-23 pb-4 pb-sm-0 w-100">
                        <div className="row">
                            <div className="col-12 col-sm-5">
                                <img src={envrtimg} alt="chain-img" className='w-100' />
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="d-flex gap-2 gap-sm-3 align-items-sm-center pt-8">
                                    <hr className='blockcard-line' />
                                    <p className=' font-inter fw-300 text-23 lh-28 lts-72 text-white mb-0 max-w-281 '>Aleph Zero is designed
                                        to  <span className=' fw-700 text-22'>care for the environment</span></p>
                                </div>
                                <p className=' font-inter fw-500 text-15 lh-21-6 lts-64 color-green mb-0 text-end cursor-pointer'>Our carbon footprint <span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_569)">
                                        <path d="M14.6483 7.24306L14.1321 6.70344L13.0529 7.78268L17.3229 12.0293H0.359985V13.5308H17.3229L13.0529 17.7774L14.1321 18.8567L19.6691 13.3197C19.8099 13.1633 19.8803 12.9834 19.8803 12.7801C19.8803 12.5767 19.8099 12.3969 19.6691 12.2404L14.6483 7.24306Z" fill="#00CCAB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_569">
                                            <rect width="24.64" height="25" fill="white" transform="matrix(1 0 0 -1 0.359985 25.28)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Network