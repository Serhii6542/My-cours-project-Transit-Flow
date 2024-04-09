import BanerPages from "../components/BanerPages";
import { Link } from 'react-router-dom'
import '../assets/scss/pageDet.scss'
import { useParams  } from 'react-router-dom'
import { decode } from 'js-base64';
import { useEffect, useState, useRef } from "react";
import md5 from "js-md5";
import { FormatDate } from "../helpers";



export default function NewDet(props){
    const params =useParams()
    const [data, setData] = useState(null)
    const isFetch = useRef(false)
    const [isLoader, setLoader] = useState(false)
 

    async function fetchNewDet(){
        setLoader(true)
        const storadKey = md5(params.slug)
        const storagNew = localStorage.getItem(storadKey)
        if(storagNew){
            setData(JSON.parse(storagNew))

            setTimeout(()=>{
                setLoader(false)
            }, 2000)
            return
        }
        const url = encodeURIComponent(decode(params.slug))
        const resp = await fetch(`${import.meta.env.VITE_WN_API_URL}extract-news?analyze=true&url=${url}&api-key=${import.meta.env.VITE_WN_API_KEY}`)
        const json = await resp.json()
        localStorage.setItem(storadKey, JSON.stringify(json))
        setData(json)
        setTimeout(()=>{
            setLoader(false)
        }, 2000)
    }

    useEffect(()=>{
        if(!isFetch.current){
            isFetch.current = true

            if(isLoader)
            return

            fetchNewDet()
        }
        
    }, [])

    return <> 
        {isLoader && <div className="loader"><span></span></div>}
        <BanerPages className="elem NewsDet">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>New</span>
                    </div>
                    <div className="title">
                        <h1>{data?.title}</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        {data && (
            <section className="section-detail">
                <div className="container">
                    <div className="img-wrap">
                        <img className="img" src={data.image} alt="news" />
                    </div>
                    <div className="title-back-link">
                        <div className="title-wrap">
                            <h3 className="title">{data.title}</h3>
                        </div>
                        <Link className='link-back' to="/news">Go back</Link>
                    </div>
                    <div className="text-det">
                        <p>
                            {data.text}
                        </p>
                    </div>
                    <div className="date">
                        <span>
                            {'Publish date: ' + FormatDate(data.publish_date)}
                        </span>
                    </div>
                </div>
            </section>
        )}
        
    </>
}