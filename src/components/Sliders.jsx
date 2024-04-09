import { useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from "react";


export default function Sliders(props){
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    };
    const [slider, setSlider] = useState([])

    const fetchSlider = async () => {
        const resp = await fetch('data/slider.json')
        const json = await resp.json()
        setSlider(json)
    }

    useEffect(()=>{
        fetchSlider()

    }, [])
    return (
        <section className={props.className ? `slider ${props.className}` : `slider`}>
            <div className="container">
                <div className="top">
                    <div className="desc">
                        <div className="pattern testi">
                            <span>Testimonial</span>
                        </div>
                        <div className="title">
                            <h2>
                                What Our Customer Say
                            </h2>
                        </div>
                    </div>
                    <div className="next-prev">
                        <button type="button" className="btn-sl prev" onClick={previous}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 6.46484L1 6.46484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 11.4648L1 6.46484L6 1.46484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button type="button" className="btn-sl next" onClick={next}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6.46484H13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 1.46484L13 6.46484L8 11.4648"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="slider-testimonial">
                    <div className="wrap-sleder">
                        <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                            {slider.map((item)=>{
                                return (
                                    <div className={`slider-item ${item.colorName}`} key={item.id}>
                                        <div className="slider-top">
                                            <div className="user">
                                                <div className="img">
                                                    <img src={item.user_img} alt="user"/>
                                                </div>
                                                <div className="name">
                                                    <span className="name-user">{item.name_user}</span>
                                                    <span className="name-company">{item.name_company}</span>
                                                </div>
                                            </div>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" viewBox="0 0 33 22" fill="none">
                                                    <path d="M13.2687 0.824525C13.7697 0.824525 14.1992 1.00347 14.5571 1.36135C14.8434 1.71924 14.9865 2.14871 14.9865 2.64975C14.9865 3.22237 14.8792 3.79499 14.6644 4.3676L8.97404 19.0767C8.61615 19.7925 8.25827 20.3651 7.90038 20.7946C7.47092 21.2956 6.79093 21.5462 5.86043 21.5462L2.31735 21.5462C1.74473 21.5462 1.31527 21.3314 1.02896 20.902C0.671071 20.4725 0.563705 19.8999 0.70686 19.1841L3.06891 3.93814C3.14049 3.07921 3.4268 2.32765 3.92784 1.68345C4.42888 1.11083 5.18044 0.824524 6.18253 0.824524L13.2687 0.824525ZM30.4472 0.824526C30.9483 0.824526 31.3777 1.00347 31.7356 1.36136C32.0219 1.71924 32.1651 2.14871 32.1651 2.64975C32.1651 3.22237 32.0577 3.79499 31.843 4.3676L26.1526 19.0767C25.7947 19.7925 25.401 20.3651 24.9716 20.7946C24.5421 21.2956 23.8979 21.5462 23.039 21.5462H19.4959C18.9233 21.5462 18.4938 21.3314 18.2075 20.902C17.8496 20.4725 17.7423 19.8999 17.8854 19.1841L20.2475 3.93814C20.319 3.07921 20.6054 2.32765 21.1064 1.68345C21.6074 1.11084 22.3232 0.824525 23.2537 0.824525L30.4472 0.824526Z" fill="#091242"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="slider-middle">
                                            <p className="text">{item.text_sl}</p>
                                        </div>
                                        <div className="slider-bottom">
                                            <ul className="stars">
                                                {item.stars.map((icon, index)=>{
                                                    return (
                                                        <li className="star" key={index}>
                                                            <img src={icon.star} alt="star"/>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}