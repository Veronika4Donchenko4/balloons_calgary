"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    return (
        <>
            <ul className="navigation">
                {!isHome && (
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                )}
                <li className="dropdown">
                    <Link href="#">Girls</Link>
                    <ul>
                        <li><Link href="/girls/1">Package 1 - 70 CAD</Link></li>
                        <li><Link href="/girls/2">Package 2 - 80 CAD</Link></li>
                        <li><Link href="/girls/3">Package 3 - 90 CAD</Link></li>
                        <li><Link href="/girls/4">Package 4 - 100 CAD</Link></li>
                        <li><Link href="/girls/5">Package 5 - 120 CAD</Link></li>
                        <li><Link href="/girls/6">Package 6 - 140 CAD</Link></li>
                        <li><Link href="/girls/7">Package 7 - 150 CAD</Link></li>
                        <li><Link href="/girls/8">Package 8 - 160 CAD</Link></li>
                        <li><Link href="/girls/9">Package 9 - 180 CAD</Link></li>
                        <li><Link href="/girls/10">Package 10 - 200 CAD</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">For Him</Link>
                    <ul>
                        <li><Link href="/for-him/1">Package 1 - 120 CAD</Link></li>
                        <li><Link href="/for-him/2">Package 2 - 160 CAD</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Classic Collections</Link>
                    <ul>
                        <li><Link href="/classic/numbers">Numbers - 120 CAD</Link></li>
                        <li><Link href="/classic/sets">Sets - 160 CAD</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}