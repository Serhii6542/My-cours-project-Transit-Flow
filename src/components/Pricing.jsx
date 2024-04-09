import { Link } from 'react-router-dom'
import '../assets/scss/_price.scss'
import { useState, useEffect } from 'react'

export default function Pricing(){
    const [pricing, setPricing] = useState([])

    const fetchPricing = async () => {
        const resp = await fetch('data/price.json')
        const json = await resp.json()
        setPricing(json)
    }

    useEffect(()=>{
        fetchPricing()

    }, [])
    return (
        <section className="prising">
            <div className="container">
                <div className="top">
                    <div className="pattern">
                        <span>Pricing</span>
                    </div>
                    <h2 className="title">Our Best Pricing</h2>
                </div>
                <div className="bottom">
                    {pricing.map((item, index)=>{
                        return (
                            <div className={`wrap-price ${item.colorPrice}`} key={index}>
                                <div className="top-price">
                                    <div className="item-pricing">
                                        <div className="top-pricing">
                                            <h3 className="title-pricing">
                                                {item.titlePrice}
                                            </h3>
                                            <div className="price-mounth">
                                                <span className="price">{item.price}</span>
                                                <span className="pref">{item.pref}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="middle-price">
                                    <ul className={`features-list ${item.colorPrice}`}>
                                        {item.featuresList.map((listItem, index)=>{
                                            return (
                                                <li key={index}>{listItem.itemList}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="bottom-btn">
                                    <Link to="../contact" className={`btn ${item.colorBtn}`}>{item.btnName}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}