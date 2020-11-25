import '../../App.js';
import { Link} from 'react-router-dom';
import './QuestionCSS/Qs_1.css';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError.js';
import React from 'react';


function Q1() {
    return (
        <div className="questions">
            <div id="question1" className="q-container">
            <h2>Do you have any of these severe symptoms?</h2>
            <ul id="q1-list">
            <li>Bluish lips or face</li>
            <li>Sever and constant pain or pressure in the chest</li>
            <li>
                Extreme difficulty breathing (such as gasping for air or being
                unable to talk without catching your breath)
            </li>
            <li>Severe and constant dizziness or lightheadedness</li>
            <li>Serious disorientation (acting confused)</li>
            <li>Unconscious or very difficult to wake up</li>
            <li>Slurred speech or difficulty speaking (new or worsening)</li>
            <li>Seizures</li>
            <li>
                Signs of low blood pressure (too weak to stand, light headed,
                feeling cold, pale, clammy skin)
            </li>
            </ul>
            <div id="q1-ans" className="ans">
            <fieldset>
                <Field type="radio" id="yes1" name="yes_no1" value="yes"/>
                <label htmlFor="yes1">Yes</label>
                <Field type="radio" id="no1" name="yes_no1" value="no" />
                <label htmlFor="no1">No</label>
                <ErrorMessage name='yes_no1' component={TextError}/>
            </fieldset>
            </div>
        </div>
        <div className="nav-container">
            <Link to="/questions/question2" className="q1-next-link">
                <button className="next">next</button>
            </Link>
        </div>
    </div>
        
    );
}
  
export default Q1;