import './WorkCardStyles.css';
import ProjImg from '../assets/deliveryserv.png';
import { NavLink } from 'react-router-dom';


function WorkCard({data}){
        const renderData = data.map((work,index)=>{
            return (
                <div className="project-card" key={index}>
                <img src={work.img} alt=""/>

                <h2 className="project-title">
                    {work.title}
                </h2>
                <div className="pro-details">
                    <p> {work.text}</p>
                    <div className="pro-btns"> 
                    <NavLink to={work.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
                </div>
            )
        })
        console.log(renderData);
    return (
        renderData
    )
}
export default WorkCard;