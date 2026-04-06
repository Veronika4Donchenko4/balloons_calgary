import Link from "next/link"
export default function Footer1() {
    return (
        <>
        {/* Main Footer */}
    <footer className="main-footer">
		<div className="pattern-layer-one" style={{ backgroundImage: 'url(assets/images/resource/footer-pattern-1.png)' }} ></div>
		<div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/resource/footer-pattern-2.png)' }} ></div>
		<div className="pattern-layer-three" style={{ backgroundImage: 'url(assets/images/background/pattern-6.png)' }} ></div>
		<div className="auto-container">
        	{/* Widgets Section */}
            <div className="widgets-section">
            	<div className="row clearfix">
                	
                    {/* Big Column */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row clearfix">
							
							{/*Footer Column*/}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
									<h6>Contact Us</h6>
									<div className="text">Calgary, Alberta, Canada</div>
									<ul className="contact-list">
										<li><span className="icon fa fa-send"></span>balloonscalgary@gmail.com</li>
										<li><span className="icon fa fa-phone"></span><Link href="tel:+1-403-000-0000">(403) 000-0000</Link></li>
									</ul>
								</div>
							</div>
							
							{/*Footer Column*/}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
									<h6>Useful Links</h6>
									<ul className="footer-list">
										<li><Link href="#">Home</Link></li>
										<li><Link href="#">About us</Link></li>
										<li><Link href="#">Blogs</Link></li>
										<li><Link href="#">Terms Of Service</Link></li>
										<li><Link href="#">Privacy Policy</Link></li>
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
							
							{/* Footer Column */}
							<div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget newsletter-widget">
									<h6>Subscribe</h6>
									<div className="newsletter-form">
										<form method="post">
											<div className="form-group">
												<input type="email" name="email" placeholder="Your Email"/>
												<button type="submit" className="theme-btn submit-btn">Subscribe Now</button>
											</div>
										</form>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
			<div className="footer-bottom">
				<div className="copyright">&copy; 2024 Balloons Calgary All Rights Reserved.</div>
			</div>
		</div>
	</footer>

        </>
    )
}
