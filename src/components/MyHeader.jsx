import { Link } from "react-router-dom";

export default function MyHeader(){
    return <div className="static_header">
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <img src="assets/img/Logo.svg" alt="logo"/>
                </Link>
            </div>
            <div className="info-contact">
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
                        <Link to="mailto:contact@logistics.com">contact@logistics.com</Link>
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
                        <Link to="tel:(00)-112-365-489">(00) 112 365 489</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}