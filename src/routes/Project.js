import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
function Project(){


    return (
    <div>
        <Navbar/>
        <HeroImg2 heading="Projects." text="Work that I have done."/>
        <Work/>
        <Footer/>
    </div>
    )
}

export default Project;