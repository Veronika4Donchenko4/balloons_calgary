import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import Link from "next/link"

export default function Catalog() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Balloon Catalog">
                {/* Catalog Section */}
                <section className="milkshake-section">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="big-image">
                                <img src="assets/images/resource/milkshake.jpg" alt="" />
                            </div>
                            <div className="lower-content">
                                <div className="section-text">celebrate</div>
                                <div className="text">
                                    <p>Browse our full collection of balloon decorations for every occasion. From birthday parties and baby showers to romantic surprises and premium luxury sets — we have the perfect arrangement for your celebration. Choose a ready-made package or request a custom design tailored to your event.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Catalog Section */}

                {/* Categories Section */}
                <section className="menus-section style-two">
                    <figure className="menu-bottom-image">
                        <img src="assets/images/resource/menu-10.png" alt=""/>
                    </figure>
                    <div className="auto-container">
                        {/* Sec Title */}
                        <div className="sec-title centered">
                            <h2>Our <span>Collections</span></h2>
                            <div className="separate"></div>
                        </div>
                        <div className="row clearfix">

                            {/* Menu Column */}
                            <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">

                                    {/* Girls Collection */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/girls/1"><img src="assets/images/resource/beverage-1.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/girls/1">Girls Collection</Link></h6>
                                            <div className="title">10 packages available</div>
                                            <div className="price-box">
                                                <span className="price">from $70</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* For Him */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/for-him/1"><img src="assets/images/resource/beverage-2.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/for-him/1">For Him</Link></h6>
                                            <div className="title">2 packages available</div>
                                            <div className="price-box">
                                                <span className="price">from $120</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Birthday Sets */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/birthday"><img src="assets/images/resource/beverage-3.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/birthday">Birthday Sets</Link></h6>
                                            <div className="title">Party bundles for all ages</div>
                                        </div>
                                    </div>

                                    {/* Number Balloons */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/classic/numbers"><img src="assets/images/resource/beverage-4.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/classic/numbers">Number Balloons</Link></h6>
                                            <div className="title">Age balloons for milestones</div>
                                            <div className="price-box">
                                                <span className="price">$120</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Menu Column */}
                            <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* Baby Shower */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/baby-shower"><img src="assets/images/resource/beverage-5.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/baby-shower">Baby Shower</Link></h6>
                                            <div className="title">Boy & girl themes</div>
                                        </div>
                                    </div>

                                    {/* Romantic & Love */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/romantic"><img src="assets/images/resource/beverage-6.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/romantic">Romantic & Love</Link></h6>
                                            <div className="title">Heart balloons & arrangements</div>
                                        </div>
                                    </div>

                                    {/* Luxury Sets */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/luxury"><img src="assets/images/resource/beverage-7.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/luxury">Luxury Sets</Link></h6>
                                            <div className="title">Premium designs</div>
                                        </div>
                                    </div>

                                    {/* Custom Orders */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                            <div className="menu-image">
                                                <Link href="/custom"><img src="assets/images/resource/beverage-8.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="/custom">Custom Orders</Link></h6>
                                            <div className="title">Your personal design</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* End Categories Section */}

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
