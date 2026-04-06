'use client'
import Link from "next/link"
export default function Fluid() {
    return (
        <>

            <section className="fluid-section-one">
                <div className="outer-container clearfix">
                    
                    <div className="content-column">
                        <div className="icon-box" style={{ backgroundImage: 'url(assets/images/icons/icon-4.png)' }} ></div>
                        <div className="inner-column">
                            
                            <div className="sec-title">
                                <h2>Upcoming Our <br/> Beverage</h2>
                                <div className="separate"></div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                            
                            <div className="button-box">
                                <Link href="/catalog" className="theme-btn btn-style-two clearfix"><span className="icon"></span>All Product</Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="image-column" style={{ backgroundImage: 'url(assets/images/resource/image-1.jpg)' }} >
                        <figure className="image-box"><img src="assets/images/resource/image-1.jpg" alt=""/></figure>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
