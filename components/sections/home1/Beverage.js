'use client'
import Link from "next/link"

export default function Beverage() {
    return (
        <>
            {/* Balloon Section */}
            <section className="beverage-section">
                <div
                    className="icon-layer"
                    style={{ backgroundImage: 'url(assets/images/resource/beverage.png)' }}
                ></div>

                <div className="auto-container">

                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Celebrate with Style</div>
                        <h2>Balloon Collections</h2>
                        <div className="separate"></div>
                    </div>

                    <div className="row clearfix">

                        {/* 1 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/girls/1"><img src="assets/images/resource/beverage-1.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/girls/1">Girls Collection</Link></h6>
                                    <div className="products">10 packages</div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/for-him/1"><img src="assets/images/resource/beverage-2.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/for-him/1">For Him</Link></h6>
                                    <div className="products">2 packages</div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/birthday"><img src="assets/images/resource/beverage-3.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/birthday">Birthday Sets</Link></h6>
                                    <div className="products">party bundles</div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/classic/numbers"><img src="assets/images/resource/beverage-4.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/classic/numbers">Number Balloons</Link></h6>
                                    <div className="products">age balloons</div>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/baby-shower"><img src="assets/images/resource/beverage-5.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/baby-shower">Baby Shower</Link></h6>
                                    <div className="products">boy & girl themes</div>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/romantic"><img src="assets/images/resource/beverage-6.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/romantic">Romantic & Love</Link></h6>
                                    <div className="products">heart balloons</div>
                                </div>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/luxury"><img src="assets/images/resource/beverage-7.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/luxury">Luxury Sets</Link></h6>
                                    <div className="products">premium designs</div>
                                </div>
                            </div>
                        </div>

                        {/* 8 */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/custom"><img src="assets/images/resource/beverage-8.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/custom">Custom Orders</Link></h6>
                                    <div className="products">personal design</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Button Box */}
                    <div className="button-box text-center">
                        <Link href="/catalog" className="theme-btn btn-style-two clearfix">
                            <span className="icon"></span>View All Balloon Packages
                        </Link>
                    </div>

                </div>
            </section>
            {/* End Balloon Section */}
        </>
    )
}
