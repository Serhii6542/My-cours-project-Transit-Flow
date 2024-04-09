import BanerPages from "../components/BanerPages";
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import '../assets/scss/gallery.scss'
import Counter from "../components/Counter";
import { useState, useEffect } from "react";


export default function ProjectPage(){
    const [gallery, setGallery] = useState([])

    const fetchGallery = async () => {
        const resp = await fetch('data/gallery.json')
        const json = await resp.json()
        setGallery(json)
    }

    useEffect(()=>{
        fetchGallery()

    }, [])
    
    return <>
        <BanerPages className="elem Proj">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>Gallery</span>
                    </div>
                    <div className="title">
                        <h1>Our Project Gallery</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <section className="gallery">
            <div className="container">
                <LightGallery id="wrap-gallery" speed={500} plugins={[lgThumbnail, lgZoom]}>
                    {gallery.map((item, index)=>{
                        return (
                            <a href={item.href} className="itemGallery" key={index}>
                                <img alt="project" src={item.href} />
                            </a>
                        )
                    })}
                </LightGallery>
            </div>
        </section>
        <Counter className="count-gallery"/>
    </>
}