export default function TeamItem(props){
    return(
        <li className="user">
            <div className="img-user">
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className="name-prof">
                <span className="name">{props.name}</span>
                <span className="prof">{props.prof}</span>
                <div className="soc">
                    {props.children}
                </div>
            </div>
        </li>
    )
}