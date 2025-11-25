'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import GallerySlider1 from '@/components/slider/GallerySlider1'



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



}




export default function About() {
   
    return (
        <>
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="About Us">
        {/* History Section */}
        <section className="history-section-two">
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="assets/images/resource/history-3.jpg" alt="" />
                            </div>
                            <div className="image-two">
                                <img src="assets/images/resource/history-4.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Our Vision and History </div>
                                <h2>Founded in 1970 by <span className="theme_color">Chairman Jay Martin</span></h2>
                                <div className="text">The Juice Plus+ Company has grown from a small, direct-sales company into a highly successful, privately held health and wellness company operatinLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                            <ul className="list-style-two">
                                <li>Cras at mi luctus, tincidunt urna eu, posuere enim</li>
                                <li>Vivamus elementum lorem vitae quam tincidunt</li>
                                <li>Suspendisse accumsan eros eu erat condimentum</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End History Section */}
        
        {/* Gallery Section Two */}
        <section className="gallery-section-two">
                <div className="outer-container">
                    <div className="masonry-items-container row clearfix">
                    
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/19.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Gallery Block Two */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/20.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/23.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block Two */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/21.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/22.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/24.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        </section>
        {/* End Gallery Section Two */}
        
        {/* Staff Section */}
        <section className="staff-section">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Our most valuable asset</div>
                    <h2>Friendly Staff</h2>
                </div>
                <div className="row clearfix">
                
                    {/* Staff Block */}
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/resource/staff-1.jpg" alt="" /></Link>
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
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/resource/staff-2.jpg" alt="" /></Link>
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
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/resource/staff-3.jpg" alt="" /></Link>
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
        {/* End Staff Section */}
        
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


