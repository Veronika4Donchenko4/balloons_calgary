'use client'
import Link from "next/link"
export default function Tips() {
    return (
        <>
            {/* Tips Section */}
            <section className="tips-section">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/resource/history-icon.png)' }} ></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/history-1.jpg" alt="" />
                                </div>
                                <div className="image-two">
                                    <img src="assets/images/resource/history-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title centered">
                                    <div className="title">Our food philosofty</div>
                                    <h2>Our Tips</h2>
                                    <div className="separate"></div>
                                    <div className="text">voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
                                </div>
                                <div className="btns-box text-center">
                                    <Link href="/catalog" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                </div>
                                <div className="signature-image">
                                    <img src="assets/images/icons/signature.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Tips Section */}
        </>
    )
}
