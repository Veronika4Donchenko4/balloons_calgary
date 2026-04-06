import Layout from "@/components/layout/Layout"
import Link from "next/link"

const packages = {
    '1': { name: 'Package 1', price: '120 CAD' },
    '2': { name: 'Package 2', price: '160 CAD' },
}

export default async function ForHimPackage({ params }) {
    const { id } = await params
    const pkg = packages[id] || { name: `Package ${id}`, price: 'Contact us' }

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle={`For Him - ${pkg.name}`}>
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(/assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(/assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="/assets/images/resource/beverage-2.jpg" alt={pkg.name} />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>{pkg.name} — <span className="theme_color">{pkg.price}</span></h2>
                                <div className="separate"></div>
                                <div className="text">
                                    Stylish balloon arrangement from our For Him collection. Great for birthdays, milestones, and celebrations.
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
