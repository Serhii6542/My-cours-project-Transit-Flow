import BanerPages from "../components/BanerPages";
import NewsList from "../components/NewsList";

export default function NewsPage(){
    return <>
        <BanerPages className="elem News">
            <div className="container">
                <div className="baner-text">
                    <div className="pattern baner-top">
                        <span>News</span>
                    </div>
                    <div className="title">
                        <h1>Latest News</h1>
                    </div>
                </div>
            </div>
        </BanerPages>
        <NewsList qty='5' className='page-news'/>
    </>
}