import BanerPages from "../components/BanerPages";
import Partners from "../components/Partners";
import Team from "../components/Team";
import '../assets/scss/team-page.scss';

export default function TeamPage(){
    return <>
        <BanerPages className="elem Team">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>Team</span>
                    </div>
                    <div className="title">
                        <h1>Our Team</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <Team className="dark elem style" quantity="6"/>

        <section className="partner-team">
            <div className="container">
                <Partners/>
            </div>
        </section>
    </>
}