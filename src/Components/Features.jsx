import React from 'react'
import coin from '../assets/images/png/coin-desk.png'
import point from '../assets/images/png/point.png'
import monetary from '../assets/images/png/monetary.png'
import block from '../assets/images/png/blockworks.png'
import shift from '../assets/images/png/shifted.png'
import company from '../assets/images/png/mycompany.png'
import nasdaq from '../assets/images/png/nasdaq.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Features() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 7,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className='bg-features'>
                <div className="container-2">
                    <h3 className=' font-inter fw-300 text-10 lh-13 lts-298 text-white text-center mb-0 text-uppercase pt-32'>Featured in</h3>
                    <Slider {...settings} className='mt-5'>
                        <div className=""><img src={coin} alt="coin" /></div>
                        <div className=""><img src={point} alt="point" /></div>
                        <div className="w-112 h-48 d-flex align-items-center"><img src={monetary} alt="monetary" /></div>
                        <div className=""><img src={block} alt="block" /></div>
                        <div className=""><img src={shift} alt="shift" /></div>
                        <div className=""><img src={company} alt="company" /></div>
                        <div className=""><img src={nasdaq} alt="nasdaq" /></div>
                    </Slider>
                    <div className="card-top-line"></div>
                </div>
            </section>
        </>
    )
}

export default Features