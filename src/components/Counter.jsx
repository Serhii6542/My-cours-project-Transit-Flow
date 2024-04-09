import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Counter(props){
    const [counter, setCounter] = useState([])
    const fetchCounter = async () => {
        const resp = await fetch('data/counter.json')
        const json = await resp.json()
        setCounter(json)
    }

    useEffect(()=>{
        fetchCounter()

    }, [])
    return (
        <div className={props.className ? `count-wrap ${props.className}` : 'count-wrap'}>
            <div className="count">
                {counter.map((item, index)=>{
                    return (
                        <div className={`item-counter ${item.nameClass}`} key={index}>
                            <CountUp className="number" end={item.end} suffix={item.suffix} separator={item.separator} duration={item.duration}/>
                            <span className="name-caunter">{item.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}