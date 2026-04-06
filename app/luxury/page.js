import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Luxury() {

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Luxury Sets">
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="assets/images/resource/beverage-7.jpg" alt="Luxury Balloon Sets" />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>Luxury <span className="theme_color">Balloon Sets</span></h2>
                                <div className="separate"></div>
                                <div className="text">
                                    Our premium balloon designs for those who want something extra special. Luxury sets feature premium materials, unique color combinations, and stunning arrangements that make a statement at any event.
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
