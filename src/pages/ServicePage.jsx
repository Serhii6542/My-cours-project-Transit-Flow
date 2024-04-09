import BanerPages from "../components/BanerPages";
import Counter from "../components/Counter";
import Service from "../components/Service";
import Sliders from "../components/Sliders";

export default function ServicePage(){
    return <>
        <BanerPages className="elem Ser">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>Services</span>
                    </div>
                    <div className="title">
                        <h1>Our Logistics Service</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <Service qty="6" className="full-service"/>

        <Sliders/>
        <Counter className="counter-page"/>
    </>
}