
import {Link} from 'react-router-dom';
import '../../App.js';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import React from 'react';

function Q4(){

    

    return (
        <div className="questions">
            <div id="question4" className="q-container">
                <h2>
                In the past two weeks, did you have contact with someone diagnosed
                with COVID-19?
                </h2>
                <div id="q4-ans" className="ans">
                    <fieldset>
                        <Field type="radio" id="yes4" name="yes_no4" value="yes" />
                        <label htmlFor="yes4">Yes</label>
                        <Field type="radio" id="no4" name="yes_no4" value="no" />
                        <label htmlFor="no4">No</label>
                        <Field type="radio" id="idk4" name="yes_no4" value="idk" />
                        <label htmlFor="idk4">I don't Know</label>
                        <ErrorMessage name="yes_no4" component={TextError}/>
                    </fieldset>
                </div>
            </div>
            <div className="nav-container">
                <Link to="/questions/question3" className="q2-next-link">
                    <button className="prev" >prev</button>
                </Link>
                <Link to="/questions/question5" className="q2-next-link">
                    <button className="next" >next</button>
                </Link>
            </div>
        </div>
    );
}

export default Q4;