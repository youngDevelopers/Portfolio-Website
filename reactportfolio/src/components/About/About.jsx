import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './about.scss'

function About() {

    const about_array = ['A','b','o','u','t','  ','m','e']
    //idx=15 means the delay of the animation is 15s letter

    return (
        <div className="container about-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
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
        </div>
    )
}

export default About
