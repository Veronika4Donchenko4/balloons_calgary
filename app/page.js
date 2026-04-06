import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Gallery from "@/components/sections/home1/Gallery"
import Juice from "@/components/sections/home1/Juice"
import Beverage from "@/components/sections/home1/Beverage"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Juice/>
                <Beverage/>
                <Gallery />
            </Layout>

        </>
    )
}