'use client'
import Link from "next/link"
export default function Recipe() {
    return (
        <>

        {/* Recipe Section */}
        <section className="recipe-section">
            <div className="section-text">yummy</div>
            <div className="icon-layer-one" style={{ backgroundImage:'url(assets/images/icons/icon-1.png)'}} ></div>
            <div className="icon-layer-two" style={{ backgroundImage:'url(assets/images/icons/icon-2.png)'}} ></div>
            <div className="icon-layer-three" style={{ backgroundImage:'url(assets/images/icons/icon-3.png)'}} ></div>
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Best for You</div>
                    <h2>Detox Smoothie Recipe</h2>
                    <div className="separate"></div>
                </div>
                <div className="inner-container">
                    <div className="circle-layer" style={{ backgroundImage:'url(assets/images/icons/circles.png)'}} ></div>
                    <div className="row clearfix">
                    
                        {/* Left Column */}
                        <div className="left-column col-lg-5 col-md-6 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Recipe Block */}
                                <div className="recipe-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-1.png" alt=""/></div>
                                        <h6><Link href="/catalog">Cucumber</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                                
                                {/* Recipe Block */}
                                <div className="recipe-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-2.png" alt=""/></div>
                                        <h6><Link href="/catalog">Apple</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Image Column */}
                        <div className="image-column col-lg-2 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/recipe.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column */}
                        <div className="right-column col-lg-5 col-md-6 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Recipe Block / Style Two */}
                                <div className="recipe-block style-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-3.png" alt=""/></div>
                                        <h6><Link href="/catalog">Lemon</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                                
                                {/* Recipe Block / Style Two */}
                                <div className="recipe-block style-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-4.png" alt=""/></div>
                                        <h6><Link href="/catalog">Fresh Water</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* End Recipe Section */}
            

        </>
    )
}
