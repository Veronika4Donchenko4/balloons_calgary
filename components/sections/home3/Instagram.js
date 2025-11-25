'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 2,
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
            slidesPerView: 6,
            // spaceBetween: 30,
        },
    }



}
export default function Instagram() {
    
    return (
        <>

        {/* Instagram Post Section */}
        <section className="instagram-post-section">
            <div className="auto-container">
                {/* Sec Title Two */}
                <div className="sec-title-two">
                    <div className="title">All post</div>
                    <h4>@ yourinstagram</h4>
                    <div className="separator"></div>
                </div>
                <Swiper {...swiperOptions} className="instagram-carousel ">
                    
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/13.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/13.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/14.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/14.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/15.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/15.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/16.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/16.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/17.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/17.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/18.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/18.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/13.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/13.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/14.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/14.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/15.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/15.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/16.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/16.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/17.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/17.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* Instagram Block */}
                    <SwiperSlide>
                    <div className="instagram-block">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/gallery/18.jpg" alt=""/>
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/gallery/18.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus"></Link>
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
        {/* End Instagram Post Section */}
        </>
    )
}
