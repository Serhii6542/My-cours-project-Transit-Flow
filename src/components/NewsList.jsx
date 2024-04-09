import { useState, useEffect, useRef } from "react"
import NewItem from "./NewItem"

export default function NewsList(props){
    const [newItem, setItemNew] = useState([])
    const isFetch = useRef(false)
    const [isLoader, setLoader] = useState(false)


    const fetchNews= async () =>{
        const storagNews = localStorage.getItem('newsList')
        setLoader(true)
        if(storagNews){
            setItemNew(JSON.parse(storagNews))
            setTimeout(()=>{
                setLoader(false)
            }, 2000)
            
            return
        }
        const resp = await fetch(`${import.meta.env.VITE_WN_API_URL}search-news?text=transporting&api-key=${import.meta.env.VITE_WN_API_KEY}&language=en`)
        const json = await resp.json()
        localStorage.setItem('newsList', JSON.stringify(json.news))
        setItemNew(json.news)
        setTimeout(()=>{
            setLoader(false)
        }, 2000)
    }

    useEffect(()=>{
        if(!isFetch.current){
            isFetch.current = true

            if(isLoader)
            return

            fetchNews()
        }
    }, [])
    return <>
        {isLoader && <div className="loader"><span></span></div>}
        <section className={props.className ? `our-news ${props.className}` : "our-news"}>
            <div className="container">
                <div className="top-content">
                    <div className="pattern news">
                        <span>News</span>
                    </div>
                    <h2 className="title-news">Latest News</h2>
                </div>
                <div className="wrap-list-news-our">
                    <ul className="list">
                        {newItem.map((item, index)=>{
                            if(index<props.qty){
                                return (
                                    <NewItem key={index} item={item}/>
                                )
                            }
                        })}
                    </ul>
                </div>
                {props.children}
                
            </div>
        </section>
    
    </>
}