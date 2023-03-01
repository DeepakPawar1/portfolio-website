import "./HeroImgStyles.css";
import IntroImg from "../assets/plioe.jpg";
import { Link } from "react-router-dom";
function HeroImg(){

    return(<div className="hero">
                 <div className="mask">
                    <img className="intro-img" src={IntroImg} alt=""/>
                </div>
            <div className="content">
                <p>HI, I,M A WEB DEVELOPER.</p>
                <h1>Software Engineer</h1>
                <div>
                    <Link to="/project" className="btn"> </Link>
                </div>
            </div>
       
    </div>)
}

export default HeroImg;