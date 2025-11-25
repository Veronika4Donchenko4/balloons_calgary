'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }



}




export default function Clients() {
    return (
        <>
           

        {/* Clients Section */}
        <section className="clients-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sponsors-outer">
                        {/*Sponsors Carousel*/}
                        <Swiper {...swiperOptions} className="sponsors-carousel ">
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/1.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/2.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/3.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/4.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/5.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/6.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                            <SwiperSlide>
                            <li className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/1.jpg" alt=""/></Link></figure></li>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        {/* End Clients Section */}
        </>
    )
}
