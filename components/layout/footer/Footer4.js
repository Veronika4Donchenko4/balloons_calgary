import Link from "next/link"
export default function Footer4() {
    return (
        <>
            
        {/* Main Footer */}
            <footer className="footer-style-two">
                <div className="auto-container">
                    {/* Widgets Section */}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            
                            {/* Big Column */}
                            <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                <div className="row clearfix">
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget logo-widget">
                                            <div className="logo">
                                                <Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
                                            </div>
                                            <div className="text">Proin gravida nibh vel velit <br/> Lorem Ipsum. Duis sed proin <br/> gravida nibh.</div>
                                        </div>
                                    </div>
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget contact-widget">
                                            <h6>Contact us</h6>
                                            <ul className="contact-list">
                                                <li><Link href="mailto:www.yourwebsite.com">Your mail @ gmail.com</Link></li>
                                                <li><Link href="mailto:www.yourwebsite.com">Your mail @ gmail.com</Link></li>
                                                <li><Link href="tel:+123-4567-89000">(123) 4567 89000</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* Big Column */}
                            <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                <div className="row clearfix">
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget visit-widget">
                                            <h6>Visit</h6>
                                            <div className="text">Calgary, Alberta, <br/> Canada</div>
                                        </div>
                                    </div>
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget social-widget">
                                            <h6>Follow Us Now</h6>
                                            <ul className="social-list">
                                                <li><Link href="#"><span className="icon fa fa-facebook"></span>facebook</Link></li>
                                                <li><Link href="#"><span className="icon fa fa-twitter"></span>twitter</Link></li>
                                                <li><Link href="#"><span className="icon fa fa-instagram"></span>instagram</Link></li>
                                                <li><Link href="#"><span className="icon fa fa-dribbble"></span>dribbble</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright">&copy; 2024 <Link href="/">Balloons Calgary</Link> All Rights Reserved.</div>
                    </div>
                </div>
            </footer>

        </>
    )
}
