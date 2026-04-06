import Layout from "@/components/layout/Layout"
import Link from "next/link"

const packages = {
    '1': { name: 'Package 1', price: '70 CAD' },
    '2': { name: 'Package 2', price: '80 CAD' },
    '3': { name: 'Package 3', price: '90 CAD' },
    '4': { name: 'Package 4', price: '100 CAD' },
    '5': { name: 'Package 5', price: '120 CAD' },
    '6': { name: 'Package 6', price: '140 CAD' },
    '7': { name: 'Package 7', price: '150 CAD' },
    '8': { name: 'Package 8', price: '160 CAD' },
    '9': { name: 'Package 9', price: '180 CAD' },
    '10': { name: 'Package 10', price: '200 CAD' },
}

export default async function GirlsPackage({ params }) {
    const { id } = await params
    const pkg = packages[id] || { name: `Package ${id}`, price: 'Contact us' }

    return (
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle={`Girls - ${pkg.name}`}>
            <section className="milkshake-section">
                <div className="icon-layer-one" style={{ backgroundImage: 'url(/assets/images/icons/icon-1.png)' }}></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(/assets/images/icons/icon-3.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="big-image">
                            <img src="/assets/images/resource/beverage-1.jpg" alt={pkg.name} />
                        </div>
                        <div className="lower-content">
                            <div className="sec-title centered">
                                <h2>{pkg.name} — <span className="theme_color">{pkg.price}</span></h2>
                                <div className="separate"></div>
                                <div className="text">
                                    Beautiful balloon arrangement from our Girls Collection. Perfect for birthdays, celebrations, and special events.
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
