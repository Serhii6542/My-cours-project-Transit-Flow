import { useEffect, useState } from "react"

export default function Partners(){
    const [partner, setPartner] = useState([])

    const fetchPartner = async () => {
        const resp = await fetch('data/partner.json')
        const json = await resp.json()
        setPartner(json)
    }

    useEffect(()=>{
        fetchPartner()

    }, [])
    return (
        <div className="partners">
            <ul className="partners-list">
                {partner.map((item, index)=>{
                    return (
                        <li className="partner" key={index}>
                            <img className="bg-logo" src={item.bgLogo} alt="background"/>
                            <div className="logo-partner">
                                <img src={item.logoPartner} alt="partner"/>
                            </div>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}