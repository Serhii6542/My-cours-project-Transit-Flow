import { Link } from "react-router-dom";
import '../assets/scss/_err.scss'

export default function NotFound(){
    return<>
        <div className="container err">
            <div className="textErr">
                4<span>0</span>4 
            </div>
            <div className="content-err">
                <div className="wrap-text">
                    <h2 className="title">Oops! Page not found.</h2>
                    <span className="text">Let’s get you to where you need to be.</span>
                </div>
                <div className="link-home">
                    <Link to="/" className="btn link">Back to home</Link>
                </div>
            </div>
        </div>
    </>
}