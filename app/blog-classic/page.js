'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'


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

export default function Home() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Blog List With Right Sidebar">
            {/* Sidebar Page Container */}
            <div className="sidebar-page-container">
                <div className="section-text">yummy</div>
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        
                        {/* Content Side */}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-classNameic">
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-16.jpg" alt="" />
                                            {/* Overlay Box */}
                                            <div className="overlay-box">
                                                <div className="overlay-inner">
                                                    <div className="content">
                                                        <Link href="assets/images/resource/news-16.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category">smoothie</div>
                                            <h3><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h3>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan...</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">smoothie</div>
                                            <h3><Link href="news-detail">Breakfast At Hotel</Link></h3>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan...</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-17.jpg" alt="" />
                                            {/* Overlay Box */}
                                            <div className="overlay-box">
                                                <div className="overlay-inner">
                                                    <div className="content">
                                                        <Link href="assets/images/resource/news-17.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category">smoothie</div>
                                            <h3><Link href="news-detail">Drinking Healthy And Fruity </Link></h3>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan...</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-18.jpg" alt="" />
                                            <a onClick={() => setOpen(true)} className="lightbox-image video-overlay-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category">smoothie</div>
                                            <h3><Link href="news-detail">Drinking Healthy And Fruity </Link></h3>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan...</div>
                                        </div>
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
                                
                                {/* News Block Four */}
                                <div className="news-block-four">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-19.jpg" alt="" />
                                            <div className="content">
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                                <div className="designation">Michael John</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <Swiper {...swiperOptions} className="single-item-carousel ">
                                            <SwiperSlide>
                                            <div className="slide">
                                                <div className="image">
                                                    <img src="assets/images/resource/news-20.jpg" alt="" />
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide">
                                                <div className="image">
                                                    <img src="assets/images/resource/news-20.jpg" alt="" />
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide">
                                                <div className="image">
                                                    <img src="assets/images/resource/news-20.jpg" alt="" />
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="lower-content">
                                            <div className="category">smoothie</div>
                                            <h3><Link href="news-detail">Pink Snack Ready To Go </Link></h3>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan...</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Styled Pagination */}
                                <ul className="styled-pagination text-center">
                                    <li><Link href="#">01</Link></li>
                                    <li><Link href="#" className="active">02</Link></li>
                                    <li><Link href="#">03</Link></li>
                                    <li className="next"><Link href="#"><span className="fa fa-angle-right"></span></Link></li>
                                </ul>                
                                {/* End Styled Pagination */}
                                
                            </div>
                        </div>
                            
                        {/* Sidebar Side */}
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar sticky-top">
                                
                                {/* Search */}
                                <div className="sidebar-widget search-box">
                                    <div className="sidebar-title">
                                        <h6>Search Course</h6>
                                    </div>
                                    <form method="post" >
                                        <div className="form-group">
                                            <input type="search" name="search-field"  placeholder="Your search"/>
                                            <button type="submit"><span className="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>
                                
                                {/* About Widget */}
                                <div className="sidebar-widget about-widget">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>About us</h6>
                                        </div>
                                        <div className="text">Pellentesque semper ut sem non aliquet. Nullam tincidunt vestibulum condimentum. Duis at mollis orci. Nulla facilisi. Pellentesque in mi ut diam consequat sollicitudin</div>
                                    </div>
                                </div>
                                
                                {/* Category Widget */}
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Product categories</h6>
                                        </div>
                                        <ul className="cat-list">
                                            <li><Link href="#">Colorful</Link></li>
                                            <li><Link href="#">Fruit Bowl</Link></li>
                                            <li><Link href="#">Healthy</Link></li>
                                            <li><Link href="#">Ice Cream</Link></li>
                                            <li><Link href="#">Mixed</Link></li>
                                            <li><Link href="#">Shakes</Link></li>
                                            <li><Link href="#">Smoothie</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Popular Posts */}
                                <div className="sidebar-widget popular-posts">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Products</h6>
                                        </div>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/resource/post-thumb-1.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                            <div className="text"><Link href="news-detail">Hippie Chick</Link></div>
                                            <div className="post-info">$120</div>
                                        </article>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/resource/post-thumb-2.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                            <div className="text"><Link href="news-detail">Hippie Chick</Link></div>
                                            <div className="post-info">$120</div>
                                        </article>
                                        
                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/resource/post-thumb-3.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                            <div className="text"><Link href="news-detail">Hippie Chick</Link></div>
                                            <div className="post-info">$120</div>
                                        </article>
                                        
                                    </div>
                                </div>
                                
                                {/* Tags Posts */}
                                <div className="sidebar-widget tags-posts">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Product tags</h6>
                                        </div>
                                        <ul className="tag-list clearfix">
                                            <li><Link href="#">Colorful</Link></li>
                                            <li><Link href="#">Fruit Bowl</Link></li>
                                            <li><Link href="#">Healthy</Link></li>
                                            <li><Link href="#">Ice Cream</Link></li>
                                            <li><Link href="#">Mixed</Link></li>
                                            <li><Link href="#">Shakes</Link></li>
                                            <li><Link href="#">Smoothie</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Social Widget */}
                                <div className="sidebar-widget social-widget">
                                    <div className="sidebar-title">
                                        <h6>Share</h6>
                                    </div>
                                    <ul className="social-list">
                                        <li><Link href="#"><span className="icon fa fa-facebook"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-twitter"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-dribbble"></span></Link></li>
                                    </ul>
                                </div>
                                
                            </aside>
                        </div>
                        
                    </div>
                </div>
            </div>
            
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