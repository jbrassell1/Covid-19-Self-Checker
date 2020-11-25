
import {Link} from 'react-router-dom';
import '../../App.js';
import { ErrorMessage, Field} from 'formik';
import React from 'react';
import {BeatLoader} from 'react-spinners';


function Submit(props){
    return (
        <div className="questions">        
            <div className="nav-container">
                <Link to="/questions/question6" className="q2-next-link">
                    <button className="prev" >Go Back</button>
                </Link>
            </div>
            
            <div className="submit-container">
                <label htmlFor="zip">Enter Zip-code:</label>
                <Field
                id="zip"
                name="zip"
                type="text"
                pattern="[0-9]*"
                />
                <button type="submit" id="submit-button" className="form-submit-btn" disabled={props.onformik}>Submit</button> 
                
            </div> 
            <ErrorMessage name="zip">
                    {
                        (errorMsg) => <div className="zip-error">{errorMsg}</div>
                    }
            </ErrorMessage>
        </div>

    );
}

export default Submit;