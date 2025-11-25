'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    // spaceBetween: 20,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        1199: {
            slidesPerView: 5,
            // spaceBetween: 20,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 20,
        },
    }
}

export default function AwardSlider1() {
    return (
        <>

            {/* <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="award-block-two">
                    <div className="image"><img src="/assets/assets/images/resource/award-4.png" alt="" /></div>
                    <h4>Best consulting <br /> company</h4>
                </SwiperSlide>
                <SwiperSlide className="award-block-two">
                    <div className="image"><img src="/assets/assets/images/resource/award-5.png" alt="" /></div>
                    <h4>Best outsourcing <br /> advisors</h4>
                </SwiperSlide>
                <SwiperSlide className="award-block-two">
                    <div className="image"><img src="/assets/assets/images/resource/award-6.png" alt="" /></div>
                    <h4>Customer choice for <br /> support</h4>
                </SwiperSlide>
                <SwiperSlide className="award-block-two">
                    <div className="image"><img src="/assets/assets/images/resource/award-7.png" alt="" /></div>
                    <h4>Best consulting <br /> company</h4>
                </SwiperSlide>
            </Swiper> */}
            

                <Swiper {...swiperOptions} className="gallery-carousel ">
                        
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/1.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/1.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/2.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/2.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/3.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/3.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/4.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/4.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/5.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/5.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/1.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/1.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/2.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/2.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/3.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/3.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/4.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/4.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Gallery Block */}
                        <SwiperSlide>
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/5.jpg" alt=""/>
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/5.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                </Swiper>

        </>
    )
}
