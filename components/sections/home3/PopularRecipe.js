'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 20,
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
export default function PopularRecipe() {
    return (
        <>
            {/* Popular Recipe Section */}
            <section className="popular-recipe-section">
                <div className="auto-container">
                    {/* Sec Title Two */}
                    <div className="sec-title-two">
                        <div className="title">All post</div>
                        <h4>The most popular recipes </h4>
                        <div className="separator"></div>
                    </div>
                    <Swiper {...swiperOptions} className="posts-carousel ">
                    
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-12.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-13.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-14.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-15.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-16.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-17.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-12.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-13.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-14.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-15.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-16.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-17.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-12.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-13.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-14.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-15.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-16.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-17.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-12.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-13.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-14.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-15.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-16.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Recipe Block Five */}
                        <SwiperSlide>
                        <div className="recipe-block-five">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="slushy"><img src="assets/images/resource/recipe-17.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="slushy">Broad bean and goats’ cheese bruschetta</Link></h6>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* End Popular Recipe Section */}
        </>
    )
}
