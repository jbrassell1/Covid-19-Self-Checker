
import {Link} from 'react-router-dom';
import '../../App.js';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import React from 'react';

function Q5(){
  
    return (
        <div className="questions">
            <div id="question5" className="q-container">
                <h2>Do you have any underlying health conditions?</h2>
                <div id="q5-ans" className="ans">
                    <fieldset>
                        <Field type="radio" id="yes5" name="yes_no5" value="yes" />
                        <label htmlFor="yes5">Yes</label>
                        <Field type="radio" id="no5" name="yes_no5" value="no" />
                        <label htmlFor="no5">No</label>
                        <ErrorMessage name="yes_no5" component={TextError}/>
                    </fieldset>
                </div>
            </div>
            <div className="nav-container">
                <Link to="/questions/question4" className="q2-next-link">
                    <button className="prev" >prev</button>
                </Link>
                <Link to="/questions/question6" className="q2-next-link">
                    <button className="next" >next</button>
                </Link>
            </div>
        </div>
    );
}

export default Q5;