
import {Link} from 'react-router-dom';
import '../../App.js';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import React from 'react';

function Q6(){
   
    return (
        <div className="questions">
            <div id="question6" className="q-container">
                <h2>Do you smoke or vape?</h2>
                <div id="q6-ans" className="ans">
                    <fieldset>
                        <Field type="radio" id="yes6" name="yes_no6" value="yes" />
                        <label htmlFor="yes6">Yes</label>
                        <Field type="radio" id="no6" name="yes_no6" value="no" />
                        <label htmlFor="no6">No</label>
                        <ErrorMessage name="yes_no6" component={TextError}/>
                    </fieldset>
                </div>
            </div>
            <div className="nav-container">
                <Link to="/questions/question5" className="q2-next-link">
                    <button className="prev" >prev</button>
                </Link>
                <Link to="/questions/submit" className="q2-next-link">
                    <button className="next" >next</button>
                </Link>
            </div>
        </div>
    );
}

export default Q6;