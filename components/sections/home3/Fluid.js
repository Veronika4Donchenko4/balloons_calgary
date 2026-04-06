'use client'
import Link from "next/link"
export default function Fluid() {
    return (
        <>
            {/* Fluid Section Two */}
            <section className="fluid-section-two">
                <div className="section-text">Recipe book</div>
                <div className="outer-container clearfix">
                    
                    {/* Content Column */}
                    <div className="content-column">
                        <div className="inner-column">
                            {/* Title Box */}
                            <div className="title-box">
                                <h2>Free recipe book!</h2>
                                <div className="text">Get your copy of spicy kitchen feauturing 10 of our most loved, <br/> highly-rated recipes!</div>
                            </div>
                            <ul className="book-list">
                                <li><img src="assets/images/resource/book-list-1.png" alt="" /></li>
                                <li><img src="assets/images/resource/book-list-2.png" alt="" /></li>
                                <li><img src="assets/images/resource/book-list-3.png" alt="" /></li>
                            </ul>
                            {/* Button Box */}
                            <div className="button-box">
                                <Link href="/catalog" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Get In Now</Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Column */}
                    <div className="image-column" style={{ backgroundImage: 'url(assets/images/resource/image-2.jpg)' }} >
                        <figure className="image-box"><img src="assets/images/resource/image-2.jpg" alt=""/></figure>
                    </div>
                    
                </div>
            </section>
            {/* End Fluid Section Two */}
        </>
    )
}
