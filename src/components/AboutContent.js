import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import frontend from "../assets/react.png"
import ProjImg from '../assets/deliveryserv.png';
import backend  from "../assets/backend.png"
import IntroImg from "../assets/plioe.jpg";

function AboutContent () {

    return ( 
    <div className="about">
        <div className="left">
        <h1> Who am I?</h1> 
        <p>
            I am a front end developer . I create responsive websites for my clients.
        </p>
        <Link to="/contact">
        <button className="btn"> Contact</button>
        </Link>
        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={frontend} className="img" alt=""/>
            </div>
            <div className="img-stack bottom">
                <img src={backend} className="img" alt=""/>
            </div>
        </div>
        </div>
    </div>
        )
}
export default AboutContent;