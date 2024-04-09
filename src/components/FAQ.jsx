import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../assets/scss/FAQ.scss';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useEffect, useState } from "react";


export default function FAQ(){
    const [activeIndex, setActiveIndex] = useState(null);
    const [questionItem, setQuestion] = useState([])

    const handleClick = (index) => {
        if (index === activeIndex) {
          setActiveIndex(null);
        } else {
          setActiveIndex(index);
        }
    };

    const fetchQuestion = async () => {
        const resp = await fetch('data/acordion.json')
        const json = await resp.json()
        setQuestion(json)
    }

    useEffect(()=>{
        fetchQuestion()

    }, [])

    return (
        <section className="question">
            <div className="container">
                <div className="question-wrap">
                    <div className="pattern">
                        <span>FAQ</span>
                    </div>
                    <h2 className="title">
                        Frequently Asked Questions
                    </h2>
                    <div className="wrap-acordion">
                        <Accordion className="acordion" allowZeroExpanded="true">
                            {questionItem.map((item, index)=>{
                                return (
                                    <AccordionItem className="acord" key={item.id}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="acord-btn">
                                            <div className="wrap-header-acotdion">
                                                <h4 className="title-acordion" key={index} onClick={()=>handleClick(index)}>{item.questions}</h4>
                                                <span className={index === activeIndex ? `icon active` : `icon`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                                                        <path d="M1 1L9 9L1 17"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="text-acord">
                                            <p>
                                                {item.answer}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
                <div className="address">
                    <div className="top">
                        <div className="pattern ques">
                            <span>Let’s Talk</span>
                        </div>
                        <h3 className="help-title">
                            You need any help? get free consultation
                        </h3>
                        <div className="tel">
                            <div className="icon-tel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                    <path d="M1.97405 1.14082C1.83945 1.14492 1.70709 1.17427 1.58481 1.22715C1.46253 1.28003 1.35282 1.35536 1.26217 1.44867C1.17153 1.54199 1.10179 1.65139 1.05708 1.77041C1.01238 1.88943 0.993616 2.01564 1.00191 2.14157C1.1364 4.30147 1.7704 9.57161 4.80595 12.8583C8.44092 16.8181 13.1748 18.1824 18.0317 17.9808C18.292 17.9662 18.5368 17.8596 18.7165 17.6826C18.8962 17.5055 18.9975 17.2712 19 17.0268V13.5674C18.997 13.2446 18.8783 12.9322 18.663 12.6802C18.4476 12.4282 18.1482 12.2513 17.8127 12.1779L15.3804 11.6739C15.0796 11.6138 14.7664 11.6397 14.4815 11.7481C14.1965 11.8566 13.9528 12.0427 13.7819 12.2823L13.244 13.0454C13.1946 13.1153 13.1208 13.1668 13.0352 13.1911C12.9496 13.2154 12.8577 13.211 12.7752 13.1786C11.5379 12.6783 6.60806 10.5184 6.06628 6.87534C6.05566 6.80498 6.06751 6.73326 6.10033 6.6692C6.13316 6.60514 6.18548 6.55161 6.25071 6.51536L7.2267 5.95739C7.4944 5.80196 7.70467 5.57324 7.82906 5.30218C7.95345 5.03112 7.98596 4.7308 7.92218 4.44186L7.38808 2.12358C7.31 1.79875 7.11418 1.50932 6.83395 1.30454C6.55371 1.09976 6.20639 0.992295 5.8511 1.00043L1.97405 1.14082Z" stroke="white"/>
                                </svg>
                            </div>
                            <div className="phone">
                                <span className="numb-ques">Have Any Questions</span>
                                <Link className="link" to="tel:(00)-112-365-489">(00) 112 365 489</Link>
                            </div>
                        </div>
                        <div className="wrap-btn">
                            <Link to="../contact" className="btn light">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}