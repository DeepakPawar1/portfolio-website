import "./FooterStyles.css";
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaLinkedin} from 'react-icons/fa';
function Footer() {

    return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p> Pargaon Khandala,Satara</p>
                        <p>Maharashtra, India</p>
                    </div>
                </div>
                <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    +91 8180935220</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    adeepakpawar@gmail.com</h4>
                
                </div>
            </div>
            <div className="right">
                <h4>
                    About me
                </h4>
                <p>
                    This is me Deepak Pawar. Software developer by profession.I enjoy developing new websites and handling design challenges.
                </p>
                <div className="social">
                <FaFacebook size={30} 
                style={{color: "#fff", 
                marginRight: "1rem"}}
                />
                <FaLinkedin size={30} 
                style={{color: "#fff", 
                marginRight: "1rem"}}
                />
                </div>
            </div>
        </div>
    </div>
            )
}

export default Footer;