import { Link } from "react-router-dom"
import BanerPages from "../components/BanerPages"
import Counter from "../components/Counter"
import Sliders from "../components/Sliders"
import Team from "../components/Team"
import Partners from "../components/Partners"
import Service from "../components/Service"
import { useEffect, useState } from "react"
import FormBook from "../components/FormBook"
import NewsList from "../components/NewsList"

export default function HomePage(){
    const [transp, setTransp] = useState([])

    const fetchTransp = async () => {
        const resp = await fetch('data/transport-world.json')
        const json = await resp.json()
        setTransp(json)
    }

    useEffect(()=>{
        fetchTransp()

    }, [])

    return <>
        <BanerPages className="Home">
            <div className="baner">
                <div className="container">
                    <div className="wrap-baner-text">
                        <div className="pattern baner-top">
                            <span>Logistics & Supply Chain Solutions</span>
                        </div>
                        <div className="baner-middle">
                            <h1>Your Gateway to any Destination in the World</h1>
                        </div>
                        <div className="baner-bottom">
                            <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
                        </div>
                    </div>
                </div>
            </div>  
        </BanerPages>
        <Service qty="4"/>
        <div className="about-img"></div>
        <section className="about">
            <div className="container">
                <div className="about-top">
                    <div className="ab-text">
                        <div className="text">
                            <div className="pattern why-us">
                                <span>Why Us</span>
                            </div>
                            <h2 className="title">We provide full range global logistics solution</h2>
                            <p className="desc">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                            <p className="desc secondary">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>
                        <div className="content">
                            <div className="icon-text">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                        <path d="M25 21.4598V8.54017C24.999 8.35355 24.9512 8.1705 24.8612 8.00947C24.7712 7.84843 24.6423 7.71511 24.4875 7.62296L13.4875 1.13693C13.3393 1.04722 13.1711 1 13 1C12.8289 1 12.6607 1.04722 12.5125 1.13693L1.5125 7.62296C1.35769 7.71511 1.22879 7.84843 1.13882 8.00947C1.04884 8.1705 1.00096 8.35355 1 8.54017V21.4598C1.00096 21.6464 1.04884 21.8295 1.13882 21.9905C1.22879 22.1516 1.35769 22.2849 1.5125 22.377L12.5125 28.8631C12.6607 28.9528 12.8289 29 13 29C13.1711 29 13.3393 28.9528 13.4875 28.8631L24.4875 22.377C24.6423 22.2849 24.7712 22.1516 24.8612 21.9905C24.9512 21.8295 24.999 21.6464 25 21.4598V21.4598Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 18V11.0995L7 4" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M25 8L13.1138 15L1 8" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13 15V29" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="text">Delivery on Time</div>
                            </div>
                            <div className="icon-text">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="18" viewBox="0 0 31 18" fill="none">
                                        <path d="M28.9643 1H2.03571C1.46371 1 1 1.44772 1 2V16C1 16.5523 1.46371 17 2.03571 17H28.9643C29.5363 17 30 16.5523 30 16V2C30 1.44772 29.5363 1 28.9643 1Z" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.5 13C17.433 13 19 11.433 19 9.5C19 7.567 17.433 6 15.5 6C13.567 6 12 7.567 12 9.5C12 11.433 13.567 13 15.5 13Z" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 1L30 8" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 17L30 10" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 1L1 8" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 17L1 10" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="text">Optimized Travel Cost</div>
                            </div>
                        </div>
                    </div>
                    <div className="ab-img">
                        <img src="assets/img/Image-plane.jpg" alt="plane"/>
                    </div>
                </div>
            </div>
            <Counter/>
        </section>
        <section className="transports-world">
            <div className="title">
                <h2>Transporting Across The World</h2>
            </div>
            <div className="transports">
                <ul className="list">
                    {transp.map((item, index)=>{
                        return (
                            <li className="item-trans" key={index}>
                                <div className="img-transp">
                                    <img src={item.imgTransp} alt="transport"/>
                                </div>
                                <div className="text">
                                    <span className="service-type">{item.serviceType}</span>
                                    <span className="name-trans">{item.nameTransp}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="button">
                <Link to="service" className="btn">More Work</Link>
            </div>
        </section>
        <Sliders/>
        <section className="why-choose-us">
            <div className="wrap-sect">
                <div className="img">
                    <img src="assets/img/why-choose.jpg" alt="plane"/>
                    <div className="desc-img">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="80" viewBox="0 0 65 80" fill="none">
                                <path d="M64.5 42C64.5 59.9565 50.1659 74.5 32.5 74.5C14.8341 74.5 0.5 59.9565 0.5 42C0.5 24.0435 14.8341 9.5 32.5 9.5C50.1659 9.5 64.5 24.0435 64.5 42Z" fill="#FFE6A5" stroke="#1C1F35"/>
                                <path d="M48.5 13.5C48.5 20.6627 42.4731 26.5 35 26.5C27.5269 26.5 21.5 20.6627 21.5 13.5C21.5 6.33728 27.5269 0.5 35 0.5C42.4731 0.5 48.5 6.33728 48.5 13.5Z" fill="#FFE6A5" stroke="#1C1F35"/>
                                <path d="M60.5 66.5C60.5 73.6627 54.4731 79.5 47 79.5C39.5269 79.5 33.5 73.6627 33.5 66.5C33.5 59.3373 39.5269 53.5 47 53.5C54.4731 53.5 60.5 59.3373 60.5 66.5Z" fill="#FFE6A5" stroke="#1C1F35"/>
                                <path d="M35.026 20.9304C39.012 20.9304 42.2434 17.6991 42.2434 13.713C42.2434 9.72694 39.012 6.49561 35.026 6.49561C31.0399 6.49561 27.8086 9.72694 27.8086 13.713C27.8086 17.6991 31.0399 20.9304 35.026 20.9304Z" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M28.3643 11.4923H41.6887" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M28.3643 15.9337H41.6887" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M35.0259 20.3752C36.559 20.3752 37.8018 17.3924 37.8018 13.713C37.8018 10.0336 36.559 7.0508 35.0259 7.0508C33.4928 7.0508 32.25 10.0336 32.25 13.713C32.25 17.3924 33.4928 20.3752 35.0259 20.3752Z" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M44.0127 47.3867L55.429 40.4743" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M42.1455 48.3809L36.9809 51.3627" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.52037 46.9932L17.2363 54.2267C18.2651 55.1923 19.5778 55.7997 20.979 55.9584C22.3803 56.1172 23.7953 55.8188 25.0136 55.1078L56 37.0752L52.1932 32.4032C51.2029 31.1923 49.8128 30.3759 48.2739 30.1015C46.7349 29.8272 45.1488 30.113 43.8019 30.9073L34.7147 36.2556L22.4348 32.1573L19.0578 33.6122C18.8052 33.7206 18.5838 33.8909 18.4142 34.1075C18.2446 34.3241 18.1322 34.5799 18.0874 34.8514C18.0425 35.1229 18.0667 35.4014 18.1576 35.6611C18.2485 35.9208 18.4032 36.1535 18.6075 36.3375L24.8908 41.9932L19.1601 45.2719L13.4295 42.8129L9.9911 44.2883C9.74095 44.3959 9.52154 44.5642 9.35273 44.7781C9.18392 44.9919 9.07104 45.2446 9.0243 45.5131C8.97757 45.7817 8.99845 46.0576 9.08507 46.3161C9.17169 46.5745 9.3213 46.8072 9.52037 46.9932V46.9932Z" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22.748 52.6577L34.1644 45.7453" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M53.5128 70.3391V63.6787C53.5123 63.5825 53.4864 63.4881 53.4376 63.4051C53.3889 63.3221 53.3192 63.2533 53.2354 63.2058L47.281 59.8621C47.2008 59.8158 47.1098 59.7915 47.0171 59.7915C46.9245 59.7915 46.8335 59.8158 46.7533 59.8621L40.7989 63.2058C40.7151 63.2533 40.6453 63.3221 40.5966 63.4051C40.5479 63.4881 40.522 63.5825 40.5215 63.6787V70.3391C40.522 70.4353 40.5479 70.5297 40.5966 70.6127C40.6453 70.6957 40.7151 70.7645 40.7989 70.812L46.7533 74.1557C46.8335 74.2019 46.9245 74.2263 47.0171 74.2263C47.1098 74.2263 47.2008 74.2019 47.281 74.1557L53.2354 70.812C53.3192 70.7645 53.3889 70.6957 53.4376 70.6127C53.4864 70.5297 53.5123 70.4353 53.5128 70.3391V70.3391Z" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M53.5128 63.4002L47.0787 67.0089L40.5215 63.4002" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M47.0176 67.0089V74.2263" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="desc">Moving your products across borders</span>
                    </div>
                </div>
                <div className="content">
                    <div className="desc">
                        <div className="pattern why-choose">
                            <span>Why Choose</span>
                        </div>
                        <div className="title">
                            <h2>We create opportunity to reach potential</h2>
                        </div>
                        <div className="text">
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
                        </div>
                    </div>
                    <div className="features">
                        <div className="wrap-list">
                            <ul className="list left">
                                <li className="item">
                                    <div className="icon">
                                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 18.537V7.46301C22.9991 7.30305 22.9552 7.14614 22.8728 7.00811C22.7903 6.87008 22.6721 6.75581 22.5302 6.67682L12.4469 1.11737C12.311 1.04048 12.1569 1 12 1C11.8431 1 11.689 1.04048 11.5531 1.11737L1.46979 6.67682C1.32788 6.75581 1.20973 6.87008 1.12725 7.00811C1.04477 7.14614 1.00088 7.30305 1 7.46301V18.537C1.00088 18.697 1.04477 18.8539 1.12725 18.9919C1.20973 19.1299 1.32788 19.2442 1.46979 19.3232L11.5531 24.8826C11.689 24.9595 11.8431 25 12 25C12.1569 25 12.311 24.9595 12.4469 24.8826L22.5302 19.3232C22.6721 19.2442 22.7903 19.1299 22.8728 18.9919C22.9552 18.8539 22.9991 18.697 23 18.537V18.537Z" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18 16V10.0853L7 4" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M23 7L12.1043 13L1 7" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 13V25" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="name">
                                        Safe Package
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1Z" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 17H24" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 9H24" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13 1C15.2091 1 17 6.37258 17 13C17 19.6274 15.2091 25 13 25C10.7909 25 9 19.6274 9 13C9 6.37258 10.7909 1 13 1Z" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="name">
                                        Global Tracking
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 6V12H19" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="name">
                                        In Time Delivery
                                    </div>
                                </li>
                            </ul>
                            <ul className="list right">
                                <li className="item">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 8V5" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M26 19.487C24.4792 24.8216 17.4375 26.6835 16.1875 26.9764C16.0645 27.0079 15.9355 27.0079 15.8125 26.9764C14.5625 26.6835 7.52083 24.8216 6 19.487V15.9096C5.99999 15.7334 6.05536 15.5617 6.15824 15.4189C6.26111 15.2762 6.40623 15.1697 6.57292 15.1146L15.7396 12.0393C15.9093 11.9869 16.0907 11.9869 16.2604 12.0393L25.4271 15.1146C25.5938 15.1697 25.7389 15.2762 25.8418 15.4189C25.9446 15.5617 26 15.7334 26 15.9096V19.487Z" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16 20V12" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 14V8.75C9 8.55109 9.0878 8.36032 9.24408 8.21967C9.40036 8.07902 9.61232 8 9.83333 8H23.1667C23.3877 8 23.5996 8.07902 23.7559 8.21967C23.9122 8.36032 24 8.55109 24 8.75V14" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="name">
                                        Ship Everyware
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 10.143H16.8579C16.4412 10.143 16.0416 10.3035 15.747 10.5893C15.4523 10.8751 15.2868 11.2626 15.2868 11.6668V15.4762C15.2868 15.8804 15.4523 16.2679 15.747 16.5537C16.0416 16.8395 16.4412 17 16.8579 17H18.4289C18.8456 17 19.2452 16.8395 19.5398 16.5537C19.8345 16.2679 20 15.8804 20 15.4762V10.143ZM20 10.143C20 8.93592 19.7536 7.74079 19.275 6.62656C18.7964 5.51232 18.095 4.50104 17.2114 3.65106C16.3277 2.80108 15.2793 2.12923 14.1265 1.67427C12.9738 1.21932 11.7396 0.990259 10.4951 1.00032C9.25143 0.991522 8.01827 1.22151 6.86667 1.67703C5.71507 2.13256 4.66778 2.80461 3.78517 3.65446C2.90256 4.50431 2.20207 5.51517 1.72406 6.62878C1.24605 7.74238 0.999967 8.93673 1 10.143V15.4762C1 15.8804 1.16552 16.2679 1.46015 16.5537C1.75478 16.8395 2.15439 17 2.57106 17H4.14212C4.55879 17 4.95839 16.8395 5.25303 16.5537C5.54766 16.2679 5.71318 15.8804 5.71318 15.4762V11.6668C5.71318 11.2626 5.54766 10.8751 5.25303 10.5893C4.95839 10.3035 4.55879 10.143 4.14212 10.143H1" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20 16V18.1429C20 18.9006 19.661 19.6273 19.0575 20.1632C18.454 20.699 17.6356 21 16.7821 21H11" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>                                                
                                    </div>
                                    <div className="name">
                                        24/7 Support
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 23C12.6421 23 16 18.0751 16 12C16 5.92487 12.6421 1 8.5 1C4.35786 1 1 5.92487 1 12C1 18.0751 4.35786 23 8.5 23Z" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 1H14.5385C18.1038 1 21 5.92708 21 12C21 18.0729 18.1038 23 14.5385 23H9" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15 5L18 5" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16 12H21" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14 20H19" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="name">
                                        Transparant Pricing
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Team quantity='3' className="elem style"/>
        <section className="contacts-partner">
            <div className="container">
                <div className="contact-form">
                    <div className="content-wrap">
                        <div className="content">
                            <div className="pattern dark">
                                <span>Contact</span>
                            </div>
                            <h2 className="title">Get in touch with us</h2>
                            <p className="text">
                                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
                            </p>
                        </div>
                        <div className="info-contact sect-cont">
                            <div className="info-iteam">
                                <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1309 22.5C18.206 22.5 23.1309 17.5751 23.1309 11.5C23.1309 5.42487 18.206 0.5 12.1309 0.5C6.05573 0.5 1.13086 5.42487 1.13086 11.5C1.13086 17.5751 6.05573 22.5 12.1309 22.5Z" stroke="#F6B426"/>
                                        <path d="M12.1309 2.5V11.7058L17.1309 15.5" stroke="#F6B426"/>
                                    </svg>
                                </div>
                                <div className="info">
                                    <span>Mon - Sat 9.00 - 18.00</span>
                                    <span>Sunday Closed</span>
                                </div>
                            </div>
                            <div className="info-iteam">
                                <div className="icon">
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.1268 0.5H2.13488C1.58037 0.5 1.13086 0.875516 1.13086 1.33874V14.6613C1.13086 15.1245 1.58037 15.5 2.13488 15.5H20.1268C20.6813 15.5 21.1309 15.1245 21.1309 14.6613V1.33874C21.1309 0.875516 20.6813 0.5 20.1268 0.5Z" stroke="#F6B426"/>
                                        <path d="M1.13086 0.5L11.5556 7.5L21.1309 0.729404" stroke="#F6B426"/>
                                    </svg>
                                </div>
                                <div className="info">
                                    <span>Email</span>
                                    <a href="mailto:contact@logistics.com">contact@logistics.com</a>
                                </div>
                            </div>
                            <div className="info-iteam">
                                <div className="icon" >
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.10491 1.14082C1.97031 1.14492 1.83795 1.17427 1.71567 1.22715C1.59339 1.28003 1.48368 1.35536 1.39303 1.44867C1.30239 1.54199 1.23264 1.65139 1.18794 1.77041C1.14324 1.88943 1.12448 2.01564 1.13277 2.14157C1.26726 4.30147 1.90126 9.57161 4.93681 12.8583C8.57178 16.8181 13.3057 18.1824 18.1626 17.9808C18.4229 17.9662 18.6676 17.8596 18.8474 17.6826C19.0271 17.5055 19.1284 17.2712 19.1309 17.0268V13.5674C19.1278 13.2446 19.0091 12.9322 18.7938 12.6802C18.5785 12.4282 18.2791 12.2513 17.9435 12.1779L15.5113 11.6739C15.2104 11.6138 14.8973 11.6397 14.6123 11.7481C14.3273 11.8566 14.0837 12.0427 13.9128 12.2823L13.3749 13.0454C13.3255 13.1153 13.2516 13.1668 13.1661 13.1911C13.0805 13.2154 12.9885 13.211 12.9061 13.1786C11.6688 12.6783 6.73892 10.5184 6.19714 6.87534C6.18652 6.80498 6.19837 6.73326 6.23119 6.6692C6.26402 6.60514 6.31634 6.55161 6.38157 6.51536L7.35756 5.95739C7.62526 5.80196 7.83553 5.57324 7.95992 5.30218C8.08431 5.03112 8.11682 4.7308 8.05304 4.44186L7.51894 2.12358C7.44086 1.79875 7.24504 1.50932 6.9648 1.30454C6.68457 1.09976 6.33725 0.992295 5.98196 1.00043L2.10491 1.14082Z" stroke="#F6B426"/>
                                    </svg>
                                </div>
                                <div className="info">
                                    <span>Call Us </span>
                                    <a href="tel:(00)-112-365-489">(00) 112 365 489</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormBook/>
                </div>
                <Partners/>
            </div>
        </section>
        <NewsList qty="3">
            <div className="button">
                <Link to="news" className="btn">
                    More News
                </Link>
            </div>
        </NewsList>
        <div className="backg imgFooter"></div>
    </>
}