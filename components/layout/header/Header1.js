import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return (
        <>
            


    {/* Main Header*/}
	<header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
    	
		{/* Header Upper */}
        <div className="header-upper">
        	<div className="auto-container clearfix">

				            	{
									<ul className="header-inst">
										<li><Link href="#"><span className="icon fa fa-instagram"></span>instagram</Link></li>
									</ul>
								}

				<div className="nav-outer clearfix">
					{/*Mobile Navigation Toggler*/}
					<div className="mobile-nav-toggler"><span className="icon flaticon-menu" onClick={handleMobileMenu}></span></div>
					{/* Main Menu */}
					<nav className="main-menu navbar-expand-md">
					<Menu />
					</nav>
					
					{/* Main Menu End*/}
					<div className="outer-box clearfix">
						
						{/* Search Btn */}
						<div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div>
						
						{/* Nav Btn */}
						<div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2" onClick={handleSidebar}></span></div>
							
					</div>
				</div>
				
            </div>
        </div>

		<div className="sticky-header">
            <div className="auto-container clearfix">
                <div className="logo pull-left">
                    <Link href="/" title=""><img src="assets/images/logo-small.png" alt="" title="" /></Link>
                </div>
                <div className="pull-right">
                    <nav className="main-menu">
						<Menu />
                    </nav>
					

					<div className="outer-box clearfix">

						<div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div>
						<div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2" onClick={handleSidebar}></span></div>
						
					</div>
					
                </div>
            </div>
        </div>
        {/*End Header Upper*/}
		<MobileMenu handleMobileMenu={handleMobileMenu} />
        
		
	
    </header>
    {/* End Main Header */}
     
        </>
    )
}
