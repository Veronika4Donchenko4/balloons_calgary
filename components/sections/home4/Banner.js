
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {
    return (
        <>
            
        {/* End Banner Section */}
        <section className="banner-section-four">
            <Swiper {...swiperOptions} className="main-slider-carousel ">
                
                {/* Slide */}
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/1.jpg)' }} >
                    <div className="auto-container">
                        {/* Content Column */}
                        <div className="content-box">
                            <div className="box-inner">
                                <h1>Unique <br/> Restaurant</h1>
                                <div className="btn-box text-center">
                                    <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* Slide */}
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/2.jpg)' }} >
                    <div className="auto-container">
                        {/* Content Column */}
                        <div className="content-box">
                            <div className="box-inner">
                                <h1>Unique <br/> Restaurant</h1>
                                <div className="btn-box text-center">
                                    <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* Slide */}
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/3.jpg)' }} >
                    <div className="auto-container">
                        {/* Content Column */}
                        <div className="content-box">
                            <div className="box-inner">
                                <h1>Unique <br/> Restaurant</h1>
                                <div className="btn-box text-center">
                                    <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            {/*Scroll Dwwn Btn*/}
            <div className="mouse-btn-down scroll-to-target" data-target=".testimonial-section-two"></div>
        </section>
        {/* End End Banner Section */}
        </>
    )
}
