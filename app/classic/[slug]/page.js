import Layout from "@/components/layout/Layout"
import Link from "next/link"

const collections = {
    'numbers': { name: 'Number Balloons', price: '120 CAD', description: 'Age and milestone number balloons perfect for birthdays and anniversaries. Available in a variety of colors and sizes.' },
    'sets': { name: 'Classic Sets', price: '160 CAD', description: 'Timeless balloon sets for any celebration. Elegant arrangements that fit every occasion.' },
}

export default async function ClassicCollection({ params }) {
    const { slug } = await params
    const collection = collections[slug] || { name: 'Classic Collection', price: 'Contact us', description: 'Beautiful classic balloon arrangements.' }

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle={`Classic - ${collection.name}`}>
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(/assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(/assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="/assets/images/resource/beverage-4.jpg" alt={collection.name} />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>{collection.name} — <span className="theme_color">{collection.price}</span></h2>
                                <div className="separate"></div>
                                <div className="text">{collection.description}</div>
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
