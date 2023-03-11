import React from 'react';
import './home.scss';
import LogoHome from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container home-page" >
            <div className="text-zone">
                <h1>Hi, <br/> I'm 
                <img src={LogoHome} alt="developer"/>
                am
                <br/>
                web developer
                </h1>
                <h2>
                    Frontend Dev / Backend Dev / Mobile App Dev
                </h2>
                <Link to='/contact' className="flat-button" >Get in Touch</Link>
            </div>
        </div>
    )
}

export default Home
