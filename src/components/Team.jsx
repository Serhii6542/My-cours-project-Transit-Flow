import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import TeamItem from "./TeamItem"


export default function Team(props){
    const [team, setTeam] = useState([])

    const fetchTeam = async () => {
        const resp = await fetch('data/team.json')
        const json = await resp.json()
        setTeam(json)
    }

    useEffect(()=>{
        fetchTeam()

    }, [])
    return (
        <section className={props.className ? `team ${props.className}` : `team`}>
            <div className="container">
                <div className="title">
                    <div className="pattern transport">
                        <span>The Transporters</span>
                    </div>
                    <h2>Meet Expert Team</h2>
                </div>
                <div className="wrap-card">
                    <ul className="list-team">
                        {team.map((item, index)=>{
                            if(index < props.quantity) {
                                return <TeamItem
                                    key={index}
                                    img={item.imgUser}
                                    alt={item.altImg}
                                    name={item.name}
                                    prof={item.prof}
                                >
                                    <ul className="list-soc">
                                        {item.soc.map((itemSoc, index)=>{
                                            return (
                                                <li className="item-soc" key={index}>
                                                    <Link to={itemSoc.linkSoc} target="_blank">
                                                        <svg className="icon-soc-team">
                                                            <use xlinkHref={itemSoc.iconSoc} />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </TeamItem>
                            }
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}