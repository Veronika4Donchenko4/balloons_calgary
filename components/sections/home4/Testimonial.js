'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }



}


export default function Testimonial() {
    return (
        <>
        {/* Testimonial Section Two */}
        <section className="testimonial-section-two">
            <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/resource/testimonial-icon.jpg)' }} ></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/resource/testimonial-icon-1.jpg)' }} ></div>
                    <Swiper {...swiperOptions} className="single-item-carousel ">
                    
                        {/* Testimonial Block Two */}
                        <SwiperSlide>
                        <div className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”</div>
                                <div className="designation">Wood Martin <span>- Host Mother</span></div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Block Two */}
                        <SwiperSlide>
                        <div className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”</div>
                                <div className="designation">Wood Martin <span>- Host Mother</span></div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Block Two */}
                        <SwiperSlide>
                        <div className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”</div>
                                <div className="designation">Wood Martin <span>- Host Mother</span></div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* End Testimonial Section Two */}

            
        </>
    )
}
