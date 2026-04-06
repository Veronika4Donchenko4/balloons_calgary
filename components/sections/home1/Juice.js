'use client'
import Link from "next/link"

export default function Juice() {
    
    return (
        <>

        {/* Balloon Promo Section */}
        <section className="juice-section">
            <div className="section-text">party</div>

            <div
                className="pattern-layer"
                style={{ backgroundImage: 'url(assets/images/background/1.png)' }}
            ></div>

            <div
                className="pattern-layer-two"
                style={{ backgroundImage: 'url(assets/images/resource/juice-glass.png)' }}
            ></div>

            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="assets/images/resource/juice.png" alt="Balloon Decoration"/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">

                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Perfect for Every Celebration</div>
                                <h2>
                                    Beautiful <span className="theme_color">Balloon Decorations</span>
                                </h2>

                                <div className="separate"></div>

                                <div className="text">
                                    We create stylish balloon arrangements for birthdays, baby showers,
                                    romantic surprises and special events. Choose from ready-made packages
                                    or order a custom design — we will make your celebration unforgettable.
                                </div>
                            </div>

                            <Link href="/catalog" className="theme-btn btn-style-two clearfix">
                                <span className="icon"></span>Order Your Balloons
                            </Link>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Balloon Promo Section */}

        </>
    )
}
