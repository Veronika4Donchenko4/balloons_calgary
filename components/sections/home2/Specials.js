'use client'
import Link from "next/link"
export default function Specials() {
    return (
        <>

            {/* Specials Section */}
            <section className="specials-section" id="specials">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/resource/special-icon-1.png)' }} ></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/resource/special-icon-2.png)' }} ></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/resource/special-icon-3.png)' }} ></div>
                <div className="icon-layer-four" style={{ backgroundImage: 'url(assets/images/resource/special-icon-4.png)' }} ></div>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Our most valuable asset</div>
                        <h2>Today’s Specials</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Special Block */}
                        <div className="special-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Link href="/catalog"><img src="assets/images/resource/special-1.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4><Link href="/catalog">Fried Potatoes</Link></h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Special Block */}
                        <div className="special-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Link href="/catalog"><img src="assets/images/resource/special-2.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4><Link href="/catalog">shawarma</Link></h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Special Block */}
                        <div className="special-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Link href="/catalog"><img src="assets/images/resource/special-3.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4><Link href="/catalog">pizza</Link></h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Special Block */}
                        <div className="special-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Link href="/catalog"><img src="assets/images/resource/special-4.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4><Link href="/catalog">burger</Link></h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Special Block */}
                        <div className="special-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Link href="/catalog"><img src="assets/images/resource/special-5.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4><Link href="/catalog">club sandwiches</Link></h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Special Block */}
                        <div className="special-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Link href="/catalog"><img src="assets/images/resource/special-6.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4><Link href="/catalog">spicy chicken</Link></h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Specials Section */}

        </>
    )
}
