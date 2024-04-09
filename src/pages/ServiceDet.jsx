import { Link } from 'react-router-dom'
import '../assets/scss/pageDet.scss'
import BanerPages from '../components/BanerPages'
import { useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ServiceDet(props){
    const params = useParams()
    const [service, setService] = useState([])

    const fetchService = async () => {
        const resp = await fetch(`data/${params.slug}.json`)
        const json = await resp.json()
        setService(json)
    }

    useEffect(()=>{
        fetchService()

    }, [])
    return <>
        <BanerPages className="elem SerDet">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>Service Single</span>
                    </div>
                    <div className="title">
                        <h1>Service Details</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <section className="section-detail">
            <div className="container">
                <div className="img-wrap">
                    <img className="img" src={service.img} alt="service" />
                </div>
                <div className="title-back-link">
                    <div className="title-wrap">
                        <div className="icon-det">
                        <svg fill="#fff" width={72} height={62}>
                            <use xlinkHref={service.imgIcon} />
                        </svg>
                        </div>
                        <h3 className="title">{service.title}</h3>
                    </div>
                    <Link className='link-back' to="/service">Go back</Link>
                </div>
                <div className="text-det">
                    <p>
                        {service.textP1}
                    </p>
                    <p>
                        {service.textP2}
                    </p>
                </div>
            </div>
        </section>
    
    
    
    </>
}