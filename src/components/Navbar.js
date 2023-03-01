import './NavbarStyles.css';
import {Link} from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'; 
import {useState,useEffect} from 'react';
function Navbar (){


    const [clicked,setClicked] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    useEffect(()=>{
        // console.log("in navbar useeffect")
        window.addEventListener("scroll",changeColor)
        return () =>{
            // console.log("removed");
            window.removeEventListener("scroll",changeColor)
        }
    },[])
    // window.addEventListener("scroll",changeColor);
    const handleClick=()=>{
      setClicked((current)=>{
          return !current
      })  
    }

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
            <h1>Portfolio</h1>
            </Link>
            <ul className={clicked ? "nav-menu active": "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {clicked ?
            <FaTimes size={20} style={{color:'#fff'}}/>
                :<FaBars size={20} style={{color:'#fff'}}/>
}
            </div>
        </div>
    )
}

export default Navbar;