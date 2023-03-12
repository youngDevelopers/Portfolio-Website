import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './contact.scss';

function Contact() {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    return (
        <div>
            Contact
        </div>
    )
}

export default Contact
