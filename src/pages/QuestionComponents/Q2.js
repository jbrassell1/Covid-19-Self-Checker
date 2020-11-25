
import {Link} from 'react-router-dom';
import './QuestionCSS/Qs_2.css';
import '../../App.js';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import React from 'react';

function Q2() {
   
    return (
        <div className="questions">
                    <div id="question2" className="q-container">
                        <h2>What is your age?</h2>
                        <div id="q2-ans" className="ans">
                            <fieldset>
                                <Field type="radio" id="18-29" name="age" value="18-29" />
                                <label htmlFor="18-29">18-29</label>
                                <Field type="radio" id="30-39" name="age" value="30-39" />
                                <label htmlFor="30-39">30-39</label>
                                <Field type="radio" id="40-49" name="age" value="40-49" />
                                <label htmlFor="40-49">40-49</label>
                                <Field type="radio" id="50-59" name="age" value="50-59" />
                                <label htmlFor="50-59">50-59</label>
                                <Field type="radio" id="60-64" name="age" value="60-64" />
                                <label htmlFor="60-64">60-64</label>
                                <Field type="radio" id="65+" name="age" value="65+" />
                                <label htmlFor="65+">65+</label>
                                <ErrorMessage name="age" component={TextError}/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="nav-container">
                        <Link to="/questions/question1" className="q2-next-link">
                            <button className="prev" >prev</button>
                        </Link>
                        
                        <Link to="/questions/question3" className="q2-next-link">
                            <button className="next" >next</button>
                        </Link>
                        
                    </div>
                </div>
        
    );
}
  
export default Q2;