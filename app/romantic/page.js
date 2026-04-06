import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Romantic() {

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Romantic & Love">
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="assets/images/resource/beverage-6.jpg" alt="Romantic Balloons" />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>Romantic & <span className="theme_color">Love Balloons</span></h2>
                                <div className="separate"></div>
                                <div className="text">
                                    Express your love with our romantic balloon arrangements. Heart-shaped balloons, rose gold accents, and elegant designs perfect for anniversaries, Valentine's Day, proposals, and romantic surprises.
                                </div>
                            </div>
                            <div className="button-box text-center" style={{ marginTop: '30px' }}>
                                <Link href="/contact" className="theme-btn btn-style-two clearfix">
                                    <span className="icon"></span>Order Now
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
