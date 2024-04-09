import { Link } from "react-router-dom"
import { encode } from 'js-base64';
import { addZero } from "../helpers";
export default function NewItem(props){
    const item = props.item
    const d = new Date(item.publish_date) 

    function formatTitle(title){
        return title.replaceAll('&nbsp;', '')
    }

    return <>
        <li className="item-new">
            <Link to={encode(item.url)} className="link-news">
                <div className="img">    
                    <img src={item.image} alt="new" onError={(e)=>{
                        e.target.src="assets/img/no-image.jpg"
                    }}/>
                </div>
            </Link>
            <div className="date-wrap">
                <div className="icon">
                    <img src="assets/img/icon-new.svg" alt="icon" />
                </div>
                <div className="date">
                    <span className="number">{addZero(d.getDate())}</span>
                    <span className="mounth">{addZero(d.getMonth()+1) + ' / month'}</span>
                    <span className="year">{d.getFullYear() + ' year'}</span>
                </div>
            </div>
            <div className="desc">
                <h3 className="title">
                    <Link to={'/news/'+encode(item.url)}>{formatTitle(item.title)}</Link>
                </h3>
                <p className="text">
                    {item.text} 
                </p>
            </div>
        </li>
    
    </>
}