'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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

export default function Gallery() {
    
    return (
        <>
        {/* Gallery Section */}
            <section className="gallery-section">
                <div className="outer-container">
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
                                                <Link href="assets/images/gallery/1.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/2.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/3.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/4.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/5.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/1.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/2.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/3.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/4.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
                                                <Link href="assets/images/gallery/5.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* End Gallery Section */}
        </>
    )
}
