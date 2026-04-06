import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Custom() {

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Custom Orders">
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="assets/images/resource/beverage-8.jpg" alt="Custom Balloon Orders" />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>Custom <span className="theme_color">Balloon Orders</span></h2>
                                <div className="separate"></div>
                                <div className="text">
                                    Have a unique vision for your celebration? We create custom balloon arrangements tailored to your theme, colors, and style. Contact us with your ideas and we will bring your vision to life.
                                </div>
                            </div>
                            <div className="button-box text-center" style={{ marginTop: '30px' }}>
                                <Link href="/contact" className="theme-btn btn-style-two clearfix">
                                    <span className="icon"></span>Contact Us to Order
                                </Link>
                                <Link href="/catalog" className="theme-btn btn-style-two clearfix" style={{ marginLeft: '15px' }}>
                                    <span className="icon"></span>Back to Catalog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
