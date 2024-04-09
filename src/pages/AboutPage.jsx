import BanerPages from "../components/BanerPages";
import '../assets/scss/_about.scss'
import Team from "../components/Team";
import Sliders from "../components/Sliders";
import Partners from "../components/Partners";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pricing from "../components/Pricing";
import Service from "../components/Service";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import { useEffect, useState } from "react";

export default function AboutPage(){
    const [tabs, setTabs] = useState([])

    const fetchTabs = async () => {
        const resp = await fetch('data/tabs.json')
        const json = await resp.json()
        setTabs(json)
    }

    useEffect(()=>{
        fetchTabs()

    }, [])

    return <>
        <BanerPages className="elem Ab">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>About Us</span>
                    </div>
                    <div className="title">
                        <h1>About Our Logistics</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <section className="about-tabs">
            <div className="wrap-container">
                <div className="img-wrap">
                    <img className="img" src="assets/img/PhotoAb.jpg" alt="Truck" />
                    <div className="mini-img">
                        <img src="assets/img/Image-mini-ab.jpg" alt="Courier" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-top">
                        <div className="pattern">
                            <span>About Us</span>
                        </div>
                        <div className="title">
                            <h2>Our Company Overview</h2>
                        </div>
                        <div className="text">
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                        </div>
                    </div>
                    <div className="tabs-content">
                        <Tabs>
                            <TabList className="tabs">
                                {tabs.map((item)=>{
                                    return (
                                        <Tab className="item-tab" key={item.id}>{item.title}</Tab>
                                    )
                                })}
                                
                            </TabList>
                            {tabs.map((item)=>{
                                return (
                                    <TabPanel className="text" key={item.id}>
                                        <p>{item.desc}</p>
                                    </TabPanel>
                                )
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
        <Service className="dark" qty="4">
            <div className="bottom-btn">
                <Link to="../service" className="btn">More Works</Link>
            </div>
        </Service>
        <Team quantity="3" className="elem style"/>
        <Sliders className="dark" />
        <Pricing/>
        <FAQ/>
        <section className="partner-team">
            <div className="container">
                <Partners/>
            </div>
        </section>
        
    </>
}