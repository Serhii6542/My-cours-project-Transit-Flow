import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function MyFooter(){
    const [email, setEmail] = useState('')

    const [err, setErr] = useState({
        isValid: true
    })

    function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const submitEmail = (e) => {
        e.preventDefault()
        let ValidEmail = true;
        if(email === ''){
            setErr({ isValid: false})
            ValidEmail = false
            toast.error("Enter your email")
            return
        }

        if(!isValidEmail(email)){
            setErr({ isValid: false})
            ValidEmail = false
            toast.error("Incorrect email address")
        } else{
            setErr({isValid: true})
        }


        if(ValidEmail){
            const message = `<b>Email: </b>${email}`;
            const url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;
            fetch(url,{
                method: 'post'
            })
                .then(resp=>resp.json())
                .then(resp=>{
                    if(resp.ok){
                        setEmail('')
                        toast.success('Your message successfully sent.')
                    } else{
                        toast.error("Some error occured.")
                    }
                })
        }
    }

    const focusHandler = (target) =>{
        if(!err.isValid){
            setErr({isValid: true, message:""})
        }
    }

    return <footer className="footer elem">
        <div className="top">
            <div className="container">
                <div className="logo-footer">
                    <Link to="/">
                        <img src="assets/img/Logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="top-info">
                    <ul className="wrap-info">
                        <li>Pages</li>
                        <li>Subscribe</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="midle">
                <div className="content">
                    <div className="text">
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className="icon-contacts">
                        <div className="info-contact footer">
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
                <div className="wrap-info-midle">
                    <div className="wrap-pages">
                        <ul className="pages">
                            <li className="item-page"><Link to="about">About Us</Link></li>
                            <li className="item-page"><Link to="team">Our Team</Link></li>
                            <li className="item-page"><Link to="project">Our Project</Link></li>
                            <li className="item-page"><Link to="pricing">Pricing</Link></li>
                            <li className="item-page"><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="wrap-subscribe">
                        <form onSubmit={submitEmail} className="form">
                            <div className="wrap-email">
                                <input type="text" className={`email ${!err.isValid ? 'err' : ''}`} placeholder="Email here*" name="email" value={email} onFocus={(e)=>focusHandler(e.target)} onChange={(e)=>setEmail(e.target.value.trim())}/>
                            </div>
                            <div className="btn-icon">
                                <div className="wrap-btn">
                                    <button type="submit" className="btn light">Send Now</button>
                                </div>
                                <div className="wrap-icon">
                                    <div className="icons-team footer">
                                        <div className="icon-soc">
                                            <Link to="https://www.instagram.com/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M14.0759 2.03236C15.173 2.03551 16.2242 2.45628 17 3.20276C17.7757 3.94925 18.213 4.9608 18.2162 6.01648V13.9839C18.213 15.0396 17.7757 16.0511 17 16.7976C16.2242 17.5441 15.173 17.9649 14.0759 17.968H5.79618C4.69911 17.9649 3.6479 17.5441 2.87215 16.7976C2.0964 16.0511 1.65914 15.0396 1.65586 13.9839V6.01648C1.65914 4.9608 2.0964 3.94925 2.87215 3.20276C3.6479 2.45628 4.69911 2.03551 5.79618 2.03236H14.0759ZM14.0759 0.438965H5.79618C2.60821 0.438965 0 2.94878 0 6.01648V13.9839C0 17.0516 2.60821 19.5614 5.79618 19.5614H14.0759C17.2639 19.5614 19.8721 17.0516 19.8721 13.9839V6.01648C19.8721 2.94878 17.2639 0.438965 14.0759 0.438965Z" />
                                                    <path d="M15.3177 6.01677C15.072 6.01677 14.8319 5.94668 14.6277 5.81535C14.4234 5.68403 14.2642 5.49737 14.1702 5.27898C14.0762 5.0606 14.0516 4.82029 14.0995 4.58846C14.1475 4.35662 14.2658 4.14366 14.4395 3.97652C14.6131 3.80937 14.8345 3.69555 15.0754 3.64943C15.3163 3.60331 15.566 3.62698 15.793 3.71744C16.0199 3.8079 16.2139 3.96108 16.3504 4.15763C16.4868 4.35417 16.5597 4.58524 16.5597 4.82162C16.56 4.97866 16.5282 5.13423 16.4659 5.27938C16.4036 5.42454 16.3121 5.55642 16.1967 5.66747C16.0813 5.77852 15.9442 5.86654 15.7934 5.92648C15.6425 5.98642 15.4809 6.01711 15.3177 6.01677ZM9.9358 6.81325C10.5909 6.81325 11.2313 7.00018 11.7759 7.3504C12.3206 7.70061 12.7452 8.19839 12.9958 8.78077C13.2465 9.36316 13.3121 10.004 13.1843 10.6223C13.0565 11.2405 12.7411 11.8084 12.2779 12.2542C11.8146 12.6999 11.2245 13.0035 10.582 13.1264C9.93948 13.2494 9.27351 13.1863 8.66829 12.9451C8.06307 12.7038 7.54578 12.2953 7.18184 11.7712C6.81789 11.2471 6.62364 10.6308 6.62364 10.0005C6.62458 9.15544 6.97384 8.34529 7.59478 7.74777C8.21573 7.15024 9.05765 6.81416 9.9358 6.81325ZM9.9358 5.21986C8.95322 5.21986 7.9927 5.50024 7.17571 6.02554C6.35873 6.55084 5.72196 7.29747 5.34594 8.17101C4.96993 9.04455 4.87154 10.0058 5.06323 10.9331C5.25493 11.8605 5.72809 12.7123 6.42288 13.3809C7.11767 14.0494 8.00289 14.5048 8.96659 14.6892C9.93029 14.8737 10.9292 14.779 11.837 14.4172C12.7448 14.0553 13.5207 13.4426 14.0666 12.6564C14.6125 11.8703 14.9038 10.946 14.9038 10.0005C14.9038 8.73257 14.3804 7.51661 13.4487 6.62007C12.517 5.72353 11.2534 5.21986 9.9358 5.21986Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="icon-soc">
                                            <Link to="https://www.facebook.com/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.4065 10.0578C21.4065 4.74704 16.8092 0.440918 11.1393 0.440918C5.4694 0.440918 0.87207 4.74704 0.87207 10.0578C0.87207 14.8576 4.62602 18.8362 9.53503 19.5583V12.8385H6.92743V10.0578H9.53503V7.93907C9.53503 5.52927 11.0682 4.19708 13.4132 4.19708C14.5366 4.19708 15.7119 4.38512 15.7119 4.38512V6.75199H14.4165C13.1418 6.75199 12.7431 7.49301 12.7431 8.25463V10.0578H15.5904L15.1357 12.8385H12.7435V19.5592C17.6525 18.8375 21.4065 14.8589 21.4065 10.0578Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="icon-soc">
                                            <Link to="https://twitter.com/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="icon-soc">
                                            <Link to="https://www.linkedin.com/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M18.4415 0.291016H2.2354C1.34987 0.291016 0.576172 0.928181 0.576172 1.80331V18.0454C0.576172 18.9253 1.34987 19.7094 2.2354 19.7094H18.4367C19.327 19.7094 19.9945 18.9201 19.9945 18.0454V1.80331C19.9997 0.928181 19.327 0.291016 18.4415 0.291016ZM6.59543 16.4772H3.81358V7.82777H6.59543V16.4772ZM5.30073 6.51269H5.28079C4.39049 6.51269 3.81401 5.84996 3.81401 5.02034C3.81401 4.17555 4.40566 3.52842 5.3159 3.52842C6.22613 3.52842 6.78311 4.17079 6.80305 5.02034C6.80262 5.84996 6.22613 6.51269 5.30073 6.51269ZM16.7623 16.4772H13.9805V11.7478C13.9805 10.6148 13.5756 9.84069 12.5692 9.84069C11.8002 9.84069 11.3451 10.3608 11.1427 10.8675C11.0669 11.0496 11.0465 11.2975 11.0465 11.5506V16.4772H8.26463V7.82777H11.0465V9.03145C11.4513 8.45496 12.0837 7.62535 13.5553 7.62535C15.3814 7.62535 16.7628 8.82903 16.7628 11.4241L16.7623 16.4772Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
            </div>
        </div>
    </footer>
}