import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function BabyShower() {

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Baby Shower">
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="assets/images/resource/beverage-5.jpg" alt="Baby Shower Balloons" />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>Baby Shower <span className="theme_color">Balloons</span></h2>
                                <div className="separate"></div>
                                <div className="text">
                                    Celebrate the arrival of a new baby with our beautiful balloon arrangements. Available in boy and girl themes with soft pastel colors, adorable designs, and customizable options to match your party decor.
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
