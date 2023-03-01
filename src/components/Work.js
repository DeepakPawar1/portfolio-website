import './WorkCardStyles.css';
import ProjImg from '../assets/deliveryserv.png';
import { NavLink } from 'react-router-dom';
import WorkCardData from './WorkCardData';
import WorkCard from './WorkCard';

function Work(){
        console.log(WorkCardData,"^^^^^^")
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
               <WorkCard data={WorkCardData}/>
               
                {/* <div className="project-card">
                <img src={ProjImg} alt=""/>

                <h2 className="project-title">
                    Project Title
                </h2>
                <div className="pro-details">
                    <p> This is text</p>
                    <div className="pro-btns"> 
                    <NavLink to="abc.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
                </div> */}
            </div>
        </div>
    )

}
export default Work;