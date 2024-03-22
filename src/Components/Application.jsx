import React from 'react'
import iconcard from '../assets/images/svg/Icon.svg'
import icon2 from '../assets/images/svg/icon-2.svg'
import layer from '../assets/images/png/card-layer.png'
import blue from '../assets/images/svg/bluelayer.svg'
import comn from '../assets/images/svg/comn-svg.svg'
import nova from '../assets/images/svg/nova.svg'
import top from '../assets/images/svg/top-logo.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Application() {
    var settings2 = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 2.75,
        vertical: true,
        cssEase: "linear",
    };
    var settings3 = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 2.75,
        vertical: true,
        rtl: true,
        cssEase: "linear",
    };
    var settings4 = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
            <section>
                <div className="container-2 pt-124">
                    <div className="row d-flex justify-content-between justify-content-xl-start">
                        <div className="col-12 col-lg-7 col-xl-6">
                            <div className="d-lg-flex gap-13">
                                <Slider {...settings2} className='mt-5 d-none d-lg-block'>
                                    <div className="">
                                        <div className="application-slider-card mt-4">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={iconcard} alt="iconcard" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>ArtZero</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={icon2} alt="icon2" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Abax</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={blue} alt="blue" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Abax</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                </Slider>
                                <Slider {...settings3} className='mt-5 d-none d-lg-block'>
                                    <div className="">
                                        <div className="application-slider-card mt-4">
                                            <div className="d-flex gap-17 align-items-end">
                                                <img src={comn} alt="comn" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Common</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={top} alt="top" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Azero Domains</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={nova} alt="blue" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Nova Wallet</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                </Slider>
                                <Slider {...settings4} className='d-lg-none'>
                                    <div className="">
                                        <div className="application-slider-card mt-4 mx-3">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={iconcard} alt="iconcard" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>ArtZero</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4 mx-3">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={icon2} alt="icon2" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Abax</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4 mx-3">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={blue} alt="blue" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Abax</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4 mx-3">
                                            <div className="d-flex gap-17 align-items-end">
                                                <img src={comn} alt="comn" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Common</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4 mx-3">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={top} alt="top" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Azero Domains</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="application-slider-card mt-4 mx-3">
                                            <div className="d-flex gap-17 align-items-center">
                                                <img src={nova} alt="blue" />
                                                <p className=' font-inter fw-500 text-16 lh-23 lts-9 text-white mb-0'>Nova Wallet</p>
                                            </div>
                                            <img className=' mt-22' src={layer} alt="layer-img" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-6 d-lg-flex justify-content-center align-items-center justify-content-xl-end mt-4 mt-lg-0">
                            <div className="">
                                <p className=' font-inter fw-700 text-32 lh-39 lts-85 text-white mb-0 max-w-476'>Applications<span className=' fw-300 text-34'> under development</span></p>
                                <hr className="text-bottom-line mt-22" />
                                <p className=' font-karla fw-300 text-18 lh-27 lts-64 color-grey max-w-475 mt-4 mb-0'>With the mainnet launch, Aleph Zero has seen a
                                    notable initial adoption within the developer
                                    community. Our flexible environment will be familiar
                                    for builders who are already accustomed with Rust and
                                    the Substrate stack.</p>
                                <button className='explore-btn font-inter fw-500 text-15 lh-16 lts-64 color-green mb-0 mt-4'>Explore the ecosystem</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Application