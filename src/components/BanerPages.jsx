export default function BanerPages(props){
    return (
        <div className={`baner-pages ` + props.className}>
            {props.children}
        </div>
    )
}