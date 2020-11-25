import React from 'react'
import urgent from '../imgs/urgent.png';
import { Link } from 'react-router-dom';
import './pageCSS/results.css';
import {BeatLoader} from 'react-spinners';

function Urgent() {
    return (
        <div className="results">
            <div className="results-flexbox-container">
                <img id="urgent" src={urgent} alt="urgent icon"/>
                <h1>
                    Urgent medical attention may be needed. Please call 911 or go to the
                    Emergency Department
                </h1>
                <p>
                    Based on your symptoms, you may need urgent medical care. Please call
                    911 or go to the nearest emergency department. Tell the 911 operator or
                    emergency staff if you have had contact with someone with COVID-19.
                </p>
                <Link className="home-link" to="/">Return home</Link>
                <BeatLoader color="dodgerblue"/>
            </div>
        </div>
    )
}

export default Urgent
