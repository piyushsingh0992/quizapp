import React from 'react';
import "./hero.css";
import heroImage from "../../utils/images/hero.jpg";
import Button from "../buttton/button";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Test your Knowledge on yout favourite Character</h1>
                <Button text="Try Now" size="hero-btn" />
            </div>
            <img src={heroImage} className="hero-img" />



        </div>
    );
};

export default Hero;