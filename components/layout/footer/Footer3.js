import Link from "next/link"
export default function Footer3() {
    return (
        <>
        {/* Footer Style Three */}
            <footer className="footer-style-three">
                <div className="auto-container">
                    {/* Widgets Section */}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget social-widget">
                                    <h6>Follow Us Now</h6>
                                    <ul className="social-list">
                                        <li><Link href="#"><span className="icon fa fa-facebook"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-twitter"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-dribbble"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-widget logo-widget">
                                    <div className="logo">
                                        <Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
                                    </div>
                                    <div className="copyright">&copy; 2024 <Link href="/">Balloons Calgary</Link> All Rights Reserved.</div>
                                </div>
                            </div>
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget visit-widget">
                                    <h6>Visit</h6>
                                    <div className="text">Calgary, Alberta, <br/> Canada</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
