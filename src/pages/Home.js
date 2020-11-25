import React from 'react';
import { Link } from 'react-router-dom';
import home from '../imgs/home.png';
import './pageCSS/results.css';

function Home() {
    return (
        <div className="results">
            <div className="results-flexbox-container" id="home-container">
                <img id="home" src={home} alt="home icon"/>
                <h1>Monitor for symptoms, stay at home.</h1>
                <ul>
                    <li>Stay home for 14 days</li>
                    <li>
                    Take your temperature twice a day and watch for symptoms of COVID-19
                    </li>
                    <li>Practice social distancing</li>
                    <ul>
                    <li>
                        Stay at least 6 feet away from others and stay out of crowded places
                    </li>
                    <li>
                        If possible, stay away from people who are at higher risk for
                        getting very sick from COVID-19
                    </li>
                    </ul>
                    <li>
                    If you develop symptoms, follow CDC guidlines to protect yourself and
                    others
                    </li>
                </ul>

                <h2 className="sidenote">No COVID-19 testing needed at this time</h2>
                <p>Based on your answers, you do not need to get tested at this time.</p>
                <Link className="home-link" to="/">Return home</Link>
            </div>   
        </div>
    )
}

export default Home;
