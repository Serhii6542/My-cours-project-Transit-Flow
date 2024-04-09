import { useState, useEffect } from "react"
import ItemService from "./ItemService"

export default function Service(props){
    const [service, setService] = useState([])

    const fetchService = async () => {
        const resp = await fetch('data/service.json')
        const json = await resp.json()
        setService(json)
    }

    useEffect(()=>{
        fetchService()

    }, [])


    return (
        <section className={props.className ? `service ${props.className}` : 'service'}>
            <div className="container">
                <div className="right">
                    <div className="pattern what-we-do">
                        <span>What We Do</span>
                    </div>
                    <div className="title">
                        <h2>Safe & Reliable Cargo Solutions</h2>
                    </div>
                </div>
                <div className="left">
                    <div className="wrap">
                        {service.map((item, index)=>{
                            if(index < props.qty){
                                return (
                                    <ItemService key={index} img={item.img} title={item.title} desc={item.desc} slug={item.slug} />
                                )
                            }
                        })}
                    </div>
                </div>
                {props.children}
            </div>
        </section>
    )
}








