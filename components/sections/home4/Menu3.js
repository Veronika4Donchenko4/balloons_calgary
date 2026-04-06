'use client'
import Link from "next/link"
export default function Menu3() {
    return (
        <>

            {/* Menus Section */}
            <section className="menus-section style-two">
                <figure className="menu-bottom-image">
                    <img src="assets/images/resource/menu-9.jpg" alt=""/>
                </figure>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Softly & Crunchy</div>
                        <h2>Main Courses</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-1.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Grilled Toast Burger</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-3.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Fried snacks</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-5.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Pizza</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-7.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Sandwiches</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-2.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Coca Cola</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-4.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Papsi</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-6.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Mirinda</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="/catalog"><img src="assets/images/resource/menu-8.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="/catalog">Fanta</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Menus Section */}
        </>
    )
}
