import React from 'react';
import './pageCSS/results.css';
import phone from '../imgs/phone.png';
import { Link } from 'react-router-dom';

function Call() {
    return (
        <div className="results">
            <div className="results-flexbox-container">
                <img id="phone" src={phone} alt="phone icon"/>
                <h1>Call a medical provider within 24 hours</h1>
                <p>
                    Sorry you're not feeling well. Your symptoms may be related to COVID-19.
                    You may be at risk of becoming more seriously ill or infecting others.
                </p>
                <ul>
                    <li>
                    Call your healthcare provider, clinician advice line, or telemedicine
                    provider within 24 hours.
                    </li>
                    <li>Stay home except to get medical care.</li>
                    <ul>
                    <li>Do not go to work, school, or public areas.</li>
                    <li>Do not use public transportation or ride sharing.</li>
                    </ul>
                    <li>
                    If you think it is an emergency or you fell worse, seek medical care.
                    </li>
                    <li>Find telehealth services.</li>
                </ul>
                <h2 className="sidenote">You may be eligible for COVID-19 testing</h2>
                <p>
                    If you would like to be 100% positive that you don't have the virus, go
                    get tested. We recommend visiting your health department's website or
                    find a local testing site near you.
                </p>
                <Link className="home-link" to="/">Return home</Link>
            </div>
        </div>
    )
}

export default Call;
