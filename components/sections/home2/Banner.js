
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
export default function Banner() {
    return (
        <>

    {/* Banner Section Two */}
    <section className="banner-section-two" id="home">
		<div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-2.png)' }} ></div>
		<Swiper {...swiperOptions} className="main-slider-carousel ">
            
			{/* Slide */}
            <SwiperSlide>
            <div className="slide">
				<div className="slide-middle-text">Foodily</div>
				<div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-4.png)' }} ></div>
				<div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-5.png)' }} ></div>
				<div className="auto-container">
					<div className="row clearfix">
					
						{/* Content Column */}
						<div className="content-column col-lg-7 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="title">Best for You</div>
								<h1>Delicious Food <br/> on the street.</h1>
								<div className="text">We have the best sed non mauris vitae erat <br/> consequat auctor eu in elit.</div>
								<div className="btns-box">
									<Link href="menu" className="theme-btn btn-style-three clearfix"><span className="icon"></span>Buy Now</Link>
								</div>
							</div>
						</div>
						
						{/* Image Column */}
						<div className="image-column col-lg-5 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="image">
									<img src="assets/images/main-slider/image-2.png" alt="" />
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="shadow-layer" style={{ backgroundImage: 'url(assets/images/main-slider/shadow.png)' }} ></div>
			</div>
			</SwiperSlide>
			{/* Slide */}
            <SwiperSlide>
            <div className="slide">
				<div className="slide-middle-text">Foodily</div>
				<div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-4.png)' }} ></div>
				<div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-5.png)' }} ></div>
				<div className="auto-container">
					<div className="row clearfix">
					
						{/* Content Column */}
						<div className="content-column col-lg-7 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="title">Best for You</div>
								<h1>Delicious Food <br/> on the street.</h1>
								<div className="text">We have the best sed non mauris vitae erat <br/> consequat auctor eu in elit.</div>
								<div className="btns-box">
									<Link href="menu" className="theme-btn btn-style-three clearfix"><span className="icon"></span>Buy Now</Link>
								</div>
							</div>
						</div>
						
						{/* Image Column */}
						<div className="image-column col-lg-5 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="image">
									<img src="assets/images/main-slider/image-2.png" alt="" />
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			</SwiperSlide>
			{/* Slide */}
            <SwiperSlide>
            <div className="slide">
				<div className="slide-middle-text">Foodily</div>
				<div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-4.png)' }} ></div>
				<div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-5.png)' }} ></div>
				<div className="auto-container">
					<div className="row clearfix">
					
						{/* Content Column */}
						<div className="content-column col-lg-7 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="title">Best for You</div>
								<h1>Delicious Food <br/> on the street.</h1>
								<div className="text">We have the best sed non mauris vitae erat <br/> consequat auctor eu in elit.</div>
								<div className="btns-box">
									<Link href="menu" className="theme-btn btn-style-three clearfix"><span className="icon"></span>Buy Now</Link>
								</div>
							</div>
						</div>
						
						{/* Image Column */}
						<div className="image-column col-lg-5 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="image">
									<img src="assets/images/main-slider/image-2.png" alt="" />
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			</SwiperSlide>
        </Swiper>
		
	</section>
	{/* End Banner Section */}

        </>
    )
}
