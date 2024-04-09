import { Link } from "react-router-dom"


export default function ItemService(props){
    return (
        <div className="item-ser">
            <div className="img">
                <svg fill="#fff" width={72} height={62}>
                    <use xlinkHref={props.img} />
                </svg>
            </div>
            <div className="info">
                <h3 className="title-ser"><Link to={`/service/${props.slug}`}>{props.title}</Link></h3>
                <p className="first">{props.desc}</p>
            </div>
        </div>
    )
}

