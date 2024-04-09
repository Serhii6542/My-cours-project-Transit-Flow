import BanerPages from "../components/BanerPages";
import FormBook from "../components/FormBook";
import Partners from "../components/Partners";
import { Link } from "react-router-dom";
import '../assets/scss/contacts-page.scss';

export default function ContactsPage(){
    return <>
        <BanerPages className="elem Cont">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>Contact</span>
                    </div>
                    <div className="title">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <section className="contact-section">
            <div className="container contact-section">
                <div className="text-wrap">
                    <div className="pattern dark">
                        <span>Contact</span>
                    </div>
                    <div className="title">
                        <h2>
                            Get in touch with us
                        </h2>
                    </div>
                    <p className="text">
                        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
                    </p>
                </div>
                <div className="icon-info">
                    <div className="info-item">
                        <div className="icon">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.496 1H1.50402C0.949513 1 0.5 1.37552 0.5 1.83874V15.1613C0.5 15.6245 0.949513 16 1.50402 16H19.496C20.0505 16 20.5 15.6245 20.5 15.1613V1.83874C20.5 1.37552 20.0505 1 19.496 1Z" stroke="white"/>
                                <path d="M0.5 1L10.9247 8L20.5 1.2294" stroke="white"/>
                            </svg>
                        </div>
                        <div className="info">
                            <span>Mon - Sat 9.00 - 18.00</span>
                            <span>Sunday Closed</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.47405 1.14082C1.33945 1.14492 1.20709 1.17427 1.08481 1.22715C0.96253 1.28003 0.85282 1.35536 0.762173 1.44867C0.671526 1.54199 0.601785 1.65139 0.557081 1.77041C0.512376 1.88943 0.493616 2.01564 0.501912 2.14157C0.636398 4.30147 1.2704 9.57161 4.30595 12.8583C7.94092 16.8181 12.6748 18.1824 17.5317 17.9808C17.792 17.9662 18.0368 17.8596 18.2165 17.6826C18.3962 17.5055 18.4975 17.2712 18.5 17.0268V13.5674C18.497 13.2446 18.3783 12.9322 18.163 12.6802C17.9476 12.4282 17.6482 12.2513 17.3127 12.1779L14.8804 11.6739C14.5796 11.6138 14.2664 11.6397 13.9815 11.7481C13.6965 11.8566 13.4528 12.0427 13.2819 12.2823L12.744 13.0454C12.6946 13.1153 12.6208 13.1668 12.5352 13.1911C12.4496 13.2154 12.3577 13.211 12.2752 13.1786C11.0379 12.6783 6.10806 10.5184 5.56628 6.87534C5.55566 6.80498 5.56751 6.73326 5.60033 6.6692C5.63316 6.60514 5.68548 6.55161 5.75071 6.51536L6.7267 5.95739C6.9944 5.80196 7.20467 5.57324 7.32906 5.30218C7.45345 5.03112 7.48596 4.7308 7.42218 4.44186L6.88808 2.12358C6.81 1.79875 6.61418 1.50932 6.33395 1.30454C6.05371 1.09976 5.70639 0.992295 5.3511 1.00043L1.47405 1.14082Z" stroke="white"/>
                            </svg>
                        </div>
                        <div className="info">
                            <span>Email</span>
                            <Link to="mailto:contact@logistics.com">contact@logistics.com</Link>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon" >
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 23C17.5751 23 22.5 18.0751 22.5 12C22.5 5.92487 17.5751 1 11.5 1C5.42487 1 0.5 5.92487 0.5 12C0.5 18.0751 5.42487 23 11.5 23Z" stroke="white"/>
                                <path d="M11.5 3V12.2058L16.5 16" stroke="white"/>
                            </svg>
                        </div>
                        <div className="info">
                            <span>Call Us </span>
                            <Link to="tel:(00)-112-365-489">(00) 112 365 489</Link>
                        </div>
                    </div>
                </div>
                <FormBook className="contacts"/>
            </div>
        </section>
        <section className="partner-team">
            <div className="container">
                <Partners />
            </div>
        </section>
    </>
}