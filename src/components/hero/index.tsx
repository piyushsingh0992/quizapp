import React from 'react';
import "./style.css";
import heroImage from "../../utils/images/hero.jpg";
import Button from "../buttton";


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Test your Knowledge on yout favourite Character</h1>
                <a href="#quiz">
                    <Button text="Try Now" size="hero-btn" />
                </a>
            </div>
            <img src={heroImage} className="hero-img" />



        </div>
    );
};

export default Hero;