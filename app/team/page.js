'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import GallerySlider1 from '@/components/slider/GallerySlider1'

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

export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Team">
            {/* Team Page Section */}
            <section className="team-page-section">
                <div className="outer-container">
                    <div className="row clearfix">
                    
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-4.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-5.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-6.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-7.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-8.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-9.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-10.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Staff Block */}
                        <div className="staff-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/staff-11.jpg" alt="" /></Link>
                                    <div className="overlay-box">
                                        <div className="content">
                                            <h6><Link href="#">Jusica Malina</Link></h6>
                                            <div className="designation">Pastry Chef</div>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Team Page Section */}
            
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
            
            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="outer-container">
                <GallerySlider1/> 
                    
                </div>
            </section>
            {/* End Gallery Section */}

        </Layout>
        </>
    )
}