'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = ({ handleMobileMenu }) => {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isActive, setIsActive] = useState({ status: false, key: "" });

  const handleToggle = (key) => {
    setIsActive(isActive.key === key ? { status: false, key: "" } : { status: true, key });
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu}></div>
        <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-multiply"></span></div>
        <nav className="menu-box">
          <div className="nav-logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title="" /></Link></div>
          <div className="menu-outer">
            <div className="collapse navbar-collapse show clearfix">
              <ul className="navigation">
                {!isHome && (
                  <li><Link href="/">Home</Link></li>
                )}
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="#">Girls</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
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
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                  <Link href="#">For Him</Link>
                  <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                    <li><Link href="/for-him/1">Package 1 - 120 CAD</Link></li>
                    <li><Link href="/for-him/2">Package 2 - 160 CAD</Link></li>
                  </ul>
                  <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                  <Link href="#">Classic Collections</Link>
                  <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                    <li><Link href="/classic/numbers">Numbers - 120 CAD</Link></li>
                    <li><Link href="/classic/sets">Sets - 160 CAD</Link></li>
                  </ul>
                  <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default MobileMenu;