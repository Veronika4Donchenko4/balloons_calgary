
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
            <section className="banner-section-three">
                <Swiper {...swiperOptions} className="main-slider-carousel ">
                    
                    {/* Slide */}
                    <SwiperSlide>
                    <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/1.jpg)' }} >
                        <div className="auto-container">
                            {/* Content Column */}
                            <div className="content-box">
                                <div className="box-inner">
                                    <div className="category">smoothie</div>
                                    <h3><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h3>
                                    <ul className="post-info">
                                        <li>May 21, 2021</li>
                                        <li>2 Comments</li>
                                        <li><Link href="news-detail">Share</Link></li>
                                    </ul>
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
                                    <div className="category">smoothie</div>
                                    <h3><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h3>
                                    <ul className="post-info">
                                        <li>May 21, 2021</li>
                                        <li>2 Comments</li>
                                        <li><Link href="news-detail">Share</Link></li>
                                    </ul>
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
                                    <div className="category">smoothie</div>
                                    <h3><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h3>
                                    <ul className="post-info">
                                        <li>May 21, 2021</li>
                                        <li>2 Comments</li>
                                        <li><Link href="news-detail">Share</Link></li>
                                    </ul>
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
