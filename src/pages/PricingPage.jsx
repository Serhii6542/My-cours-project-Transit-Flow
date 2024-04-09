import BanerPages from "../components/BanerPages";
import Pricing from "../components/Pricing";
import Sliders from "../components/Sliders";

export default function PricingPage(){
    return <>
        <BanerPages className="elem Prici">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>Pricing</span>
                    </div>
                    <div className="title">
                        <h1>Our Best Price</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <Pricing/>
        <Sliders className="dark price-slider"/> 
    </>
}