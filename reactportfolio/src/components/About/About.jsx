import React, { useEffect, useState } from 'react'
import {
  faBootstrap,
  faGitAlt,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './about.scss'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function About() {

    const [letterClass, setLetterClass] = useState('text-animate')
    const about_array = ['A','b','o','u','t','  ','m','e']
    //idx=15 means the delay of the animation is 15s letter

    useEffect( () => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
              }, 3000)
        }
    }, [] )

    return (
        <div className="container about-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={about_array}
                        idx={15}
                    />
                </h1>

                <p>
                    I'm a very ambitious FullStack developer looking for a role in an
                    established IT, Software company with the opportunity to work with the latest
                    technologies or trends on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, elder brother to my siblings, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>

            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faNodeJs} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faDatabase} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
            

                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About
