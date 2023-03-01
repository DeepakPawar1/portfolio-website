import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
function About(){


    return (<div>
        <Navbar/>
        <HeroImg2 heading="ABOUT" text="I am a Computer Engineer graduated in 2018. I have had a chance to work with multiple firms since then. I have been extensively working on Backend , Frontend and DevOps as per the requirements of the project.

I have worked as Python Developer for most of my working experience and I have levelled up as Frontend developer after working on series of personal projects, this portfolio website being one of them. "/>
        <AboutContent/>
        <Footer/>
        
    </div>)
}

export default About;