import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>




       
            <ul className="navigation left-nav clearfix">
                <li className="dropdown">
                    <Link href="/">Home </Link>
                    <ul>
                        <li className=""><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>
                        <li><Link href="index-4">Home Four</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="restaurant">Restaurant</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Menu</Link>
                    <ul>
                        <li><Link href="/catalog">Menu</Link></li>
                        <li><Link href="/catalog">Milk Shake</Link></li>
                        <li><Link href="frappe">Frappe</Link></li>
                        <li><Link href="boba-tea">Boba Tea</Link></li>
                        <li><Link href="slushy">Slushy</Link></li>                        
                    </ul>
                </li>
            </ul>
        </>
    )
}
