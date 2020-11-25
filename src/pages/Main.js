import tissue from '../imgs/tissue.png';
import clean from '../imgs/clean.png';
import mask from '../imgs/mask.png';
import social from '../imgs/social.png';
import hands from '../imgs/hands.png';
import c19 from '../imgs/c19.png';
import plus from '../imgs/pngguru.com.png';
import '../App.js';
import './pageCSS/Main.css';
import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import {Helmet} from 'react-helmet';
import firebase from 'firebase/app';

import 'firebase/auth';


function Main() {
    useEffect(() => {
        // When a user gets on the page, the user is automatically signed in anonymously with firebase authentication.
        // Since data persistence is enabled, the user will only be able to make a for once and store the results in firestore.
        // If the user tries to submit another form, it would only update the existing form to prevent spamming
        firebase.auth().signInAnonymously().then(cred => {
            console.log(cred.user.uid);
        })
        
    }, [])
    
    
    return (
        <div className="Main">
             {/* Handles metadata */}
            <Helmet>
                <title>Covid-19 Self-Assessment</title>
                <meta name="author" content="Jalen Brassell"/>
                <meta
                    name="description"
                    content="A survey that advises the user on the next steps to take, based on the answers given in the assessment"
                />
                <meta
                    name="keywords"
                    content="COVID-19, corona virus, virus, covid, self-checker, self check, symptoms"
                />
                <link rel="icon" type="image/png" href={plus} />
            </Helmet>
            <div className="main-body">
                <img
                    id="covid-logo"
                    src={c19}
                    alt="logo for COVID-19 Intelligence Briefing Service"
                />
                <header className="main-header"></header>
                <div className="flexbox-container">
                    <div className="flexbox-item flexbox-item1">
                        <section>
                            <h2>Watch for Symptoms</h2>
                            <p>
                                People who have test positive for COVID-19 have symptoms ranging
                                from mild symptoms to more severe illnesses. Exposure to the virus
                                may cause symptoms to appear 2-14 days after the initial infection.
                                These symptoms include:
                            </p>
                            <ul>
                                <li>Fevor or chills</li>
                                <li>Cough</li>
                                <li>Shortness of breath or difficulty breathing</li>
                                <li>Fatigue</li>
                                <li>Muscle or body aches</li>
                                <li>Headache</li>
                                <li>Sore throat</li>
                                <li>Congestion or runny nose</li>
                                <li>Nausea or vomiting</li>
                                <li>Diarrhea</li>
                            </ul>
                            <p>
                                As more information is learned about the virus, this information
                                will be updated with the latest information from the CDC (The Center
                                for Disease Control).
                            </p>
                        </section>
                    </div>
                    <div className="flexbox-item flexbox-item2">
                        <section>
                            <h1>Coronavirus Self-checker</h1>
                            <p>
                                The Coronavirus Self-checker is a tool used to give feedback on
                                appropriate actions to take if you suspect that you may have
                                contracted or has come into contracted with someone who has
                                COVID-19. Below is link to a survey that will ask a series of
                                questions and recommend the best course of action and helpful
                                resources tailored to your specific situation.
                            </p>
                            <Link to="/questions/question1" className="form-btn-container">
                                <button className="form-start-btn">Start</button>
                            </Link>
                        </section>
                        <h2 id="rem">Remember to:</h2>
                        <div className="imgs-container">
                            <img
                                className="imgs"
                                id="tissue"
                                src={tissue}
                                alt="tissue box"
                            />
                            <img
                                className="imgs"
                                id="clean"
                                src={clean}
                                alt="cleaning spray"
                            />
                            <img
                                className="imgs"
                                id="mask"
                                src={mask}
                                alt="person wearing mask"
                            />
                            <img
                                className="imgs"
                                id="social"
                                src={social}
                                alt="social distancing"
                            />
                            <img
                                className="imgs"
                                id="hands"
                                src={hands}
                                alt="hand washing"
                            />
                        </div>
                    </div>
                    <div className="flexbox-item flexbox-item3">
                        <section>
                            <h2>Protect Yourself and Others</h2>
                            <p>
                                Older adults and people with underlying health conditions have an
                                increased risk of of becoming severely ill from the virus. Currently
                                there is no vaccine to prevent COVID-19, so here is a list of things
                                you can do to avoid being exposed to the virus:
                            </p>
                            <ul>
                                <li>Wash your hands often</li>
                                <li>Avoid close contact</li>
                                <li>
                                Cover your mouth and nose with a mask when around other people
                                </li>
                                <li>Cover coughs and sneezes</li>
                                <li>Clean and disinfect</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Main;