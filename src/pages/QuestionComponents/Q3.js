
import {Link} from 'react-router-dom';
import '../../App.js';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import React from 'react';

function Q3(){


    return (
        <div className="questions">
                    <div id="question3" className="q-container">
                        <h2>Are you feeling ill?</h2>
                        <div id="q3-ans" className="ans">
                            <fieldset>
                                <Field type="radio" id="yes3" name="yes_no3" value="yes" />
                                <label htmlFor="yes3">Yes</label>
                                <Field type="radio" id="no3" name="yes_no3" value="no" />
                                <label htmlFor="no3">No</label>
                                <ErrorMessage name="yes_no3" component={TextError}/>
                            </fieldset>
                        </div>
                        <h3>If yes, what symptoms are you feeling?</h3>
                        
                        <div id="q3-check" className="ans">
                            <fieldset>
                                <Field type="checkbox" id="fever" name="symp" value="fever" />
                                <label htmlFor="fever">Fever</label>
                                <Field type="checkbox" id="fatigue" name="symp" value="fatigue" />
                                <label htmlFor="fatigue">Fatigue</label>
                                <Field type="checkbox" id="sore-throat" name="symp" value="sore-throat" />
                                <label htmlFor="sore-throat">Sore throat</label>
                                <Field type="checkbox" id="cough" name="symp" value="cough" />
                                <label htmlFor="cough">Cough</label>
                                <Field type="checkbox" id="breath" name="symp" value="breath" />
                                <label htmlFor="breath">Shortness of breath</label>
                                <Field type="checkbox" id="smell" name="symp" value="smell" />
                                <label htmlFor="smell">Loss of smell</label>
                                <Field type="checkbox" id="diar" name="symp" value="diar" />
                                <label htmlFor="diar">Diarrhea</label>
                                <Field type="checkbox" id="body" name="symp" value="body" />
                                <label htmlFor="body">Body aches</label>
                                <Field type="checkbox" id="head" name="symp" value="head" />
                                <label htmlFor="head">Headache</label>
                                <Field type="checkbox" id="eye" name="symp" value="eye" />
                                <label htmlFor="eye">Pink Eye</label>
                                <Field type="checkbox" id="none" name="symp" value="none" />
                                <label htmlFor="none">N/A</label>
                                <ErrorMessage name="symp" component={TextError}/>
                            </fieldset>
                        </div>
                        <h3>How long have you had symptoms?</h3>
                        <div id="q3-time" className="ans">
                            <fieldset>
                                <Field type="radio" id="lt2" name="time" value="lt2" />
                                <label htmlFor="lt2">Less than two days</label>
                                <Field type="radio" id="2-4" name="time" value="2-4" />
                                <label htmlFor="2-4">Two to four days</label>
                                <Field type="radio" id="5-7" name="time" value="5-7" />
                                <label htmlFor="5-7">Five to seven days</label>
                                <Field type="radio" id="7+" name="time" value="7+" />
                                <label htmlFor="7+">Seven or more days</label>
                                <Field type="radio" id="none3" name="time" value="none" />
                                <label htmlFor="none3">N/A</label>
                                <ErrorMessage name="time" component={TextError}/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="nav-container">
                        <Link to="/questions/question2" className="q2-next-link">
                            <button className="prev" >prev</button>
                        </Link>
                        
                        <Link to="/questions/question4" className="q2-next-link">
                            <button className="next" >next</button>
                        </Link>
                    </div>
                </div>
    );
}
export default Q3;