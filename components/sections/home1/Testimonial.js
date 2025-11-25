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


            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-4.png)' }} ></div>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Testimonial</div>
                        <h2>What People Say</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="inner-container">
                        <Swiper {...swiperOptions} className="single-item-carousel ">
                        
                            {/* Testimonial Block */}
                            <SwiperSlide>
                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <div className="author-image">
                                        <img src="assets/images/resource/author-1.jpg" alt="" />
                                    </div>
                                    <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco.”</div>
                                    <div className="designation">Meredith Grant <span>- Host Mother</span></div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/* Testimonial Block */}
                            <SwiperSlide>
                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <div className="author-image">
                                        <img src="assets/images/resource/author-1.jpg" alt="" />
                                    </div>
                                    <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco.”</div>
                                    <div className="designation">Meredith Grant <span>- Host Mother</span></div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/* Testimonial Block */}
                            <SwiperSlide>
                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <div className="author-image">
                                        <img src="assets/images/resource/author-1.jpg" alt="" />
                                    </div>
                                    <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco.”</div>
                                    <div className="designation">Meredith Grant <span>- Host Mother</span></div>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* End Testimonial Section */}
            
        </>
    )
}
