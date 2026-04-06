
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

        {/* Banner Section */}
        <section className="banner-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }} ></div>
            <Swiper {...swiperOptions} className="main-slider-carousel ">
                
                {/* Slide */}
                <SwiperSlide>
                <div className="slide">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-2.png)' }} ></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1 className="logo-title">
     <img 
        src="assets/images/logo.png" 
        alt="Balloons Calgary" 
        className="logo-image"
     />
</h1>
                                    <div className="text">
                                    <p>Modern Balloon Sets for Your Special Moments in Calgary</p>
                                    <p>
                                     We create ready-made balloon compositions for the most important and joyful occasions.
                                     Simple, beautiful and stylish solutions for those who want effortless decor with a modern aesthetic.
                                     </p></div>
                                    <div className="btns-box">
                                        <Link href="/catalog" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="assets/images/main-slider/content-image-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                {/* Slide */}
                <SwiperSlide>
                <div className="slide style-first">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-6.png)' }} ></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <img src="assets/images/logo.png" alt="Balloons Calgary" />
                                    <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <div className="btns-box">
                                        <Link href="/catalog" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="assets/images/main-slider/content-image-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* Slide */}
                <SwiperSlide>
                <div className="slide style-two">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-7.png)' }} ></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1><span className="first-letter">Calgary</span><span className="second-letter">Calgary</span></h1>
                                    <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <div className="btns-box">
                                        <Link href="/catalog" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="assets/images/main-slider/content-image-3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            
        </section>
        {/* End Banner Section */}
            
        </>
    )
}
